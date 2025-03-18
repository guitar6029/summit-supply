import SupplySummitLogo from "../Logo/SupplySummitLogo";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col hero-bg">
      <div className="relative flex flex-col md:flex-row items-center justify-center w-[100vw] mt-10 p-10">
        <SupplySummitLogo className="relative w-[20rem] z-[1]" />
        <h1 className="z-[2] hiking-font text-[3rem] md:relative md:right-15 md:text-[6rem] text-wrap text-shadow-black">
          Built for the Trail, Styled for the Journey.
        </h1>
      </div>
    </div>
  );
}
