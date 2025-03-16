import { Suspense } from "react"; // Import Suspense
import prisma from "@/lib/prisma";
import BootContainer from "@/components/BootLayout/BootContainer";
import { getBootImage, getForestImage } from "@/utils/imageRelated";
import ItemNotFound from "@/components/NotFound/ItemNotFound";
import { Boot } from "@/types/Boots";

export default async function BootPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await params before using it
  const resolvedParams = await params;
  const bootId = resolvedParams.id;

  // Fetch the boot data from the database using the id
  const rawBoot = await prisma.shoes.findUnique({
    where: { id: Number(bootId) },
  });

  // Handle the case where the boot is not found
  if (!rawBoot) {
    return (
      <ItemNotFound title="Boot Not Found" msg="Please try again later." />
    );
  }

  // Convert the rawBoot's Decimal price to a number
  const boot = { ...rawBoot, price: Number(rawBoot.price) } as Boot;

  // Wrap Card inside Suspense
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BootContainer
        bootImage={getBootImage(resolvedParams.id)}
        bgImg={getForestImage()}
        boot={boot} // Now boot is guaranteed to be non-null
      />
    </Suspense>
  );
}
