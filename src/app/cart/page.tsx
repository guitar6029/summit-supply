"use client";

import useCart from "@/store/useCart";
import type { CartItem } from "@/types/Cart";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import BearSittingDown from "@/assets/img/bear1.png";
export default function ShoppingCartOverview() {
  const { shoppingCart, increaseQuantity, decreaseQuantity, removeItem } =
    useCart();

  return (
    <div className="min-h-screen mt-[10rem] border-t-[1rem] border-amber-300 p-10 bg-[#1b5659]">
      <h1 className="hiking-font text-6xl">Shopping Cart</h1>
      <hr />
      <div className="grid grid-cols-5 gap-4 p-4">
        <div className="col-span-1">
          <span className="hiking-font text-3xl">PRODUCT</span>
        </div>
        <div className="col-span-1">
          <span className="hiking-font text-3xl">QUANTITY</span>
        </div>
        <div className="col-span-1">
          <span className="hiking-font text-3xl">PRICE</span>
        </div>
        <div className="col-span-1">
          <span className="hiking-font text-3xl">TOTAL</span>
        </div>
        <div className="col-span-1"></div>
      </div>

      {shoppingCart.length === 0 && (
        <div className="relativegrid grid-cols-5 gap-4 p-4">
          <div className="col-span-1 flex flex-col  gap-2">
            <p className="hiking-font text-5xl">Your cart is empty.</p>
            <p className="text-4xl hiking-font">
              {" "}
              Here is a bear to keep you company.
            </p>
            <Image
              src={BearSittingDown}
              alt="Bear Sitting Down"
              className="absolute bottom-10 left-10 w-[45rem] object-cover"
              priority={true}
            />
          </div>
        </div>
      )}

      {shoppingCart.length > 0 &&
        shoppingCart.map((item: CartItem, index: number) => {
          return (
            <div
              key={index}
              className="grid grid-cols-5 items-center gap-4 p-4"
            >
              <div className="col-span-1 flex flex-col">
                <Image
                  src={item.bootImage}
                  alt={item.model}
                  width={100}
                  height={100}
                />
                <span className="hiking-font text-4xl">{item.model}</span>
                <span className="text-2xl">Size: {item.size}</span>
              </div>
              <div className="col-span-1 flex flex-row items-center gap-3">
                <button
                  onClick={() => decreaseQuantity(item.id, item.size)}
                  disabled={item.quantity === 0}
                  className="group cursor-pointer rounded-full p-2 bg-white text-[#726da8] shadow-lg shadow-black/50 hover:bg-amber-600 transition duration-300 ease-in hover:text-white"
                >
                  <Minus size={35} className="group-hover:cursor-pointer " />
                </button>
                <span className="hiking-font text-4xl">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id, item.size)}
                  disabled={item.quantity === 0}
                  className="group cursor-pointer  rounded-full p-2 bg-white text-[#726da8] shadow-lg shadow-black/50 hover:bg-amber-600 transition duration-300 ease-in hover:text-white"
                >
                  <Plus size={35} className="group-hover:cursor-pointer " />
                </button>
              </div>
              <div className="col-span-1">
                <span className="hiking-font text-4xl">{item.price}</span>
              </div>
              <div className="col-span-1">
                <span className="hiking-font text-4xl">${item.total}</span>
              </div>
              <div className="col-span-1">
                <Trash2
                  onClick={() => removeItem(item.id, item.size)}
                  size={35}
                  className="group-hover:cursor-pointer "
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
