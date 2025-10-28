// app/casual/[id]/page.tsx
export const runtime = "nodejs";
export const revalidate = 60;

import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import IdShoe from "@/components/Shoes/IdShoe";

export default async function CasualByIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ Await params before using
  const { id: idString } = await params;
  const id = Number(idString);

  if (!Number.isFinite(id) || id <= 0) notFound();

  const exists = await prisma.shoes.findUnique({
    where: { id },
    select: { id: true, shoe_type: true },
  });

  if (!exists || exists.shoe_type !== "casual") notFound();

  return <IdShoe id={id} />;
}
