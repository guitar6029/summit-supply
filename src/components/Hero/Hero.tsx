import Image from "next/image";
import Forest from "@/assets/img/nathan-dumlao-pLoMDKtl-JY-unsplash.jpg";
import Logo from "@/assets/img/logo.png";
export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Image
        src={Forest}
        alt="Mountains"
        className="w-[100%] object-cover z-[-1] opacity-80"
      />
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2  text-4xl w-[60rem]">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="flex flex-col">
              <h1 className="hiking-font text-black text-[10rem] text-center z-[2] text-shadow">
                Supply
              </h1>
              {/* <q className="text-black z-[2] text-xl font-bold relative -top-10">
                Handmade for the Trail. Built to Last.
              </q> */}
            </div>

            <h1 className="hiking-font text-black text-[10rem] text-center z-[2] text-shadow">
              Summit
            </h1>
          </div>
          <Image
            src={Logo}
            alt="Mountain and a Tree logo"
            className="w-[40rem] z-[1] absolute -top-50 left-1/2 transform -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
}
