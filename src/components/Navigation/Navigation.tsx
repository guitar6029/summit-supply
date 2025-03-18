"use server";

import Image from "next/image";
import Logo from "@/assets/img/supply_summit_logo.png";
import Account from "../Signin/Account";
import ListLinks from "../Links/ListLinks";
import { myNavigationLinks } from "@/data/navlinks";

export default async function Navigation() {
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

        <ListLinks links={myNavigationLinks} />
      </div>

      <Account />
    </div>
  );
}
