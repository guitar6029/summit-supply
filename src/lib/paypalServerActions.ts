// lib/paypalServerActions.ts

const PAYPAL_CLIENT_ID = process.env.NEXT_PAYPAL_CLIENT_ID!;
const PAYPAL_SECRET = process.env.NEXT_PAYPAL_SECRET!;
const PAYPAL_API_BASE = "https://api.sandbox.paypal.com"; // Use live URL in production

import type { CartItem } from "@/types/Cart";

// Get PayPal Access Token
export async function getPayPalAccessToken(): Promise<string> {
  // Logic for getting PayPal access token
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
// Create PayPal Order
export async function createPayPalOrder(
  cart: CartItem[],
  shippingCost: number,
  total: string,
  shippingAddress: {
    address_line_1: string;
    admin_area_2: string;
    admin_area_1: string;
    postal_code: string;
    country_code: string;
  }
) {
  const accessToken = await getPayPalAccessToken();

  const orderResponse = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: total,
            breakdown: {
              item_total: { currency_code: "USD", value: total },
              shipping: { currency_code: "USD", value: shippingCost },
            },
          },
          items: cart.map((item: CartItem) => ({
            name: item.model,
            unit_amount: {
              currency_code: "USD",
              value: item.price,
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
    }),
  });

  if (!orderResponse.ok) {
    const errorDetails = await orderResponse.json();
    throw new Error(
      errorDetails?.details?.[0]?.description || "Failed to create PayPal order"
    );
  }

  const orderData = await orderResponse.json();
  if (!orderData.id) {
    throw new Error("PayPal order creation failed: Order ID is missing.");
  }

  return orderData.id;
}

// Capture PayPal Order
export async function capturePayPalOrder(orderId: string) {
  // Logic to capture the PayPal order
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

  if (!captureResponse.ok) throw new Error("Failed to capture PayPal order");
  return await captureResponse.json();
}
