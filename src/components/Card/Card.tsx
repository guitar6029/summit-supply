"use client";
import Image, { StaticImageData } from "next/image";
import { useReducer } from "react";
import useCart from "@/store/useCart";
import { Plus, Minus } from "lucide-react";
import type { Boot } from "@/types/Boots";

const intialState = {
  quantity: 1,
  selectedBootSize: 7,
  disabledBtnToAddToShoppingCart: true,
};

type ActionType =
  | {
      type: "INCREMENT_QUANTITY";
      value: number;
    }
  | {
      type: "DECREMENT_QUANTITY";
      value: number;
    }
  | {
      type: "SET_SIZE";
      value: number;
    };

const reducer = (state: typeof intialState, action: ActionType) => {
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

export default function Card({
  boot,
  bootImage,
  bgImg,
}: {
  boot: Boot;
  bootImage: StaticImageData;
  bgImg: StaticImageData;
}) {
  const { addToShoppingCart } = useCart();
  const [state, dispatch] = useReducer(reducer, intialState);

  function handleSelectSize(size: number) {
    dispatch({ type: "SET_SIZE", value: size });
  }

  function addItemToShoppingCart() {
    addToShoppingCart(
      Number(boot.id),
      boot.name,
      Number(boot.price),
      state.quantity,
      state.selectedBootSize ?? 7,
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
                {boot.name}
              </h1>
              <p className="text-4xl text-wrap w-[100%] md:w-[40vw] font-bold">
                {boot.second_section_boot_description}
              </p>

              <div className="flex flex-col">
                <span>Material</span>
                <ul>
                  {boot.material.map((material: string, index: number) => {
                    return <li key={index}>{material}</li>;
                  })}
                </ul>
              </div>

              <div className="flex flex-col">
                <span>Care Instructions</span>
                <ul>
                  {boot.care_instructions.map(
                    (instruction: string, index: number) => {
                      return <li key={index}>{instruction}</li>;
                    }
                  )}
                </ul>
              </div>

              <div className="flex flex-col">
                <span>Features</span>
                <ul className="list-inside">
                  {boot.features.map((feature: string, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-orange-500"></div>
                        <li>{feature}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>

              <span>{boot.warranty_info}</span>

              <h1 className="text-9xl text-right font-bold text-shadow-black">
                {boot.price}
              </h1>
            </div>
            <Image src={bootImage} alt="Boot" className="w-[25vw] mx-auto" />
            <div className="w-full h-[4rem] bg-[#0f3409]"></div>
          </div>
          <div className="col-span-1 p-10 flex flex-col items-center justify-center gap-5 bg-[#efaf24] border-t-[3rem] border-b-[3rem] border-[#1b5659]">
            <h1 className="hiking-font text-8xl text-shadow-black">
              Select Size
            </h1>
            <div className="flex flex-row items-center flex-wrap gap-3 w-full md:w-[20vw]">
              {boot.size.map((size: number, index: number) => {
                return (
                  <div
                    onClick={() => handleSelectSize(size)}
                    className={` ${
                      state.selectedBootSize === size
                        ? " bg-amber-500 text-white"
                        : "bg-white"
                    } font-bold text-4xl w-full md:w-[10rem] cursor-pointer  shadow-lg shadow-black/50 hover:bg-amber-700 transition duration-300 ease-in rounded-full ridge-explorer-text p-4 flex flex-row items-center justify-center`}
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
                disabled={
                  state.quantity === 0 || state.selectedBootSize === null
                }
                className={`w-[100%] md:w-[30vw] p-4 rounded-lg text-white mt-5 ${
                  state.quantity === 0 || state.selectedBootSize === null
                    ? "bg-neutral-400 opacity-80"
                    : "bg-amber-700 cursor-pointer"
                }  font-bold text-4xl`}
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
