import { Suspense } from "react"; // Import Suspense
import prisma from "@/lib/prisma";
import Forest from "@/assets/img/dan-meyers-ylJtKpTYjn4-unsplash.jpg";
import TheSummitClassicBoot from "@/assets/img/boot.png";
import TheRidgeExplorerBoot from "@/assets/img/ridgeExplorer_nobackground.png";
import TheTrailRoverBoot from "@/assets/img/trailRover_nobackground.png";
import TheTrailStriderBoot from "@/assets/img/trailStider_nobackground.png";
import Card from "@/components/Card/Card";

export default async function BootPage({ params }: { params: Promise<{ id: string }> }) {
  // Await params before using it
  const resolvedParams = await params;
  const bootId = Number(resolvedParams.id);

  if (isNaN(bootId)) {
    return (
      <div>
        <h1>Invalid Boot ID</h1>
        <p>Please provide a valid boot ID.</p>
      </div>
    );
  }

  function getBootImage(id: string) {
    switch (id) {
      case "1": return TheSummitClassicBoot;
      case "2": return TheTrailRoverBoot;
      case "3": return TheRidgeExplorerBoot;
      case "4": return TheTrailStriderBoot;
      default: return TheSummitClassicBoot;
    }
  }

  // Fetch the boot data from the database using the id
  const boot = await prisma.hikingboots.findUnique({
    where: { id: bootId },
  });

  if (!boot) {
    return (
      <div>
        <h1>Boot Not Found</h1>
        <p>The boot you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    );
  }

  // Wrap Card inside Suspense
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Card 
        id={resolvedParams.id} 
        bootImage={getBootImage(resolvedParams.id)} 
        bgImg={Forest} 
        boot={{ ...boot, price: boot.price?.toString() || "0.00" }} 
      />
    </Suspense>
  );
}
