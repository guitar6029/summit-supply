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

  function addItemToShoppingCart() {
    addToShoppingCart(
      Number(id),
      boot.model,
      Number(boot.price),
      state.quantity,
      state.selectedBootSize,
      bootImage
    );
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
            <div className="bg-[#0f3409] flex flex-col gap-3 p-10">
              <h1 className="hiking-font text-9xl text-shadow-black boots-primary-color-title">
                {boot.model}
              </h1>
              <p className="text-4xl text-wrap w-[40vw] font-bold">
                {boot.description}
              </p>

              <h1 className="text-9xl text-right font-bold">{boot.price}</h1>
            </div>
            <Image src={bootImage} alt="Boot" className="w-[25vw] mx-auto" />
            <div className="w-full h-[4rem] bg-[#0f3409]"></div>
          </div>
          <div className="col-span-1 p-10 flex flex-col items-center justify-center gap-5 bg-[#efaf24] border-b-[3rem] border-[#1b5659]">
            <h1 className="hiking-font text-8xl text-shadow-black">
              Select Size
            </h1>
            <div className="flex flex-row flex-wrap gap-3">
              {boot.sizes.map((size: number, index: number) => {
                return (
                  <div
                    onClick={() => handleSelectSize(size)}
                    className={` ${
                      state.selectedBootSize === size
                        ? " bg-amber-500 text-white"
                        : "bg-white"
                    } font-bold text-4xl w-[10rem] cursor-pointer  shadow-lg shadow-black/50 hover:bg-amber-700 transition duration-300 ease-in rounded-full ridge-explorer-text p-4 flex flex-row items-center justify-center`}
                    key={index}
                  >
                    {size}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 mt-10 ">
              <div className="flex flex-row items-center gap-10">
                <button
                  disabled={state.quantity === 0}
                  onClick={() =>
                    dispatch({ type: "DECREMENT_QUANTITY", value: 1 })
                  }
                  className="group cursor-pointer rounded-full p-2 bg-white text-[#726da8] shadow-lg shadow-black/50 hover:bg-amber-600 transition duration-300 ease-in hover:text-white"
                >
                  <Minus size={85} className="group-hover:cursor-pointer " />
                </button>
                <span className="text-7xl w-[5rem] text-center font-bold hiking-font text-shadow-black">
                  {state.quantity}
                </span>
                <button
                  onClick={() =>
                    dispatch({ type: "INCREMENT_QUANTITY", value: 1 })
                  }
                  className="group cursor-pointer  rounded-full p-2 bg-white text-[#726da8]  shadow-lg shadow-black/50 hover:bg-amber-600 transition duration-300 ease-in hover:text-white"
                >
                  <Plus size={85} className="group-hover:cursor-pointer " />
                </button>
              </div>
              <button
                disabled={state.quantity === 0 || state.selectedBootSize === null}
                className={`w-[30vw] p-4 rounded-lg text-white mt-5 ${state.quantity === 0 || state.selectedBootSize === null ? 'bg-neutral-400 opacity-80' : 'bg-amber-700 cursor-pointer'}  font-bold text-4xl`}
                onClick={addItemToShoppingCart}
              >
                Add to Your Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
