"use client";
import Image from "next/image";
import { useReducer } from "react";
import useCart from "@/store/useCart";
import { Plus, Minus } from "lucide-react";
import type { CardProps } from "@/types/Props";

const intialState = {
  quantity: 1,
  selectedBootSize: null,
  disabledBtnToAddToShoppingCart: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_QUANTITY":
      return { ...state, quantity: state.quantity + action.value };
    case "DECREMENT_QUANTITY":
      return { ...state, quantity: state.quantity - action.value };
    case "SET_SIZE":
      return { ...state, selectedBootSize: action.value };
    default:
      return state;
  }
};

export default function Card({ id, bootImage, bgImg, boot }: CardProps) {
  const { addToShoppingCart } = useCart();
  const [state, dispatch] = useReducer(reducer, intialState);

  function handleSelectSize(size: number) {
    dispatch({ type: "SET_SIZE", value: size });
  }

    function addItemToShoppingCart(){
      addToShoppingCart(Number(id), boot.model, 1, state.selectedBootSize);
    }

  return (
    <div className="mt-[10rem] text-white">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={bgImg}
            alt="forest"
            width={1920}
            height={1080}
            className="absolute top-0 left-0 w-full object-cover z-[-1]"
            priority={true}
          />
          <div className="col-span-1 flex flex-col bg-[#1b5659]">
            <div className="bg-[#0f3409] p-10">
              <h1 className="hiking-font text-9xl text-shadow-black boots-primary-color-title">
                {boot.model}
              </h1>
              <p className="text-4xl text-wrap w-[40vw] font-bold">
                {boot.description}
              </p>
            </div>
            <Image src={bootImage} alt="Boot" className="w-[25vw] mx-auto" />
            <div className="w-full h-[4rem] bg-[#0f3409]"></div>
          </div>
          <div className="col-span-1 p-10 flex flex-col items-center justify-center gap-5 bg-[#efaf24]">
            <h1 className="hiking-font text-8xl">Select Size</h1>
            <div className="flex flex-row flex-wrap gap-3">
              {boot.sizes.map((size: number, index: number) => {
                return (
                  <div
                    onClick={() => handleSelectSize(size)}
                    className={` ${
                      state.selectedBootSize === size
                        ? " bg-amber-500 text-white"
                        : "bg-white"
                    } font-bold text-4xl w-[10rem] cursor-pointer hover:bg-amber-700 transition duration-300 ease-in rounded-full ridge-explorer-text p-4 flex flex-row items-center justify-center`}
                    key={index}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-row items-center gap-10">
                <button onClick={() => dispatch({type: "INCREMENT_QUANTITY", value: 1})} className="rounded-full cursor-pointer p-2 bg-white text-[#726da8]" >
                  <Plus size={85} />
                </button>
                <span className="text-7xl w-[5rem] text-center font-bold">{state.quantity}</span>
                <button disabled={state.quantity === 0} onClick={() => dispatch({type: "DECREMENT_QUANTITY", value: 1})} className="rounded-full p-2 bg-white text-[#726da8]">
                  <Minus size={85} />
                </button>
              </div>
              <button
                className="w-[20vw] p-4 rounded-lg cursor-pointer text-white bg-amber-700 font-bold text-4xl"
                disabled={state.quantity === 0}
                onClick={() => addItemToShoppingCart}
              >
                Add to shopping cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
