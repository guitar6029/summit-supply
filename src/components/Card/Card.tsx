"use client";
import Image, { StaticImageData } from "next/image";

type CardProps = {
  id: string;
  bootImage: StaticImageData;
  bgImg: StaticImageData;
  boot: {
    brand: string;
    description: string;
    price: string;
    quantity: number;
    onsale: boolean;
    sizes: number[];
    created_at: Date;
  };
};

export default function Card({ id, bootImage, bgImg, boot }: CardProps) {
  return (
    <div className="min-h-screen mt-[10rem] text-white">
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={bgImg}
            alt="forest"
            width={1920}
            height={1080}
            className="absolute top-0 left-0 w-full min-h-screen object-cover z-[-1]"
            priority={true}
          />
          <div className="col-span-1 flex flex-col bg-[#1b5659] p-10">
            <h1 className="hiking-font text-9xl text-shadow-black boots-primary-color-title">
              {boot.brand}
            </h1>
            <p className="text-4xl text-wrap w-[40vw] font-bold">
              {boot.description}
            </p>
            <Image src={bootImage} alt="Boot" className="w-[25vw]" />
          </div>
          <div className="col-span-1 flex flex-col"></div>
        </div>
      </div>
      <div className="flex flex-row items-center"></div>
    </div>
  );
}
