"use client";

import Image from "next/image";
import Logo from "@/assets/img/supply_summit_logo.png";
import { usePathname } from "next/navigation";
import { Backpack } from "lucide-react";
import useCart from "@/store/useCart";
import Link from "next/link";

const myNavigationLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Boots",
    href: "/boots",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Cart",
    href: "/cart",
  },
];
export default function Navigation() {
  const { shoppingCartIsEmpty } = useCart();
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center justify-around h-[100px] fixed top-0 w-full bg-black z-[20]">
      <div className="hidden md:flex flex-row items-center gap-10">
        <div className="hidden md:flex flex-row items-center">
          <Image
            src={Logo}
            alt="Mountain and a Tree logo"
            width={100}
            height={50}
          />
        </div>
        {myNavigationLinks.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`hiking-font text-4xl transition duration-300 ease-in ${
                pathname === link.href
                  ? "text-[var(--dark-cyan)]"
                  : "text-white"
              }`}
            >
              {link.name}
              {link.name === "Cart" && !shoppingCartIsEmpty && <Backpack />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
