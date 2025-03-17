import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/img/supply_summit_logo.png";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <Image
        src={Logo}
        alt="Mountain and a Tree logo"
        className="absolute w-[40rem] z-[1] opacity-35"
      />
      <div className="flex flex-col items-center justify-center z-[2] text-center">
        <h1 className="text-5xl font-bold mb-4 hiking-font text-shadow ">
          Page Not Found
        </h1>
        <p className="text-3xl font-mono">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-amber-600 w-full md:w-1/4 hover:bg-amber-800 transition duration-300 ease-in text-white rounded-lg px-4 py-2 mt-4"
        >
          Home
        </Link>
        <Link
          href="/boots"
          className="bg-amber-600 w-full md:w-1/4  hover:bg-amber-800 transition duration-300 ease-in text-white rounded-lg px-4 py-2 mt-4"
        >
          Boots
        </Link>
      </div>
    </div>
  );
}
