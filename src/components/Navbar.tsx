import {
  Bell,
  Calendar,
  ChevronDown,
  CircleUserRound,
  Mail,
} from "lucide-react";
import { LuSearch } from "react-icons/lu";

function Navbar() {
  return (
    <nav className="dark:text-light-tx text-dark-tx flex w-full items-center justify-between justify-self-start px-2 py-2">
      <div className="flex items-center gap-2 text-lg">
        <LuSearch className="text-medium-tx cursor-pointer" />
        <input
          type="text"
          ga
          name=""
          id=""
          placeholder="Type to Search.."
          className="placeholder:text-medium-tx bg-light-bg dark:bg-dark-bg text-dark-tx dark:text-light-tx w-full outline-none placeholder:text-base"
        />
      </div>
      <div className="jus text-medium-tx flex items-center gap-2 md:gap-4 lg:gap-6">
        <div className="hidden items-center gap-5 md:flex">
          <Bell size={28} />
          <Calendar size={28} />
          <Mail size={28} />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h1 className="text-dark-tx dark:text-light-tx text-sm font-semibold md:text-base">
              Salman Yaqoob
            </h1>
            <h3 className="hidden self-end md:block md:text-xs">
              Web developer
            </h3>
          </div>
          <div className="flex items-center">
            <CircleUserRound size={36} />
            <ChevronDown />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
