import SupplySummitLogo from "../Logo/SupplySummitLogo";

export default function Footer() {
  return (
    <footer className="flex flex-col item-center justify-center gap-2 p-10 bg-black">
      <div className="flex flex-row items-center">
        <SupplySummitLogo className="w-[100px]" />
      </div>
    </footer>
  );
}
