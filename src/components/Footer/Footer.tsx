import SupplySummitLogo from "../Logo/SupplySummitLogo";

export default function Footer() {
  return (
    <div className="flex flex-col item-center justify-center gap-2 p-10 bg-[var(--dark-forest)]">
      <div className="flex flex-row items-center gap-2">
        <SupplySummitLogo className="w-[100px]" />
        <span className="hiking-font text-3xl">© 2025 Supply Summit</span>
      </div>
    </div>
  );
}
