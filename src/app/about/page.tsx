import Image from "next/image";
import Forest from "@/assets/img/geranimo-qzgN45hseN0-unsplash.jpg";
import JohnCalloway from "@/assets/img/johnCallowayOurStory.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-amber-600">
      <div className="relative flex flex-col ">
        <Image
          src={Forest}
          alt="forest"
          width={400}
          height={400}
          className="w-[100vw] h-[65vh] object-cover z-[1]"
        />

        <section className="absolute top-30 left-10 flex flex-col gap-2 p-10 z-[2] bg-[#0f3409]">
          <h1 className="hiking-font text-shadow-black text-7xl font-bol">
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
        <div className="col-span-1 flex flex-col items-center ">
          <div className="bg-[#11210e]">
            <h1 className="hiking-font text-7xl font-bold p-10">
              The Beginnings: A Father&apos;s Craftsmanship
            </h1>
          </div>
          <p className="text-wrap font-mono p-10 text-3xl">
            The story of <span className="hiking-font">Summit Supply</span>{" "}
            begins in the 1970s with{" "}
            <span className="hiking-font">Henry Calloway</span>, a
            second-generation cobbler with an insatiable love for the outdoors.
            Henry grew up in his father&apo;s shoe repair shop, where he learned
            the art of hand-stitching leather and crafting durable soles.
            However, his true passion lay beyond the shop walls—on the mountain
            trails he hiked every weekend. After years of fixing worn-out hiking
            boots for local climbers and explorers, Henry saw a
            problem—mass-produced hiking shoes didn&apos;t last.
          </p>
          <p className="text-wrap font-mono p-10 text-3xl">
            They lacked the durability, comfort, and craftsmanship needed for
            serious adventurers. Determined to create something better, Henry
            set out to design hiking boots that weren&apos;t just tough but
            tailored to each wearer&apos;s feet. In 1978, with a small loan and
            a workbench in his garage, Henry handcrafted his first pair of
            Summit Boots—made from premium leather, reinforced stitching, and a
            custom-molded fit. Word spread quickly among local hikers and
            mountaineers, and soon, his one-man operation became a trusted name
            in the Colorado hiking community.
          </p>
        </div>

        <div className="flex flex-col">
          <Image src={JohnCalloway} alt="John Calloway" className=" w-[100%]" />
          <div className="w-full h-[5rem] bg-[#11210e] text-white flex flex-col items-center justify-center">
            <span className="hiking-font text-4xl">
              John Calloway Circa 1978
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
