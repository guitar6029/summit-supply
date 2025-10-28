import SupplySummitLogo from "../Logo/SupplySummitLogo";
import BtnLink from "../Buttons/BtnLink";

export default function Hero() {
  return (
    <div className="relative min-h-dvh flex flex-col hero-bg">
      <div className="relative flex flex-col md:flex-row  justify-center w-[100vw] mt-10 p-10">
        <SupplySummitLogo className="w-[10rem] h-[10rem]" />
        <div className="flex flex-col gap-5">
          <h1 className="hiking-font text-[4rem] md:text-[8rem] text-wrap text-shadow">
            Built for the Trail, Styled for the Journey.
          </h1>
          <div className="flex flex-col items-center md:justify-center md:flex-row gap-5">

          <BtnLink href="/boots" text="Shop Boots" />
          <BtnLink href="/casual" text="Shop Casual" />
          </div>
        </div>
      </div>
    </div>
  );
}
