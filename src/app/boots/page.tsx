import BootsMainLayout from "@/components/Boots/BootsMainLayout";
import type { Boot } from "@/types/Boots";
import prisma from "@/lib/prisma";

export default async function Boots() {
  const boots: Boot[] = await prisma.shoes.findMany();
  if (!boots) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-bold mb-4">No Boots Found</h1>
        <p className="text-3xl">Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      {/* bg-[#0f3409] */}
      <div className="min-h-screen relative flex flex-col justify-center bunch-of-boots-bg">
        <div className="top-10 left-15 p-10">
          <h1 className="hiking-font text-[5rem] md:text-[10rem] text-wrap md:text-wrap text-shadow-black">
            Boots Built for Every Journey
          </h1>
          <span className="text-4xl font-mono text-shadow ">
            From rugged peaks to city streets, our boots are designed for
            adventure, comfort, and durability.
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-[1rem] md:items-center md:justify-center">
        {boots.map((boot: Boot) => {
          return (
            <BootsMainLayout
              bootProps={{ ...boot, price: Number(boot.price) }}
              key={boot.id}
            />
          );
        })}
      </div>
    </>
  );
}
