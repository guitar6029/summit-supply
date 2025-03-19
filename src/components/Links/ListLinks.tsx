"use client";
import { usePathname } from "next/navigation";
import CustomLink from "./CustomLink";
import useCart from "@/store/useCart";
import { Backpack } from "lucide-react";
export default function ListLinks({
  links,
}: {
  links: { name: string; href: string }[];
}) {
  const { shoppingCartIsEmpty } = useCart();

  const pathname = usePathname();

  function getLinkClass() {
    if (
      pathname.includes("/boots") ||
      pathname.includes("/casual") ||
      pathname === "/" ||
      pathname === "/cart"
    ) {
      return "text-[var(--mustard)]";
    }
    return "text-white";
  }

  return (
    <div className="flex flex-row gap-4">
      {links.map((link) => {
        return (
          <CustomLink
            href={link.href}
            key={link.name}
            className={`${getLinkClass()}"} flex flex-row items-baseline gap-2 transition duration-300 ease-in hiking-font text-2xl`}
          >
            {link.name}
            {link.name === "Cart" && !shoppingCartIsEmpty() && (
              <Backpack size={20} />
            )}
          </CustomLink>
        );
      })}
    </div>
  );
}
