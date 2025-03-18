import type {ShoeType} from "@/types/Shoe"

export type CartItem = {
    id: number;
    model: string,
    price: number,
    quantity: number;
    size: number;
    img_url: string;
    total: number,
    shoe_type: ShoeType
};
