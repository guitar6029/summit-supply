import BootsMainLayout from "@/components/Boots/BootsMainLayout";
import Hero from "@/components/Hero/Hero";
import { boots } from "@/data/Boots/boots";
import type { Boot } from "@/data/Boots/boots";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      {boots.map((boot: Boot) => {
        return <BootsMainLayout bootProps={boot} key={boot.name} />;
      })}
    </div>
  );
}
