import ShoeLink from "@/components/Shoes/ShoeLink";
import type { Shoe, ShoeType } from "@/types/Shoe";
import { getShoes } from "@/lib/db";

export default async function ShoesLayout({
  shoesType: ShoeType,
}: {
  shoesType: ShoeType;
}) {
  const shoes: Shoe[] = await getShoes(ShoeType) as Shoe[];

  function noShoesFound(shoeType: ShoeType) {
    switch (shoeType) {
      case "casual":
        return "No Casual Shoes Found";
      case "boot":
        return "No Boots Found";
      default:
        return "No Shoes Found";
    }
  }

  if (!shoes) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-bold mb-4">{noShoesFound(ShoeType)}</h1>
        <p className="text-3xl">Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen relative flex flex-col  bunch-of-boots-bg">
        <div className="p-10 main-gradient flex flex-col gap-2">
          <h1 className="hiking-font text-[5rem] md:text-[10rem] text-wrap md:text-wrap text-shadow-black">
            Built for Every Journey
          </h1>
          <span className="text-4xl hiking-font">
            From rugged peaks to city streets, our boots are designed for
            adventure, comfort, and durability.
          </span>
        </div>
      </div>
      <div className="flex flex-col p-10 md:flex-row md:flex-wrap gap-[1rem] md:items-center md:justify-center">
        {shoes.map((shoe: Shoe) => {
          return (
            <ShoeLink
              shoeProps={{ ...shoe, price: Number(shoe.price) }}
              key={shoe.id}
            />
          );
        })}
      </div>
    </>
  );
}
