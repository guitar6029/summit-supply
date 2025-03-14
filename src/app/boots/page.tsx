import BootsMainLayout from "@/components/Boots/BootsMainLayout";
import { boots } from "@/data/Boots/boots";
import type { Boot } from "@/data/Boots/boots";

export default function Boots() {
  return (
    <>
    <div className="min-h-screen boot-layout-bg relative">
        <div className="top-10 left-15 bg-[#0f3409] p-10 sticky ">
        <h1 className="hiking-font text-[5rem] md:text-[10rem] text-wrap md:text-wrap text-shadow">Boots Built for Every Journey</h1>
            <span className="text-4xl font-mono">From rugged peaks to city streets, our boots are designed for adventure, comfort, and durability.</span>
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
