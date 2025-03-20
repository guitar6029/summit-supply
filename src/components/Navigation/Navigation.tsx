"use server";
import Account from "../Signin/Account";
import ListLinks from "../Links/ListLinks";
import { myNavigationLinks } from "@/data/navlinks";
import SupplySummitLogo from "../Logo/SupplySummitLogo";
export default async function Navigation() {
  return (
    <div className="flex flex-row items-center justify-around h-[100px] fixed top-0 w-full bg-[var(--desaturated-blue)] z-[20]">
      <div className="flex flex-row items-center gap-10">
        <div className="flex flex-row items-center">
          <SupplySummitLogo className="w-[100px]" />
        </div>

        <ListLinks links={myNavigationLinks} />
      </div>

      {/* <Account /> */}
    </div>
  );
}
