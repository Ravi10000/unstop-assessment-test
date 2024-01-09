import { cn } from "#/utilities/cn";
import _ from "prop-types";

Header.propTypes = {
  setIsSidebarOpen: _.func,
  title: _.string,
};
function Header({ setIsSidebarOpen, title }) {
  return (
    <header className={cn("bg-white w-full")}>
      <div className="flex gap-2">
        <button
          className={cn("h-10 aspect-square md:hidden")}
          onClick={() => setIsSidebarOpen(true)}
        >
          <img src="/icons/menu.svg" alt="toggle sidebar" />
        </button>
        <h3>{title}</h3>
      </div>
    </header>
  );
}

export default Header;
