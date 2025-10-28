import { Suspense } from "react";
import ShoeContainer from "../ShoeContainer/ShoeContainer";
import { getShoe } from "@/lib/db";
import { Shoe } from "@/types/Shoe";
import { getShoeImg } from "@/utils/pathRelated";
export default async function IdShoe({ id: number }: { id: number }) {
  const shoe = (await getShoe(number)) as Shoe;
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <ShoeContainer shoe={shoe} />
    </Suspense>
  );
}
