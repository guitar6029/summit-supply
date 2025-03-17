import Image from "next/image";
import Logo from "@/assets/img/supply_summit_logo.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center hero-bg">
      <div className="relative flex items-center justify-center w-[100vw]">
        <Image
          src={Logo}
          alt="Mountain and a Tree logo"
          width={400}
          height={400}
          className="absolute w-[40rem] z-[1]"
        /> 
      </div>
    </div>
  );
}
