"use client"
import { usePathname } from "next/navigation"
import CustomLink from "./CustomLink"
export default function ListLinks({links}: {links: {name: string, href: string}[]}){
    const pathname = usePathname()
    return (
        <div className="flex flex-row gap-2">
            {links.map((link) => {
                return (
                    <CustomLink
                        href={link.href}
                        key={link.name}
                        className={`${pathname === link.href ? "text-[var(--dark-cyan)]" : "text-white"} transition duration-300 ease-in`}
                    >
                        {link.name}
                    </CustomLink>
                );
            })}
        </div>
    )
}