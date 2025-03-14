import Image from "next/image";
import Link from "next/link";
import ClassicBootImage from "@/assets/img/boot.png";
import ForestBackdrop from "@/assets/img/dan-meyers-ylJtKpTYjn4-unsplash.jpg";
import RidgeExplorerBoot from "@/assets/img/ridgeExplorer_nobackground.png";
import RidgeExplorerBg from "@/assets/img/degleex-ganzorig-wQImoykAwGs-unsplash.jpg";
import TrailRoverBoot from "@/assets/img/trailRover_nobackground.png";
import TrailStrider from "@/assets/img/trailStider_nobackground.png"
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
    secondaryImg: string;
  };
};
export default function ClassicBoot({ bootProps }: BootProps) {
  function getBackgroundImage(imageName: string) {
    if (imageName === "ridgeExplorer") {
      return RidgeExplorerBg;
    }

    return ForestBackdrop;
  }

  function getBootImage(imageName: string) {
    if (imageName === "ridgeExplorer") {
      return RidgeExplorerBoot;
    }

    if (imageName === "trailRover") {
      return TrailRoverBoot;
    }

    if (imageName === "trailStrider"){
      return TrailStrider;
    }
    return ClassicBootImage;
  }

  function getSecondaryBgClass(imageName: string) {
    if (imageName === "ridgeExplorer") {
      return "hiking-2-bg";
    }
    if (imageName === "trailRover") {
      return "hiking-3-bg";
    }
    if (imageName === "trailStrider"){
      return "hiking-4-bg";
    }

    return "hiking-bg";
  }

  const bootText = bootProps.secondSectionBootDescription.text;
  const bootBoldText = bootProps.secondSectionBootDescription.boldtext;
  const parts = bootText.split(new RegExp(`(${bootBoldText})`, "gi"));

  return (
    <>
      <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 flex-col gap-6 p-4">
        {/* Background Image */}
        <Image
          src={getBackgroundImage(bootProps.firstSectionBackgroundImage)}
          alt={bootProps.firstSectionBackgroundImageAlt}
          width={1920}
          height={1080}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          priority={true}
        />
        {/* left side */}
        <div className="col-span-1">
          {/* section with the fixed text */}
          <div className="hiking-font text-[4rem] md:text-[7rem] text-center md:text-left font-bold text-wrap md:text-nowrap flex flex-col gap-1 sticky top-[4rem] ml-10">
            <h1 className="leather-boot-color text-shadow-white">
              {bootProps.firstSectionTitle[0]}
            </h1>
            <h1 className="leather-boot-color text-shadow-white">
              {bootProps.firstSectionTitle[1]}
            </h1>
            <h1 className="leather-boot-color text-shadow-white">
              {bootProps.firstSectionTitle[2]}
            </h1>
          </div>
        </div>

        {/* right side */}
        <div className="z-10 p-4 col-span-1 flex flex-col sm:items-center justify-center">
          <div className="flex flex-col">
            <div className="w-[100%] md:w-[30vw]  text-white p-4 ">
              <p className="mt-2 text-wrap text-[2rem] md:text-6xl font-bold text-center text-shadow">
                <q>{bootProps.firstSectionQuote}</q>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#11210e]">
        <div className="col-span-1 card-primary flex flex-col justify-between ">
          <div className="w-full h-[4rem] bg-[#11210e]"></div>
          <div className="flex flex-col gap-3 items-center justify-center p-4">
            <p className="text-2xl md:text-4xl text-center font-mono text-[#1b5659]">
              {parts.map((part, i) =>
                part.toLowerCase() === bootBoldText.toLowerCase() ? (
                  <b key={i} className="hiking-font">
                    {part}
                  </b>
                ) : (
                  part
                )
              )}
            </p>

            <Link
              href="/boots"
              className="w-full md:w-1/2 text-center p-4 rounded-full font-bold bg-amber-600"
            >
              <button>Find your boot</button>
            </Link>
          </div>
          <div className="w-full h-[4rem] bg-[#0f3409]"></div>
        </div>

        <div className="col-span-1 flex flex-col justify-between">
          <div className="bg-[#0f3409] p-10">
            <h1 className="hiking-font text-4xl text-center md:text-left md:text-5xl lg:text-6xl text-nowrap  font-bold text-shadow">
              {bootProps.secondSectionBootTitle}
            </h1>
          </div>

          <div className="flex flex-row items-center justify-center p-4">
            <Image
              src={getBootImage(bootProps.secondSectionBootImg)}
              alt={bootProps.secondSectionBootImgAlt}
              width={400}
              height={400}
              className="w-[40rem]"
            />
          </div>
          <div
            className={`w-full h-[15rem] ${getSecondaryBgClass(
              bootProps.secondaryImg
            )}`}
          ></div>
        </div>
        <div className="w-full h-[4rem] bg-[#0f3409]"></div>
      </section>
    </>
  );
}
