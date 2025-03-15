import BootsMainLayout from "@/components/Boots/BootsMainLayout";
import { boots } from "@/data/Boots/boots";
import type { Boot } from "@/types/Boots";
import Image from "next/image";
import RidgeExplorer from "@/assets/img/ridgeExplorer.jpg";
import Classic from "@/assets/img/hiking_classic_boot.jpg";
import TrailStrider from "@/assets/img/trailStrider.jpg";

export default function Boots() {
  return (
    <>
      {/* bg-[#0f3409] */}
      <div className="min-h-screen boot-layout-bg relative">
        <div className="top-10 left-15  p-10 sticky z-[2]">
          <h1 className="hiking-font text-[5rem] md:text-[10rem] text-wrap md:text-wrap text-shadow">
            Boots Built for Every Journey
          </h1>
          <span className="text-4xl font-mono text-shadow ">
            From rugged peaks to city streets, our boots are designed for
            adventure, comfort, and durability.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 bg-[#15470d] h-[50vh]">
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <Image
                src={RidgeExplorer}
                alt="Ridge Explorer"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
          <div className="col-span-1 bg-[#887b26] h-[50vh]">
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <Image
                src={Classic}
                alt="Classic"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
          <div className="col-span-1 bg-[#0d5664] h-[50vh]">
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <Image
                src={TrailStrider}
                alt="Trail Strider"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {boots.map((boot: Boot) => {
          return <BootsMainLayout bootProps={boot} key={boot.id} />;
        })}
      </div>
    </>
  );
}
