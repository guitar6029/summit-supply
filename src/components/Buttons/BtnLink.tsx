import { btnMain } from "@/styles/btn";
import Link from "next/link";
export default function BtnLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className={btnMain}
    >
      {text}
    </Link>
  );
}
