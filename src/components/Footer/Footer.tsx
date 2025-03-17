import Logo from "@/assets/img/supply_summit_logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col item-center justify-center gap-2 p-10 bg-black">
      <div className="flex flex-row items-center">
        <h1 className="hiking-font text-2xl">Supply Summit</h1>
        <Image src={Logo} alt="Mountain and a Tree logo" width={100} height={100} />
      </div>
    </footer>
  );
}
