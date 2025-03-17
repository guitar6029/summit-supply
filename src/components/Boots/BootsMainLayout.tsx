import Image from "next/image";
import Link from "next/link";
import { getBootImageWithBg } from "@/utils/imageRelated";
import type { Boot } from "@/types/Boots";

export default function ClassicBoot({ bootProps }: { bootProps: Boot }) {
  return (
    <>
      <section className="flex flex-col items-start gap-2 w-full md:w-fit">
        <h1 className="hiking-font w-full text-4xl lg:text-7xl text-nowrap text-center p-4 font-bold text-shadow-black">
          {bootProps.second_section_boot_title}
        </h1>

        <Image
          src={getBootImageWithBg(bootProps.second_section_boot_img)}
          alt={bootProps.second_section_boot_img_alt}
          width={400}
          height={400}
          className="w-[100%] object-contain mx-auto rounded-[30%]"
        />

        <Link
          href={`/boots/${bootProps.id}`}
          className="w-full group hover:cursor-pointer text-center p-4 text-5xl font-bold hiking-font hover:bg-black transition duration-300 ease-in"
        >
          <button className="group-hover:cursor-pointer">Find your boot</button>
        </Link>
      </section>
    </>
  );
}
