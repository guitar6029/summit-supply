"use client";
import useCart from "@/store/useCart";
import CheckoutForm from "@/components/Form/CheckoutForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { shoppingCart, getTotalPrice, clearAllItems } = useCart();

  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice >= 300 ? 0 : 50;
  const finalTotal = Number(totalPrice).toFixed(2);

  const router = useRouter();

  function handlePaymentSuccess() {
    clearAllItems();
    router.push("/");
  }

  return (
    <div className="min-h-screen flex flex-col mt-10">
      <h1 className="hiking-font text-6xl text-amber-300 p-10">Checkout</h1>
      <div className="flex flex-col md:flex-row items-center gap-2 p-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 text-black w-full ">
          <h2 className="text-2xl font-semibold">Order Summary</h2>
          <ul className="mt-4">
            {shoppingCart.map((item) => (
              <li key={item.id} className="flex justify-between border-b py-2">
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src={item.img_url}
                    alt={item.model}
                    width={50}
                    height={50}
                  />
                  <span className="text-3xl">{item.model}</span>
                </div>
                <span className="text-3xl">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-4 text-lg">
            <span className="text-3xl">Shipping:</span>
            {totalPrice >= 300 ? (
              <span className="text-green-600 font-bold">
                <s className="text-red-500 mr-2 text-3xl">$50.00</s> FREE
                SHIPPING
              </span>
            ) : (
              <span className="text-3xl">${shippingCost.toFixed(2)}</span>
            )}
          </div>

          <div className="flex justify-between mt-4 text-xl font-bold">
            <span className="text-3xl">Total:</span>
            <span className="text-3xl">${finalTotal}</span>
          </div>
        </div>
      </div>
      <div className="p-10 w-full md:w-[50vw]">
        <CheckoutForm
          shoppingCart={shoppingCart}
          shippingCost={shippingCost}
          finalTotal={finalTotal}
          onPaymentSuccess={handlePaymentSuccess}
        />
      </div>
    </div>
  );
}
