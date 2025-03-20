// api/orders/route.ts
import {
  createPayPalOrder,
  capturePayPalOrder,
} from "@/lib/paypalServerActions";

export async function POST(req: Request) {
  try {
    const { cart, shippingCost, total, shippingAddress } = await req.json(); // Parse the incoming request body

    //types gets lost here, so we have to cast as number for shippingCost and total
    const shippingCostNumber = Number(shippingCost);
    const totalNumber = Number(total);

    const orderId = await createPayPalOrder(
      cart,
      shippingCostNumber,
      totalNumber,
      shippingAddress
    ); // Call the lib function

    return new Response(JSON.stringify({ orderId })); // Return the PayPal order ID to the client
  } catch (error) {
    console.error("Error creating PayPal order:", error); // Log the full error
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const { orderId } = await req.json(); // Get the orderId from the request body
    const captureData = await capturePayPalOrder(orderId); // Capture the PayPal order
    return new Response(JSON.stringify(captureData)); // Return the capture response to the client
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}
