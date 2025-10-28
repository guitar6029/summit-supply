"use client";
import useCart from "@/store/useCart";
import type { CartItem } from "@/types/Cart";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getShoePath } from "@/utils/pathRelated";
export default function ShoppingCartOverview() {
  const {
    shoppingCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    getTotalPrice,
  } = useCart();

  return (
    <>
      <div className="p-10 main-gradient">
        <h1 className="hiking-font text-6xl text-center text-amber-300">
          Shopping Cart
        </h1>
        {shoppingCart.length > 0 && (
          <div className="hidden md:grid md:grid-cols-4 gap-3 p-4">
            <div className="col-span-1">
              <span className="hiking-font text-3xl">PRODUCT</span>
            </div>
            <div className="col-span-1">
              <span className="hiking-font text-3xl">QUANTITY</span>
            </div>
            <div className="col-span-1">
              <span className="hiking-font text-3xl">PRICE</span>
            </div>
          </div>
        )}

        {shoppingCart.length === 0 && (
          <div className="relative grid grid-cols-5 gap-4 p-4">
            <div className="col-span-5 flex flex-col items-center justify-center gap-2">
              <p className="hiking-font text-5xl">Your cart is empty.</p>
              <p className="text-4xl hiking-font">
                {" "}
                Here is a bear to keep you company.
              </p>
              <Image
                src="/img/bear_wearing_backpack.png"
                alt="Bear Sitting Down"
                width={300}
                height={300}
                className="w-[45rem] object-cover"
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
                className="flex flex-col md:grid md:grid-cols-4 items-center gap-4 p-4"
              >
                <div className="col-span-1 flex flex-col gap-2">
                  <Link
                    href={`/${getShoePath(item.shoe_type)}/${item.id}`}
                    className="flex flex-col gap-3"
                  >
                    <Image
                      src={item.img_url}
                      alt={item.model}
                      width={250}
                      height={250}
                    />
                    <span className="hiking-font text-4xl">{item.model}</span>
                  </Link>
                  <span className="text-3xl hiking-font">
                    Size: {item.size}
                  </span>
                </div>
                <div className="flex flex-row md:col-span-1 md:flex-row items-center gap-3">
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
                  <Trash2
                    onClick={() => removeItem(item.id, item.size)}
                    size={35}
                    className="group cursor-pointer  rounded-full p-2 bg-white text-[#726da8] shadow-lg shadow-black/50 hover:bg-amber-600 transition duration-300 ease-in hover:text-white"
                  />
                </div>

                <hr className="col-span-4" />
              </div>
            );
          })}
        {getTotalPrice() > 0 && (
          <div className="flex flex-col items-end justify-end">
            <div className="flex flex-row gap-2 items-center">
              <span className="hiking-font text-4xl">Total</span>
              <span className="hiking-font text-7xl">${getTotalPrice()}</span>
            </div>
            <Link
              href="/checkout"
              className="bg-[var(--mustard)] text-black hiking-font w-full md:w-fit text-center text-5xl transition duration-300 ease-in px-4 py-2 mt-4"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
