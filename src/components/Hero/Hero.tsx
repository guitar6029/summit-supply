import Image from "next/image";
import Forest from "@/assets/img/nathan-dumlao-pLoMDKtl-JY-unsplash.jpg";
export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Image
        src={Forest}
        alt="Mountains"
        className="w-[100%] object-cover z-[-1] opacity-80"
      />
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2  text-4xl w-[40rem]">
        <h1 className="hiking-font text-black text-[10rem] text-center">Supply Summit</h1>
        <span className="text-black font-bold text-center">Hiker&apos;s best friend</span>
      </div>
    </div>
  );
}
