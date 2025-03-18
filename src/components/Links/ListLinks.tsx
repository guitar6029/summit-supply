"use client"
import { usePathname } from "next/navigation"
import CustomLink from "./CustomLink"
export default function ListLinks({links}: {links: {name: string, href: string}[]}){
    const pathname = usePathname()

    function getLinkClass() {
        if (pathname.includes('/boots')){
            return "text-[var(--dark-cyan)]"
        }

        if (pathname.includes('/casual')){
            return "text-[var(--dark-cyan)]"
        }
        if (pathname === '/'){
            return "text-[var(--dark-cyan)]"
        }

        if (pathname === '/cart'){
            return "text-[var(--dark-cyan)]"
        }

        return "text-white"
    }

    return (
        <div className="flex flex-row gap-4">
            {links.map((link) => {
                return (
                    <CustomLink
                        href={link.href}
                        key={link.name}
                        className={`${getLinkClass()}" : "text-white"} transition duration-300 ease-in hiking-font text-2xl`}
                    >
                        {link.name}
                    </CustomLink>
                );
            })}
        </div>
    )
}