import Image from "next/image";


export default function SupplySummitLogo({
  className,
}: {
  className?: string;
}) {
  return (
    <Image
      src="/img/supply_summit_logo.png"
      alt="Mountain and a Tree logo"
      width={100}
      height={100}
      className={className}
    />
  );
}
