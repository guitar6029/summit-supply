import Image from "next/image";
import Forest from "@/assets/img/geranimo-qzgN45hseN0-unsplash.jpg";
import JohnCalloway from "@/assets/img/johnCallowayOurStory.jpg";
import EmmaCalloway from "@/assets/img/emmaCallowayOurStory.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-amber-600">
      <div className="relative flex flex-col ">
        <Image
          src={Forest}
          alt="forest"
          className="w-[100vw] h-[65vh] object-cover z-[1]"
        />

        <section className="absolute top-30 left-10 flex flex-col gap-2 p-4 z-[2]">
          <h1 className="hiking-font text-shadow-black text-7xl font-bold ">
            Summit Supply: A Legacy Built for the Trail
          </h1>

          <p className="text-3xl">
            High in the rugged terrain of the Colorado Rockies, where the air is
            crisp and the trails seem endless,{" "}
            <span className="hiking-font">Summit Supply</span> was born—not in a
            boardroom, but in a small wooden workshop nestled at the foot of a
            mountain.
          </p>
        </section>
      </div>

      <section className="relative grid grid-cols-1 md:grid-cols-2  bg-[#0f3409]">
        <div className="col-span-1 flex flex-col items-center">
          <div className="bg-[#11210e]">
            <h1 className="hiking-font text-7xl font-bold p-4">
              The Beginnings: A Father&apos;s Craftsmanship
            </h1>
          </div>
          <p className="text-wrap font-mono p-4">
            The story of <span className="hiking-font">Summit Supply</span>{" "}
            begins in the 1970s with{" "}
            <span className="hiking-font">Henry Calloway</span>, a
            second-generation cobbler with an insatiable love for the outdoors.
            Henry grew up in his father&apo;s shoe repair shop, where he learned
            the art of hand-stitching leather and crafting durable soles.
            However, his true passion lay beyond the shop walls—on the mountain
            trails he hiked every weekend. After years of fixing worn-out hiking
            boots for local climbers and explorers, Henry saw a
            problem—mass-produced hiking shoes didn&apos;t last. They lacked the
            durability, comfort, and craftsmanship needed for serious
            adventurers. Determined to create something better, Henry set out to
            design hiking boots that weren&apos;t just tough but tailored to
            each wearer&apos;s feet. In 1978, with a small loan and a workbench
            in his garage, Henry handcrafted his first pair of Summit Boots—made
            from premium leather, reinforced stitching, and a custom-molded fit.
            Word spread quickly among local hikers and mountaineers, and soon,
            his one-man operation became a trusted name in the Colorado hiking
            community.
          </p>
        </div>

        <div className="flex flex-col">
          <Image
            src={JohnCalloway}
            alt="John Calloway"
            className=" w-[100%]"
          />
          <div className="w-full h-[5rem] bg-[#11210e] text-white flex flex-col items-center justify-center">
            <span className="hiking-font">John Calloway Circa 1978</span>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-2 p-4">
        <h1 className="hiking-font text-7xl font-bold">A Family Tradition</h1>
        <p>
          By the 1990s, Henry&apos;s son,{" "}
          <span className="hiking-font">Jack Calloway</span>, had joined the
          business. Jack inherited his father&apos;s craftsmanship but brought a
          modern twist—experimenting with new materials, like lightweight
          waterproof leathers and ergonomic soles. Together, they expanded the
          product line, adding walking shoes and sandals designed for both
          rugged terrain and everyday adventurers.
        </p>
        <p>
          While large companies dominated the market, Summit Supply stayed true
          to its roots:
        </p>
        <ul>
          <li>Every shoe was handmade by skilled artisans.</li>
          <li>Each customer received custom fittings for perfect support.</li>
          <li>
            Sustainability became a core value, using locally sourced materials
            and eco-friendly production.
          </li>
        </ul>
        <p>
          By the early 2000s, <span className="hiking-font">Summit Supply</span>{" "}
          had built a cult following—hikers, backpackers, and even professional
          mountaineers swore by their handcrafted footwear.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 flex-col gap-2 p-4">
        <div className="col-span-1">
          <Image src={EmmaCalloway} alt="Emma Calloway" className="w-[100%]" />
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <h1 className="hiking-font text-7xl font-bold">
            The Next Generation: Honoring Tradition, Embracing Innovation
          </h1>
          <p>
            Today, Summit Supply is led by{" "}
            <span className="hiking-font">Emma Calloway</span>, Jack&apos;s
            daughter, who grew up stitching leather alongside her father and
            grandfather. Under her leadership, the company has embraced modern
            technology without losing its handmade touch. 3D foot scanning
            technology ensures a perfect fit for every customer, and a new
            recycled rubber program keeps old boots out of landfills.
          </p>
          <p>
            Despite the evolution, the company remains family-owned, still
            operating out of its original workshop in Colorado, where every pair
            of boots, walking shoes, and sandals is crafted with the same
            dedication Henry had over 40 years ago.
          </p>

          <p>Their motto?</p>
          <q className="italic">Handmade for the Trail. Built to Last.</q>
          <p>
            And as long as there are mountains to climb and paths to explore,
            Summit Supply will be there—one step at a time.
          </p>
        </div>
      </section>
    </div>
  );
}
