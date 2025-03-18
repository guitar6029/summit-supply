import Image from "next/image";

export default function SupplySummitLogo({
  className,
}: {
  className?: string;
}) {
  return (
    <Image
      src="https://supplysummit.s3.us-east-2.amazonaws.com/supply_summit_logo.png"
      alt="Mountain and a Tree logo"
      width={100}
      height={100}
      className={className}
    />
  );
}
