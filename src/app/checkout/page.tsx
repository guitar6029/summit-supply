"use client";

import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import useCart from "@/store/useCart";
import Image from "next/image";

function Message({ content }) {
  return <p className="text-red-500 mt-4">{content}</p>;
}

export default function CheckoutPage() {
  const { shoppingCart, getTotalPrice, clearAllItems } = useCart(); // Get cart data

  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID! || "test",
    "enable-funding": "paylater,venmo,card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  const [message, setMessage] = useState("");

  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice >= 300 ? 0 : 50; // Free shipping if over $300
  console.log("Total Price:", totalPrice, "Shipping Cost:", shippingCost);
  const finalTotal = (Number(totalPrice) + Number(shippingCost)).toFixed(2);

  console.log("Final Total:", finalTotal);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-10">
      <h1 className="hiking-font text-6xl text-amber-300">Checkout</h1>

      {/* 🛒 Cart Summary */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2 mt-6 text-black">
        <h2 className="text-2xl font-semibold">Order Summary</h2>
        <ul className="mt-4">
          {shoppingCart.map((item) => (
            <li key={item.id} className="flex justify-between border-b py-2">
              <div className="flex flex-row gap-2 items-center">
              <Image src={item.img_url} alt={item.model} width={50} height={50} />
              <span>{item.model}</span>

              </div>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>

        {/* 📦 Shipping Fee Logic */}
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

        {/* 🏁 Total */}
        <div className="flex justify-between mt-4 text-xl font-bold">
          <span>Total:</span>
          <span>${finalTotal}</span>
        </div>
      </div>

      {/* 🏦 PayPal Checkout */}
      <div className="mt-6 w-1/2">
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            style={{ shape: "rect", layout: "vertical" }}
            createOrder={async () => {
              try {
                const response = await fetch("/api/orders", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    cart: shoppingCart,
                    total: finalTotal, // Pass updated total with shipping
                  }),
                });

                const orderData = await response.json();
                if (orderData.id) return orderData.id;
                throw new Error(orderData?.details?.[0]?.description || "Error creating order");
              } catch (error) {
                console.error(error);
                setMessage(`Could not initiate PayPal Checkout... ${error.message}`);
              }
            }}
            onApprove={async (data, actions) => {
              try {
                const response = await fetch(`/api/orders/${data.orderID}/capture`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                });

                const orderData = await response.json();
                if (orderData?.details?.[0]?.issue === "INSTRUMENT_DECLINED") {
                  return actions.restart();
                } else if (orderData?.purchase_units?.[0]?.payments?.captures?.[0]) {
                  setMessage("✅ Payment successful! Thank you for your purchase.");
                  clearAllItems(); // Clear the cart after successful payment
                } else {
                  throw new Error("Payment failed.");
                }
              } catch (error) {
                console.error(error);
                setMessage(`Transaction could not be processed... ${error.message}`);
              }
            }}
          />
        </PayPalScriptProvider>
      </div>

      <Message content={message} />
    </div>
  );
}
