// app/boots/[id]/page.tsx
export const runtime = "nodejs"; // ensures Prisma runs in Node, not Edge
export const revalidate = 60; // optional: rebuild every 60s (ISR)

import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import IdShoe from "@/components/Shoes/IdShoe";

type Params = { id: string };

export default async function BootsByIdPage({ params }: { params: Params }) {
  const id = Number(params.id);

  // ✅ Validate ID early
  if (!Number.isFinite(id) || id <= 0) notFound();

  // ✅ Confirm the shoe exists before rendering
  const exists = await prisma.shoes.findUnique({
    where: { id },
    select: { id: true, shoe_type: true },
  });

  // ✅ Guard: make sure it's a "boot" type and not missing
  if (!exists || exists.shoe_type !== "boot") notFound();

  // ✅ Pass only the ID if your <IdShoe /> does its own fetch
  return <IdShoe id={id} />;
}
