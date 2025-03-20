import Link from "next/link";
import Hero from "@/components/Hero/Hero";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="relative min-h-screen grid grid-cols-1 ridge-explorer-collection-bg mt-10">
        <div className="col-span-1 flex flex-col justify-center">
          <div className="text-7xl md:text-7xl lg:text-[10rem] hiking-font text-shadow flex flex-col p-10">
            <span>Introducing the Ridge Explorer</span>
            <Link
              href="/boots"
              className="text-3xl md:text-5xl lg:text-6xl rounded-lg p-5 w-fit text-shadow-black bg-amber-600 hover:bg-amber-700 transition duration-300 ease-in"
            >
              Explore the Collections
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
