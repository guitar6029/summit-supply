"use server";
import ListLinks from "../Links/ListLinks";
import { myNavigationLinks } from "@/data/navlinks";
import SupplySummitLogo from "../Logo/SupplySummitLogo";
export default async function Navigation() {
  return (
    <div className="flex flex-row items-center h-[100px] fixed top-0 w-full bg-[var(--dark-forest)] z-[100]">
      <div className="flex flex-row items-center gap-5 ml-5 ">
        <div className="flex flex-row items-center">
          <SupplySummitLogo className="w-[50px]" />
        </div>

        <ListLinks links={myNavigationLinks} />
      </div>

      
    </div>
  );
}
