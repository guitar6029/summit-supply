"use client";
import { create } from "zustand";
import type { CartItem } from "@/types/Cart";
import { toast } from 'react-toastify';

// Define the store type
type CartState = {
  shoppingCart: CartItem[];
  addToShoppingCart: (
    id: number,
    model: string,
    price: number,
    quantity: number,
    size: number,
    bootImage: string
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
  addToShoppingCart: (id, model, price, quantity, size, bootImage) => {
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
                total: item.price * (item.quantity + quantity),
                bootImage: item.bootImage,
              }
            : item
        );
        // Add toast notification
        toast.success('Item added to cart', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
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
            total: price * quantity,
            bootImage,
          },
        ];

        toast.success('Item added to cart', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
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
            ? { ...item, quantity: item.quantity - 1, total: item.total - item.price }
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
          ? { ...item, quantity: item.quantity + 1, total: item.total + item.price }
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
    if (typeof window !== "undefined" && window.localStorage) {
      const cart = localStorage.getItem("shoppingCart");
      if (cart) {
        const total = JSON.parse(cart).reduce((total: number, item: CartItem) => total + item.total, 0);
        return total.toFixed(2);
      }
    }
    return "0"; // Return 0 if no items in the cart or not in the browser
  },
}));

export default useCart;
