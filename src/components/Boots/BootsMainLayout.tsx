import Image from "next/image";
import Link from "next/link";
import ClassicBootImage from "@/assets/img/boot.png";
import ForestBackdrop from "@/assets/img/dan-meyers-ylJtKpTYjn4-unsplash.jpg";

type BootProps = {
  bootProps: {
    name: string;
    firstSectionTitle: string[];
    firstSectionQuote: string;
    firstSectionBackgroundImage: string;
    firstSectionBackgroundImageAlt: string;
    secondSectionBootTitle: string;
    secondSectionBootDescription: {
      text: string;
      boldtext: string;
    };
    secondSectionBootImg: string;
    secondSectionBootImgAlt: string;
  };
};
export default function ClassicBoot({ bootProps} : BootProps) {
  return (
    <>
      <section className="relative min-h-screen grid grid-cols-2 flex-col gap-6 p-4">
        {/* Background Image */}
        <Image
          src={ForestBackdrop}
          alt="forest"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          priority={true}
        />
        {/* left side */}
        <div className="col-span-1">
          {/* section with the fixed text */}
          <div className="hiking-font text-[10rem] font-bold text-nowrap flex flex-col gap-1 sticky top-[4rem] ml-10">
            <h1 className="leather-boot-color text-shadow-white">Our</h1>
            <h1 className="leather-boot-color text-shadow-white">Classic</h1>
            <h1 className="leather-boot-color text-shadow-white">Boot</h1>
          </div>
        </div>

        {/* right side */}
        <div className="z-10 p-4 col-span-1 flex flex-col justify-center">
          <div className="flex flex-col">
            
            <div className="w-[400px] text-white p-4 ">
              <p className="mt-2 text-6xl font-bold text-center text-shadow">
                <q>
                  Tested by nature. Perfected by tradition. Ready for your
                  journey.
                </q>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen grid grid-cols-2 bg-[#11210e]">
        <div className="col-span-1 card-primary flex flex-col justify-between ">
          <div className="w-full h-[4rem] bg-[#11210e]"></div>
          <div className="flex flex-col gap-3 items-center justify-center p-4">
            <p className="text-4xl text-center text-[#1b5659]">
              Born from decades of craftsmanship,
              <b className="hiking-font">The Summit Classic</b> is more than
              just a hiking boot—it&apos;s a legacy. Handmade with the finest
              full-grain leather and reinforced with a Vibram sole, this boot is
              built for the toughest trails and the longest journeys.
            </p>

            <Link
              href="/boots"
              className="w-1/2 text-center p-4 rounded-full font-bold bg-amber-600"
            >
              <button>Find your boot</button>
            </Link>
          </div>
          <div className="w-full h-[4rem] bg-[#0f3409]"></div>
        </div>

        <div className="col-span-1 flex flex-col justify-between">
          <div className="bg-[#0f3409] p-10">
            <h1 className="hiking-font text-6xl text-nowrap  font-bold text-shadow">
              The Summit Classic
            </h1>
          </div>

          <div className="flex flex-row items-center justify-center p-4">
            <Image
              src={ClassicBootImage}
              alt="Classic Boot"
              className="w-[30rem]"
            />
          </div>
          <div className="bg-[#0f3409] w-full h-[15rem]"></div>
        </div>
      </section>
    </>
  );
}
