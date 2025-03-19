import SupplySummitLogo from "../Logo/SupplySummitLogo";

export default function Footer() {
  return (
    <footer className="flex flex-col item-center justify-center gap-2 p-10 bg-[var(--desaturated-blue)]">
      <div className="flex flex-row items-center">
        <SupplySummitLogo className="w-[100px]" />
      </div>
    </footer>
  );
}
