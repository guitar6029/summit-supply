import Hero from "@/components/Hero/Hero";
import BtnLink from "@/components/Buttons/BtnLink";
export default function Home() {
  return (
    <div >
      <Hero />
      <section className="relative grid grid-cols-1 ridge-explorer-collection-bg mt-10">
        <div className="col-span-1 flex flex-col justify-center">
          <div className="text-7xl md:text-7xl lg:text-[10rem] hiking-font text-shadow flex flex-col p-10">
            <span>Introducing the Ridge Explorer</span>
            <BtnLink href="/boots" text="Explore the Collection" />
          </div>
        </div>
      </section>
    </div>
  );
}
