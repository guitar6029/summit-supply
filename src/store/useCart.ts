"use client";

import { create } from "zustand";
import type { CartItem } from "@/types/Cart";
import { StaticImageData } from "next/image";
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
    bootImage: StaticImageData
  ) => void;
  increaseQuantity: (id: number, size: number) => void;
  decreaseQuantity: (id: number, size: number) => void;
  removeItem: (id: number, size: number) => void;
  clearAllItems: () => void;
  shoppingCartIsEmpty: () => boolean;
};

// Load cart data from localStorage
const loadCartFromLocalStorage = (): CartItem[] => {
  try {
    const storedCart = localStorage.getItem("shoppingCart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error loading cart from local storage:", error);
    return [];
  }
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
        //add toast notification
        toast.success('Item added to cart', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true});
      } else {
        // Add new item if it doesn't exist
        console.log("adding new items");
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
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true});
      }

      // Save the cart to local storage
      localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
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
      localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
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
      localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
      return { shoppingCart: updatedCart };
    }),
  removeItem: (id, size) =>
    set((state) => {
      const updatedCart = state.shoppingCart.filter(
        (item) => item.id !== id || item.size !== size
      );

      // Save the cart to local storage
      localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
      return { shoppingCart: updatedCart };
    }),
  clearAllItems: () =>
    set(() => {
      // Clear from local storage
      localStorage.removeItem("shoppingCart");
      return { shoppingCart: [] };
    }),
  shoppingCartIsEmpty: () => {
    try {
      const cart = localStorage.getItem("shoppingCart");
      return cart ? JSON.parse(cart).length === 0 : true;
    } catch (error) {
      console.error("Error loading cart from local storage:", error);
      return true;
    }
  },
}));

export default useCart;
