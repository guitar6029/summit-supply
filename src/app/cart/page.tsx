"use client";

import useCart from "@/store/useCart";
import type { CartItem } from "@/types/Cart";
export default function ShoppingCartOverview() {
  const { shoppingCart } = useCart();

  return (
    <div className="min-h-screen mt-[10rem] bg-[#1b5659]">
      <h1 className="hiking-font text-4xl">Shopping Cart</h1>
      <hr />
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="col-span-1">
          <span>PRODUCT</span>
        </div>
        <div className="col-span-1">
          <span>QUANTITY</span>
        </div>
        <div className="col-span-1">
          <span>TOTAL</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {shoppingCart.map((shoppingCartItem: CartItem, index: number) => (
          <div key={index}>
            <div className="col-span-1">
              <span className="hiking-font text-4xl">
                {shoppingCartItem.model}
              </span>
            </div>
            <div className="col-span-1">{shoppingCartItem.quantity}</div>
            <div className="col-span-1">{shoppingCartItem.size}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
