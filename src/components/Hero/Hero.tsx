import Image from "next/image";
import Logo from "@/assets/img/logo.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center hero-bg">
      <div className="relative flex items-center justify-center w-[100vw]">
        <Image
          src={Logo}
          alt="Mountain and a Tree logo"
          className="absolute w-[40rem] z-[1]"
        />
        <div className="flex flex-row items-baseline z-[2] text-5xl md:text-[6rem] lg:text-[10rem] ">
          <h1 className="hiking-font text-black text-center text-shadow">
            Supply
          </h1>
          <h1 className="hiking-font text-black text-center text-shadow">
            Summit
          </h1>
          <span className="hiking-font text-black text-[1rem] md:text-[1.5rem] lg:text-[2.5rem]">
            &trade;
          </span>
        </div>
      </div>
    </div>
  );
}
