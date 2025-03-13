import Link from "next/link";
export default function Navigation() {
    return (
        <div className="flex flex-row items-center justify-around h-[5rem]">
            <div className="flex flex-row item-center gap-10">
                <Link href={"/"} className="hiking-font text-4xl hover:text-orange-500 transition duration-300 ease-in">Home</Link>
                <Link href={"/boots"} className="hiking-font text-4xl hover:text-orange-500 transition duration-300 ease-in">Boots</Link>
            </div>

            <div className="flex flex-row">
                <h1 className="hiking-font">Supply Summit</h1>
                <div className="triangle"></div>
            </div>

            <div className="flex flex-row item-center gap-10">
                <Link href={"/supplies"} className="hiking-font text-4xl hover:text-orange-500 transition duration-300 ease-in">Supplies</Link>
                <Link href={"/about"} className="hiking-font text-4xl hover:text-orange-500 transition duration-300 ease-in">About</Link>
            </div>

        </div>
    )
}