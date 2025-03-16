import Image from "next/image";
import Link from "next/link";
import { getBootImageWithBg } from "@/utils/imageRelated";
import type { Boot } from "@/types/Boots";

export default function ClassicBoot({ bootProps }: { bootProps: Boot }) {
  return (
    <>
      <section className="relative grid grid-cols-1 ">
        <div className="col-span-1 bg-[var(--mustard)] flex flex-col">
          <div className="flex flex-col gap-10 justify-center">
            <div className="bg-[var(--forest-green)]">
              <h1 className="hiking-font text-4xl text-center md:text-left md:text-6xl lg:text-7xl text-nowrap p-10 font-bold text-shadow">
                {bootProps.second_section_boot_title}
              </h1>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
              <div className="p-10">
                <p className="text-3xl md:text-5xl hiking-font">
                  {bootProps.second_section_boot_description}
                </p>
              </div>
              <Image
                src={getBootImageWithBg(bootProps.second_section_boot_img)}
                alt={bootProps.second_section_boot_img_alt}
                width={400}
                height={400}
                className="w-[50%] object-contain mx-auto"
              />
            </div>
            <Link
              href={`/boots/${bootProps.id}`}
              className="w-full  text-center group hover:cursor-pointer p-4 text-5xl font-bold hiking-font bg-amber-600 hover:bg-amber-800 transition duration-300 ease-in"
            >
              <button className="group-hover:cursor-pointer">
                Find your boot
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
