import { StaticImageData } from "next/image";

export type CartItem = {
    id: number;
    model: string,
    price: number,
    quantity: number;
    size: number;
    bootImage: StaticImageData;
    total: number
};
