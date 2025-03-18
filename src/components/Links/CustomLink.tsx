"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${
        isActive ? "text-[var(--dark-cyan)]" : "text-white"
      } transition duration-300 ease-in`}
    >
      {children}
    </Link>
  );
}
