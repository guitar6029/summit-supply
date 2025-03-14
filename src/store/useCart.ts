"use client";

import { create } from "zustand";
import type { CartItem } from "@/types/Cart";


// Define the store type
type CartState = {
    shoppingCart: CartItem[];
    addToShoppingCart: (id: number, model: string, quantity: number, size: number) => void;
    clearAllItems: () => void;
};

// Zustand store with types
const useCart = create<CartState>((set) => ({
    shoppingCart: [], // Initial state
    addToShoppingCart: (id, model, quantity, size) => {
        console.log('shopping cart called , id , showModel, quantity, size', id, model, quantity, size)
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
                console.log('adding new items')
                return {
                    shoppingCart: [...state.shoppingCart, { id, model, quantity, size }],
                };
            }
        });
    },
    clearAllItems: () => set({ shoppingCart: [] }), // Clears all cart items
}));

export default useCart;
