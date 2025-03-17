"use client";
import Image from "next/image";
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

export default function ShoeContainer({ shoe }: { shoe: Boot }) {
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
      shoe.img_url
    );
  }

  return (
    <div className="text-white min-h-screen mt-10">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 flex flex-col p-10">
            <div className="flex flex-col gap-4 md:flex-row md:gap-1">
              {/* image gallery */}
              <div className="flex flex-row flex-wrap md:flex-col md:flex-nowrap gap-2">
                {Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <Image
                      onClick={() =>
                        dispatch({ type: "CHANGE_IMAGE", value: index })
                      }
                      key={index}
                      src={shoe.img_url}
                      alt="Boot"
                      width={400}
                      height={400}
                      className={`${
                        state.currentImgSelected === index &&
                        "border-4 border-neutral-100"
                      } w-[150px] min-w-[150px] mx-auto`}
                    />
                  );
                })}
              </div>
              {/* In the future, this will have multiple images */}
              <Image
                src={shoe.img_url}
                alt="Boot"
                width={400}
                height={400}
                className="w-[100%] mx-auto"
              />
            </div>
          </div>

          {/* right side bg-[#efaf24] */}
          <div className="col-span-1 p-5 flex flex-col gap-5">
            <div>
              <h1 className="hiking-font text-4xl text-shadow-black">
                {shoe.name}
              </h1>
              <span className="text-3xl">${shoe.price}</span>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="hiking-font text-4xl text-shadow-black">
                Select Size
              </h1>
              <div className="flex flex-row items-center flex-wrap gap-3 w-full ">
                {shoe.size.map((size: number, index: number) => {
                  return (
                    <div
                      onClick={() => handleSelectSize(size)}
                      className={` ${
                        state.selectedBootSize === size
                          ? " bg-[var(--forest-green)] text-white"
                          : "bg-black text-white"
                      } font-bold text-4xl w-full md:w-[10rem] cursor-pointer shadow-lg shadow-black/50 transition duration-300 ease-in p-4 flex flex-row items-center justify-center`}
                      key={index}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <button
                disabled={state.selectedBootSize === null}
                className={`w-[100%] p-4 text-white mt-5 ${
                  state.selectedBootSize === null
                    ? "bg-neutral-400 opacity-80"
                    : "bg-black cursor-pointer uppercase"
                }  font-bold text-4xl hiking-font`}
                onClick={addItemToShoppingCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <section className="flex flex-col md:flex-row md:flex-wrap gap-5 p-10 text-[#F5F5DC]">
          {/* Description */}
          <p className="text-4xl text-wrap w-full font-bold">
            {shoe.second_section_boot_description}
          </p>

          {/* Features */}
          <ListItems
            title="Features"
            list={shoe.features}
            hasListStyle={true}
          />
          {/* Material */}
          <ListItems
            title="Material"
            list={shoe.material}
            hasListStyle={false}
          />
          {/* Care Instructions */}
          <ListItems
            title="Care Instructions"
            list={shoe.care_instructions}
            hasListStyle={false}
          />

          <div className="flex flex-col md:flex-row md:items-baseline gap-2">
            <span className="font-bold text-4xl hiking-font">Warranty</span>
            <span className="text-3xl">{shoe.warranty_info}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
