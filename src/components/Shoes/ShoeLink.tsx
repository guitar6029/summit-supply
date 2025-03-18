import Image from "next/image";
import Link from "next/link";
import type { Shoe } from "@/types/Shoe";

export default function ShoeLink({ shoeProps }: { shoeProps: Shoe }) {
  
  function shoePath(){
    switch (shoeProps.shoe_type) {
      case "casual":
        return "casual";
      case "boot":
        return "boots";
      default:
        return "boots";
    }
  }
  
  return (
    <>
      <section className="flex flex-col items-start gap-2 w-full md:w-fit mt-10">
        <Link
          href={`/${shoePath()}/${shoeProps.id}`}
          className="w-full cursor-pointer flex flex-col rounded-xl gap-2 text-center p-4 text-5xl font-bold hiking-font hover:bg-[var(--forest-green-dark)] transition duration-300 ease-in"
        >
          <Image
            src={shoeProps.img_url}
            alt={shoeProps.second_section_boot_img_alt}
            width={400}
            height={400}
            className="w-[100%] object-contain mx-auto rounded-[30%]"
          />

          <button className="group-hover:cursor-pointer">
            {shoeProps.second_section_boot_title}
          </button>
        </Link>
      </section>
    </>
  );
}
