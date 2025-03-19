"use client";
import { useForm } from "react-hook-form";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CartItem } from "@/types/Cart";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for toast notifications
import { useState } from "react";

type Inputs = {
  shippingAddress: string;
  shippingCity: string;
  shippingState: string;
  shippingPostalCode: string;
  shippingCountry: string;
};

export default function CheckoutForm({
  shoppingCart,
  shippingCost,
  finalTotal,
  onPaymentSuccess,
}: {
  shoppingCart: CartItem[];
  shippingCost: number;
  finalTotal: string;
  onPaymentSuccess: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const [loading, setLoading] = useState<boolean>(false); // Add loading state

  // PayPal Options
  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID! || "test",
    "enable-funding": "paylater, card",
  };

  // API Order Creation
  const createOrder = async (data: Inputs) => {
    setLoading(true); // Disable the button when order creation starts
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cart: shoppingCart,
          shippingCost: shippingCost.toFixed(2),
          total: finalTotal,
          shippingAddress: {
            address_line_1: data.shippingAddress, // Street address
            admin_area_2: data.shippingCity,      // City
            admin_area_1: data.shippingState,     // State
            postal_code: data.shippingPostalCode, // Postal code
            country_code: data.shippingCountry.toUpperCase(), // Country code (should be in uppercase, e.g., "US")
          },
        }),
      });

      if (!response.ok) throw new Error("Failed to create order");

      const orderData = await response.json();
      toast.success("Order successfully created!"); // Show success toast
      onPaymentSuccess();
      

      return orderData.id;
    } catch (error) {
      console.error(error);
      toast.error("Order creation failed."); // Show error toast
      alert("Order creation failed.");
      setLoading(false); // Re-enable button on failure
    }
  };

  // PayPal Order Capture
  const capturePayment = async (orderID: string) => {
    console.log("capturePayment called"); 
    console.log("orderID", orderID);
    try {
      const response = await fetch(`/api/orders/${orderID}/capture`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const orderData = await response.json();
      console.log('orderData ::', orderData);
      if (orderData?.purchase_units?.[0]?.payments?.captures?.[0]) {
        toast.success("Payment successful!"); // Show success toast
        console.log('Payment successful!, will call onPaymentSuccess');
        onPaymentSuccess();

        
      } else {
        toast.error("Payment failed."); // Show error toast
        alert("Payment failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Transaction error."); // Show error toast
      alert("Transaction error.");
    }
  };

  return (
    <form onSubmit={handleSubmit(createOrder)} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Street Address"
        {...register("shippingAddress", { required: "Address is required" })}
      />
      {errors.shippingAddress && <p>{errors.shippingAddress.message}</p>}

      <input
        type="text"
        placeholder="City"
        {...register("shippingCity", { required: "City is required" })}
      />
      {errors.shippingCity && <p>{errors.shippingCity.message}</p>}

      <input
        type="text"
        placeholder="State"
        {...register("shippingState", { required: "State is required" })}
      />
      {errors.shippingState && <p>{errors.shippingState.message}</p>}

      <input
        type="text"
        placeholder="Postal Code"
        {...register("shippingPostalCode", {
          required: "Postal Code is required",
        })}
      />
      {errors.shippingPostalCode && <p>{errors.shippingPostalCode.message}</p>}

      <input
        type="text"
        placeholder="Country"
        {...register("shippingCountry", { required: "Country is required" })}
      />
      {errors.shippingCountry && <p>{errors.shippingCountry.message}</p>}

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 mt-2 rounded"
        disabled={loading} // Disable submit button while loading
      >
        {loading ? "Processing..." : "Submit Order"}
      </button>

      {/* PayPal Checkout */}
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{ shape: "rect", layout: "vertical" }}
          createOrder={async (data, actions) => {
            return createOrder({
              shippingAddress: watch("shippingAddress"),
              shippingCity: watch("shippingCity"),
              shippingState: watch("shippingState"),
              shippingPostalCode: watch("shippingPostalCode"),
              shippingCountry: watch("shippingCountry"),
            });
          }}
          onApprove={async (data, actions) => { 
            console.log("onApprove called");
            capturePayment(data.orderID) 
          } }
        />
      </PayPalScriptProvider>
    </form>
  );
}
