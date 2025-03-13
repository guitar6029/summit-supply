import Image from "next/image";
import Logo from "@/assets/img/logo.png";

import Link from "next/link";
export default function Navigation() {
  return (
    <div className="flex flex-row items-center justify-around h-[100px] fixed top-0 w-full bg-black z-[20]">
      <div className="hidden md:flex flex-row item-center gap-10">
        <Link
          href={"/"}
          className="hiking-font text-4xl hover:text-orange-500 transition duration-300 ease-in"
        >
          Home
        </Link>
        <Link
          href={"/boots"}
          className="hiking-font text-4xl hover:text-orange-500 transition duration-300 ease-in"
        >
          Boots
        </Link>
      </div>

      <div className="hidden md:flex flex-row items-center">
        <h1 className="hiking-font text-2xl">Supply Summit</h1>
        <Image src={Logo} alt="Mountain and a Tree logo" width={100} />
      </div>

      <div className="hidden md:flex flex-row item-center gap-10">
        <Link
          href={"/about"}
          className="hiking-font text-4xl hover:text-orange-500 transition duration-300 ease-in"
        >
          Our Story
        </Link>
      </div>
    </div>
  );
}
