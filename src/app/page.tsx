
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import RidgeExplorer from "@/assets/img/ridgeExplorer_nobackground.png";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-3 grid-row-2">
          <div className="col-span-1 row-span-1">
            <div className="text-[12rem] hiking-font text-shadow flex flex-col absolute left-10 z-[50] ">
              {/* <span>Check Out</span>
              <span>Our New Boots</span> */}
              <span>Introducing the Ridge Explorer</span>
              </div>
          </div>
          <div className="col-span-3 h-[100vh] row-span-1">
            <Image
              src={RidgeExplorer}
              alt="Ridge Explorer"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          
      </section>

      <section className="min-h-screen grid-cols-1 md:grid-cols-2 bg-[#0f3409]">
                <div className="col-span-1">
                  <h1 className="hiking-font text-[5rem] md:text-[10rem] text-wrap md:text-wrap text-shadow">Check out our blog</h1>
                </div>
      </section>
    </div>
  );
}
