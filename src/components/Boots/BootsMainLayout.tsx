import Image from "next/image";
import Link from "next/link";
import type { Boot } from "@/types/Boots";

export default function ClassicBoot({ bootProps }: { bootProps: Boot }) {
  return (
    <>
      <section className="flex flex-col items-start gap-2 w-full md:w-fit mt-10">
        <Link
          href={`/boots/${bootProps.id}`}
          className="w-full cursor-pointer flex flex-col rounded-xl gap-2 text-center p-4 text-5xl font-bold hiking-font hover:bg-[var(--forest-green-dark)] transition duration-300 ease-in"
        >
          <Image
            src={bootProps.img_url}
            alt={bootProps.second_section_boot_img_alt}
            width={400}
            height={400}
            className="w-[100%] object-contain mx-auto rounded-[30%]"
          />

          <button className="group-hover:cursor-pointer">
            {bootProps.second_section_boot_title}
          </button>
        </Link>
      </section>
    </>
  );
}
