"use client";
import { create } from "zustand";
import type { CartItem } from "@/types/Cart";
import { toast } from "react-toastify";
import { ShoeType } from "@/types/Shoe";

// Define the store type
type CartState = {
  shoppingCart: CartItem[];
  addToShoppingCart: (
    id: number,
    model: string,
    price: number,
    quantity: number,
    size: number,
    img_url: string,
    shoe_type: ShoeType
  ) => void;
  increaseQuantity: (id: number, size: number) => void;
  decreaseQuantity: (id: number, size: number) => void;
  removeItem: (id: number, size: number) => void;
  clearAllItems: () => void;
  shoppingCartIsEmpty: () => boolean;
  getTotalPrice: () => number;
};

// Load cart data from localStorage, with checks for browser environment
const loadCartFromLocalStorage = (): CartItem[] => {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const storedCart = localStorage.getItem("shoppingCart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error loading cart from local storage:", error);
      return [];
    }
  }
  return []; // Return an empty array if not in the browser environment
};

// Zustand store with types
const useCart = create<CartState>((set) => ({
  shoppingCart: loadCartFromLocalStorage(), // Initial state
  addToShoppingCart: (id, model, price, quantity, size, img_url, shoe_type) => {
    set((state) => {
      const foundItem = state.shoppingCart.find(
        (item) => item.id === id && item.size === size
      );

      let updatedCart;

      if (foundItem) {
        // Update quantity if item already exists
        updatedCart = state.shoppingCart.map((item) =>
          item.id === id && item.size === size
            ? {
                ...item,
                quantity: item.quantity + quantity,
                price: item.price,
                img_url: item.img_url,
                shoe_type: item.shoe_type,
              }
            : item
        );
        // Add toast notification
        toast.success(`${model} added to cart`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      } else {
        // Add new item if it doesn't exist
        updatedCart = [
          ...state.shoppingCart,
          {
            id,
            model,
            price,
            quantity,
            size,
            img_url,
            shoe_type,
          },
        ];

        toast.success(`${model} added to cart`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }

      // Save the cart to local storage
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
      }

      return { shoppingCart: updatedCart };
    });
  },
  decreaseQuantity: (id, size) =>
    set((state) => {
      const updatedCart = state.shoppingCart
        .map((item) =>
          item.id === id && item.size === size
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove items with quantity 0

      // Save the cart to local storage
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
      }

      return { shoppingCart: updatedCart };
    }),
  increaseQuantity: (id, size) =>
    set((state) => {
      const updatedCart = state.shoppingCart.map((item) =>
        item.id === id && item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      // Save the cart to local storage
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
      }

      return { shoppingCart: updatedCart };
    }),
  removeItem: (id, size) =>
    set((state) => {
      const updatedCart = state.shoppingCart.filter(
        (item) => item.id !== id || item.size !== size
      );

      // Save the cart to local storage
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
      }

      return { shoppingCart: updatedCart };
    }),
  clearAllItems: () =>
    set(() => {
      // Clear from local storage
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.removeItem("shoppingCart");
      }
      return { shoppingCart: [] };
    }),
  shoppingCartIsEmpty: () => {
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        const cart = localStorage.getItem("shoppingCart");
        return cart ? JSON.parse(cart).length === 0 : true;
      } catch (error) {
        console.error("Error loading cart from local storage:", error);
        return true;
      }
    }
    return true; // Assume cart is empty if not in the browser environment
  },
  getTotalPrice: () => {
    const { shoppingCart }: { shoppingCart: CartItem[] } = useCart.getState(); // Access the current state of the shoppingCart
    const total: number = shoppingCart.reduce(
      (total: number, item: CartItem) => total + item.price * item.quantity, // Calculate total for each item
      0
    );
    return Number(total.toFixed(2)); // Return the total as a string with 2 decimal places
  },
}));

export default useCart;
