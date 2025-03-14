import { StaticImageData } from "next/image";
import type { Size } from "./Size";

export type ContainerProps = {
  size: Size;
  children: React.ReactNode;
};

export type CardProps = {
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
