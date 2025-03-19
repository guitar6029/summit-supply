import SupplySummitLogo from "../Logo/SupplySummitLogo";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col hero-bg">
      <div className="relative flex flex-col md:flex-row items-center justify-center w-[100vw] mt-10 p-10">
        <SupplySummitLogo className="w-[10rem]" />
        <h1 className="hiking-font text-[3rem]  md:text-[6rem] text-wrap text-shadow-black">
          Built for the Trail, Styled for the Journey.
        </h1>
      </div>
    </div>
  );
}
