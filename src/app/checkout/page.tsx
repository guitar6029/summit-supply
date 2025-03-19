"use client";

import { useState } from "react";
import useCart from "@/store/useCart";
import CheckoutForm from "@/components/Form/CheckoutForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { shoppingCart, getTotalPrice, clearAllItems } = useCart();
  const [message, setMessage] = useState("");

  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice >= 300 ? 0 : 50;
  const finalTotal = (Number(totalPrice) + Number(shippingCost)).toFixed(2);

  const router = useRouter();

  function handlePaymentSuccess() {
    //console.log("Hello, thanks for your purchase!");
    setMessage("✅ Payment successful! Thank you for your purchase.");
    clearAllItems();
    router.push("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-10">
      <h1 className="hiking-font text-6xl text-amber-300">Checkout</h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <CheckoutForm
          shoppingCart={shoppingCart}
          shippingCost={shippingCost}
          finalTotal={finalTotal}
          onPaymentSuccess={handlePaymentSuccess}
        />

        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2 mt-6 text-black">
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
                  <span>{item.model}</span>
                </div>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-4 text-lg">
            <span>Shipping:</span>
            {totalPrice >= 300 ? (
              <span className="text-green-600 font-bold">
                <s className="text-red-500 mr-2">$50.00</s> FREE SHIPPING
              </span>
            ) : (
              <span>${shippingCost.toFixed(2)}</span>
            )}
          </div>

          <div className="flex justify-between mt-4 text-xl font-bold">
            <span>Total:</span>
            <span>${finalTotal}</span>
          </div>
        </div>
      </div>

      {message && <p className="text-green-500 mt-4">{message}</p>}
    </div>
  );
}
