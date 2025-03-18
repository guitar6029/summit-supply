"use server";
import prisma from "@/lib/prisma";

export async function getShoes(shoeType: string) {
  if (!shoeType) {
    return [];
  }
  const shoes = await prisma.shoes
    .findMany({
      where: {
        shoe_type: shoeType,
      },
    })
    .then((shoes) =>
      shoes.map((shoe) => ({
        ...shoe,
        price: Number(shoe.price), // Convert Decimal to number
      }))
    );

  return shoes;
}

export async function getShoe(shoeId: number) {
  if (!shoeId) {
    return [];
  }
  const shoe = await prisma.shoes.findUnique({
    where: {
      id: Number(shoeId),
    },
  });

  if (!shoe) {
    return [];
  }

  return { ...shoe, price: Number(shoe.price) };
}
