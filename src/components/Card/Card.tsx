"use client";
import Image, { StaticImageData } from "next/image";
import { useReducer } from "react";
import useCart from "@/store/useCart";
import type { Boot } from "@/types/Boots";
import ListItems from "../List/List";

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
    <div className="mt-[10rem] text-white bg-[#1b5659]">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={bgImg}
            alt="forest"
            width={1920}
            height={1080}
            className="absolute top-0 left-0 w-full h-[40vh] object-cover z-[-1] opacity-30"
            priority={true}
          />
          <div className="col-span-1 flex flex-col">
            <div className="flex flex-col md:flex-row gap-10 p-10">
              {/* image gallery */}
              <div className="flex flex-row flex-wrap md:flex-col md:flex-nowrap gap-2">
                {Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <Image
                      onClick={() =>
                        dispatch({ type: "CHANGE_IMAGE", value: index })
                      }
                      key={index}
                      src={bootImage}
                      alt="Boot"
                      className={`${
                        state.currentImgSelected === index &&
                        "border-4 border-neutral-100"
                      } w-[5vw] mx-auto`}
                    />
                  );
                })}
              </div>
              {/* In the future, this will have multiple images */}
              <Image src={bootImage} alt="Boot" className="w-[25vw] mx-auto" />
            </div>
          </div>

          {/* right side bg-[#efaf24] */}
          <div className="col-span-1 p-10 flex flex-col gap-5 card-primary">
            <h1 className="hiking-font text-4xl text-shadow-black">
              {boot.name}
            </h1>
            <span className="text-3xl">${boot.price}</span>

            <h1 className="hiking-font text-4xl text-shadow-black">
              Select Size
            </h1>
            <div className="flex flex-row items-center flex-wrap gap-3 w-full ">
              {boot.size.map((size: number, index: number) => {
                return (
                  <div
                    onClick={() => handleSelectSize(size)}
                    className={` ${
                      state.selectedBootSize === size
                        ? " bg-amber-500 text-white"
                        : "bg-white"
                    } font-bold text-4xl w-full md:w-[10rem] cursor-pointer shadow-lg shadow-black/50 hover:bg-amber-700 transition duration-300 ease-in ridge-explorer-text p-4 flex flex-row items-center justify-center`}
                    key={index}
                  >
                    {size}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 mt-10 ">
              <button
                disabled={state.selectedBootSize === null}
                className={`w-[100%] p-4 text-white mt-5 ${
                  state.selectedBootSize === null
                    ? "bg-neutral-400 opacity-80"
                    : "bg-amber-700 cursor-pointer uppercase"
                }  font-bold text-4xl`}
                onClick={addItemToShoppingCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <section className="flex flex-col gap-2 p-10">
          {/* Description */}
          <p className="text-4xl text-wrap w-[100%] md:w-[40vw] font-bold">
            {boot.second_section_boot_description}
          </p>

          {/* Features */}
          <ListItems list={boot.features} hasListStyle={true} />
          {/* Material */}
          <ListItems list={boot.material} hasListStyle={false} />
          {/* Care Instructions */}
          <ListItems list={boot.care_instructions} hasListStyle={false} />

          <div className="flex flex-col md:flex-row md:items-baseline gap-2">
            <span className="font-bold text-4xl">Warranty</span>
            <span className="text-3xl">{boot.warranty_info}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
