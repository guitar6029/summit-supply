"use client"

import useCart from "@/store/useCart";
import type { CartItem } from "@/types/Cart";
export default function ShoppingCartOverview(){


    const {shoppingCart} = useCart()

    return (
        <div className="min-h-screen mt-[10rem]">
            <h1 className="hiking-font text-4xl">Shopping Cart</h1>
            <hr />
            <div className="flex flex-col p-4">
                {shoppingCart.map((shoppingCartItem : CartItem, index: number) =>{
                    return (
                        <div key={index}  className="flex flex-row items-center justify-around text-white">
                            <div>{shoppingCartItem.id} {shoppingCartItem.model}</div>
                            <div>{shoppingCartItem.quantity}</div>
                            <div>{shoppingCartItem.size}</div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}