import Image from "next/image";
import Link from "next/link";
import ClassicBootImage from "@/assets/img/boot.png";
import RidgeExplorerBoot from "@/assets/img/ridgeExplorer_nobackground.png";
import TrailRoverBoot from "@/assets/img/trailRover_nobackground.png";
import TrailStrider from "@/assets/img/trailStider_nobackground.png";
import type { Boot } from "@/types/Boots";

export default function ClassicBoot({ bootProps }: { bootProps: Boot }) {
  function getBootImage(imageName: string) {
    if (imageName === "ridgeExplorer") {
      return RidgeExplorerBoot;
    }

    if (imageName === "trailRover") {
      return TrailRoverBoot;
    }

    if (imageName === "trailStrider") {
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
    if (imageName === "trailStrider") {
      return "hiking-4-bg";
    }

    return "hiking-bg";
  }

  return (
    <>
      <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#11210e]">
        <div className="col-span-1 card-primary flex flex-col justify-between ">
          <div className="w-full h-[4rem] bg-[#11210e]"></div>
          <div className="flex flex-col gap-10 items-center justify-center p-4 border-t-4 border-b-4 border-[#1b5659]">
            <p className="text-2xl md:text-4xl text-center font-mono text-[#1b5659]">
              {bootProps.second_section_boot_description}
            </p>

            <Link
              href={`/boots/${bootProps.id}`}
              className="w-full md:w-1/2 text-center group hover:cursor-pointer p-4 text-5xl font-bold hiking-font bg-amber-600 hover:bg-amber-800 transition duration-300 ease-in"
            >
              <button className="group-hover:cursor-pointer">
                Find your boot
              </button>
            </Link>
          </div>
          <div className="w-full h-[4rem] bg-[#0f3409]"></div>
        </div>

        <div className="col-span-1 flex flex-col justify-between">
          <div className="bg-[#0f3409] p-10">
            <h1 className="hiking-font text-4xl text-center md:text-left md:text-5xl lg:text-6xl text-nowrap  font-bold text-shadow">
              {bootProps.second_section_boot_title}
            </h1>
          </div>

          <div className="flex flex-row items-center justify-center">
            <Image
              src={getBootImage(bootProps.second_section_boot_img)}
              alt={bootProps.second_section_boot_img_alt}
              width={400}
              height={400}
              className="w-[40rem]"
            />
          </div>
          <div
            className={`w-full h-[25rem] ${getSecondaryBgClass(
              bootProps.secondary_img
            )}`}
          ></div>
        </div>
        <div className="w-full h-[4rem] bg-[#0f3409]"></div>
      </section>
      <div className="w-full h-[3rem] bg-[var(--forest-green)]"></div>
    </>
  );
}
