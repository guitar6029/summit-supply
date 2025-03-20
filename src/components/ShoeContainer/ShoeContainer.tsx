"use client";
import Image from "next/image";
import { useReducer } from "react";
import useCart from "@/store/useCart";
import ListItems from "../List/List";
import type { Shoe } from "@/types/Shoe";

const intialState = {
  quantity: 1,
  selectedBootSize: 7,
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
    <div className="text-white flex-col min-h-screen mt-5">
      <div className="hiking-font text-5xl w-full flex flex-row gap-5 items-center p-10 bg-[var(--dark-forest)]">
        <span>{shoe.name}</span>
        <span className="text-3xl hiking-font">${shoe.price}</span>
      </div>
      <div className="p-10 flex flex-col md:flex-row md:items-center md:gap-4 shoe-backdrop-bg">
        <Image
          src={shoe.img_url}
          alt="Boot"
          width={400}
          height={400}
          className="w-[400px] h-[400px] object-contain"
        />
        <div className="flex flex-col gap-4 p-10">
          <h1 className="hiking-font text-4xl">Select Size</h1>
          <div className="flex flex-row items-center flex-wrap gap-3 w-full ">
            {shoe.size.map((size: number, index: number) => {
              return (
                <div
                  onClick={() => handleSelectSize(size)}
                  className={` ${
                    state.selectedBootSize === size
                      ? " bg-[var(--forest-green)] text-white"
                      : "bg-black text-white"
                  } font-bold text-xl rounded-full w-[8rem] md:w-[4rem] cursor-pointer shadow-lg shadow-black/50 transition duration-300 ease-in p-4 flex flex-row items-center justify-center`}
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
                ? "bg-neutral-400 opacity-80"
                : "bg-black cursor-pointer uppercase"
            }  font-bold text-4xl hiking-font`}
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
      <div className="p-10">
        <p className="text-4xl text-wrap w-full font-bold">
          {shoe.second_section_boot_description}
        </p>
      </div>
    </div>
  );
}
