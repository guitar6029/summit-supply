"use client";

import { create } from "zustand";
import type { CartItem } from "@/types/Cart";


// Define the store type
type CartState = {
    shoppingCart: CartItem[];
    addToShoppingCart: (id: number, shoeModel: string, quantity: number, size: number) => void;
    clearAllItems: () => void;
};

// Zustand store with types
const useCart = create<CartState>((set) => ({
    shoppingCart: [], // Initial state
    addToShoppingCart: (id, shoeModel, quantity, size) => {
        set((state) => {
            const foundItem = state.shoppingCart.find(
                (item) => item.id === id && item.size === size
            );

            if (foundItem) {
                // Update quantity if item already exists
                return {
                    shoppingCart: state.shoppingCart.map((item) =>
                        item.id === id && item.size === size
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    ),
                };
            } else {
                // Add new item if it doesn't exist
                return {
                    shoppingCart: [...state.shoppingCart, { id, shoeModel, quantity, size }],
                };
            }
        });
    },
    clearAllItems: () => set({ shoppingCart: [] }), // Clears all cart items
}));

export default useCart;
