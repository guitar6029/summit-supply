// lib/paypalServerActions.ts

const PAYPAL_CLIENT_ID = process.env.NEXT_PAYPAL_CLIENT_ID!;
const PAYPAL_SECRET = process.env.NEXT_PAYPAL_SECRET!;
const PAYPAL_API_BASE = "https://api.sandbox.paypal.com"; // Use live URL in production

import type { CartItem } from "@/types/Cart";

// Get PayPal Access Token
export async function getPayPalAccessToken(): Promise<string> {
  const authResponse = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`
      ).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  });

  if (!authResponse.ok) throw new Error("Failed to fetch PayPal access token");
  const authData = await authResponse.json();
  return authData.access_token;
}

// Create PayPal Order
export async function createPayPalOrder(
  cart: CartItem[],
  shippingCost: number,
  total: number,
  shippingAddress: {
    address_line_1: string;
    admin_area_2: string;
    admin_area_1: string;
    postal_code: string;
    country_code: string;
  }
) {
  // Log to check the input data
  console.log("Creating PayPal order with the following data:");
  console.log("Cart Items:", cart);
  console.log("Shipping Cost:", shippingCost);
  console.log("Total:", total);
  console.log("Shipping Address:", shippingAddress);

  const accessToken = await getPayPalAccessToken();

  // Calculate the item_total dynamically (sum of cart items without shipping)
  const itemTotal = cart.reduce(
    (acc, item: CartItem) => acc + item.price * item.quantity,
    0
  );
  // Convert itemTotal to a number and apply toFixed(2)
  const itemTotalFormatted = parseFloat(itemTotal.toFixed(2));

  console.log("Calculated item total (formatted):", itemTotalFormatted);

  // Add a small tolerance to compare numbers
  const tolerance = 0.01; // Small tolerance for floating-point comparison

  // If the calculated itemTotal doesn't match the passed total (without shipping), throw an error
  if (Math.abs(itemTotalFormatted - total) > tolerance) {
    console.error(
      `Calculated item total (${itemTotalFormatted}) does not match passed total minus shipping (${total})`
    );
    throw new Error("ITEM_TOTAL_MISMATCH: The total value is incorrect.");
  }

  const orderData = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: (itemTotalFormatted + shippingCost).toFixed(2), // Ensure total value includes both items and shipping
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: itemTotalFormatted.toFixed(2), // Use dynamically calculated item total (excluding shipping)
            },
            shipping: {
              currency_code: "USD",
              value: shippingCost.toFixed(2),
            },
          },
        },
        items: cart.map((item: CartItem) => ({
          name: item.model,
          unit_amount: {
            currency_code: "USD",
            value: item.price.toFixed(2), // Ensure item price is correctly formatted
          },
          quantity: item.quantity,
        })),
        shipping: {
          name: { full_name: "John Doe" }, // Ensure full_name is provided here
          address: {
            address_line_1: shippingAddress.address_line_1,
            admin_area_2: shippingAddress.admin_area_2,
            admin_area_1: shippingAddress.admin_area_1,
            postal_code: shippingAddress.postal_code,
            country_code: shippingAddress.country_code,
          },
        },
      },
    ],
    application_context: {
      brand_name: "Supply Summit",
      landing_page: "BILLING",
      shipping_preference: "SET_PROVIDED_ADDRESS", // Ensure address is provided here
      user_action: "PAY_NOW",
    },
  };

  // Log the order data before sending it to PayPal
  console.log(
    "Order Data to be sent to PayPal:",
    JSON.stringify(orderData, null, 2)
  );

  const orderResponse = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(orderData),
  });

  if (!orderResponse.ok) {
    const errorDetails = await orderResponse.json();
    console.error("Error creating PayPal order:", errorDetails); // Log the error response
    throw new Error(
      errorDetails?.details?.[0]?.description || "Failed to create PayPal order"
    );
  }

  const orderResult = await orderResponse.json();
  console.log("PayPal order created successfully:", orderResult); // Log the response from PayPal

  if (!orderResult.id) {
    throw new Error("PayPal order creation failed: Order ID is missing.");
  }

  return orderResult.id;
}

// Capture PayPal Order
export async function capturePayPalOrder(orderId: string) {
  const accessToken = await getPayPalAccessToken();

  const captureResponse = await fetch(
    `${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!captureResponse.ok) {
    console.error(
      "Error capturing PayPal order:",
      await captureResponse.json()
    ); // Log capture error
    throw new Error("Failed to capture PayPal order");
  }

  const captureData = await captureResponse.json();
  console.log("PayPal order captured successfully:", captureData); // Log capture success
  return captureData;
}
