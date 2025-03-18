"use server";
import IdShoe from "@/components/Shoes/IdShoe";

export default async function IndividualShoePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await params before using it
  const resolvedParams = await params;
  const shoeId = resolvedParams.id;

  return <IdShoe id={Number(shoeId)} />;
}
