"use client";
import Image from "next/image";
import { useReducer, useRef } from "react";
import useCart from "@/store/useCart";
import ListItems from "../List/List";
import type { Shoe } from "@/types/Shoe";
import { btnMain } from "@/styles/btn";

const intialState = {
  quantity: 1,
  selectedBootSize: 8,
  disabledBtnToAddToShoppingCart: true,
  currentImgSelected: 0,
};

type ActionType =
  | {
      type: "SET_SIZE";
      value: number;
    }
  | {
      type: "CHANGE_IMAGE";
      value: number;
    };

const reducer = (state: typeof intialState, action: ActionType) => {
  switch (action.type) {
    case "SET_SIZE":
      return { ...state, selectedBootSize: action.value };
    case "CHANGE_IMAGE":
      return { ...state, currentImgSelected: action.value };
    default:
      return state;
  }
};

export default function ShoeContainer({ shoe }: { shoe: Shoe }) {
  const { addToShoppingCart } = useCart();
  const [state, dispatch] = useReducer(reducer, intialState);

  const imageContainerRef = useRef<HTMLDivElement>(null);

  function handleSelectSize(size: number) {
    dispatch({ type: "SET_SIZE", value: size });
  }

  function addItemToShoppingCart() {
    addToShoppingCart(
      Number(shoe.id),
      shoe.name,
      Number(shoe.price),
      state.quantity,
      state.selectedBootSize ?? 7,
      shoe.img_url,
      shoe.shoe_type
    );
  }

  return (
    <div className="relative text-white flex-col min-h-screen mt-5 ">
      <div className="hiking-font w-full grid grid-cols-1 md:grid-cols-2 md:justify-between gap-5 p-10">
        <div className="flex flex-col gap-10">
          <span className="text-shadow text-5xl md:text-7xl ">{shoe.name}</span>
          <span className="text-3xl sm:w-full md:w-fit hiking-font flex flex-row items-center p-5 text-black bg-yellow-400 border border-yellow-200">
            ${shoe.price}
          </span>

          <p className="text-4xl w-full font-bold text-orange-00 text-shadow-black">
            {shoe.second_section_boot_description}
          </p>
        </div>
        <Image
          src={shoe.img_url}
          alt="Boot"
          width={500}
          height={500}
          className="min-w-[500px] max-w-[500px] h-[500px] object-contain rounded-xl shadow-lg shadow-black/50 mx-auto"
        />
      </div>
      <div className="p-10 flex flex-col gap-4 items-center md:gap-4 shoe-backdrop-bg">
        <div
          ref={imageContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:overflow-x-auto gap-10"
        >
          {Array.from({ length: 6 }, (_, index) => {
            return (
              <Image
                key={index}
                src={shoe.img_url}
                alt="Boot"
                width={400}
                height={400}
                className="w-[400px] h-[400px] object-contain rounded-xl shadow-lg shadow-black/50"
              />
            );
          })}
        </div>
      </div>

      <div className="p-10 flex flex-col md:flex-row md:items-center md:gap-4 shoe-backdrop-bg">
        <div className="flex flex-col gap-4 p-10">
          <h1 className="hiking-font text-4xl">Select Size</h1>
          <div className="flex flex-row items-center flex-wrap gap-3 w-full ">
            {shoe.size.map((size: number, index: number) => {
              return (
                <div
                  onClick={() => handleSelectSize(size)}
                  className={` ${
                    state.selectedBootSize === size
                      ? " bg-amber-600 text-white"
                      : "bg-black text-white"
                  } font-bold text-xl hover:bg-amber-300 rounded-full w-[4rem] md:w-[4rem] cursor-pointer shadow-lg shadow-black/50 transition duration-300 ease-in p-4 flex flex-row items-center justify-center`}
                  key={index}
                >
                  {size}
                </div>
              );
            })}
          </div>
          <button
            disabled={state.selectedBootSize === null}
            className={`w-[100%] p-4 text-white mt-5 ${
              state.selectedBootSize === null
                ? "bg-neutral-400 opacity-80 disabled:cursor-not-allowed"
                : btnMain
            }  font-bold text-4xl hiking-font cursor-pointer`}
            onClick={addItemToShoppingCart}
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="p-10 flex flex-col md:flex-row gap-4 bg-black">
        {/* Features */}
        <ListItems title="Features" list={shoe.features} hasListStyle={true} /> 
        {/* Material */}
        <ListItems title="Material" list={shoe.material} hasListStyle={false} />
        {/* Care Instructions */}
        <ListItems
          title="Care Instructions"
          list={shoe.care_instructions}
          hasListStyle={false}
        />
      </div>
    </div>
  );
}
