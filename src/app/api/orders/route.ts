// api/orders/route.ts
import {
  createPayPalOrder,
  capturePayPalOrder,
} from "@/lib/paypalServerActions";

export async function POST(req: Request) {
  try {
    const { cart, shippingCost, total, shippingAddress } = await req.json(); // Parse the incoming request body
    // console.log('Received cart:', cart); // Log cart for debugging
    // console.log('Received shippingCost:', shippingCost); // Log shippingCost for debugging
    // console.log('Received total:', total); // Log total for debugging
    // console.log('Received shippingAddress:', shippingAddress); // Log shippingAddress for debugging

    const orderId = await createPayPalOrder(
      cart,
      shippingCost,
      total,
      shippingAddress
    ); // Call the lib function
    //console.log('PayPal order ID:', orderId); // Log the order ID for debugging

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
