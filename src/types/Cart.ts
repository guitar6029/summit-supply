import type { ShoeType } from "@/types/Shoe";

export type CartItem = {
  id: number;
  model: string;
  price: number;
  quantity: number;
  size: number;
  img_url: string;
  total: number;
  shoe_type: ShoeType;
};

export type CheckoutItem = CartItem & {
  shippingCost: number;
};

export type CheckoutCartDataItem = {
  cart: CartItem[]; // Array of CartItem objects representing the shopping cart.
  shippingCost: string; // Shipping cost formatted as a string (e.g., "10.99").
  total: string; // Total amount formatted as a string (e.g., "50.00").
  shippingAddress: {
    shippingAddress: string; // Street address
    shippingCity: string; // City
    shippingState: string; // State
    shippingPostalCode: string; // Postal code
    shippingCountry: string; // Country code in uppercase (e.g., "US")
  };
};
