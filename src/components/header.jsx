import { cn } from "#/utilities/cn";
import _ from "prop-types";
import { useState } from "react";

Header.propTypes = {
  setIsSidebarOpen: _.func,
  title: _.string,
  selectedPage: _.object,
};
function Header({ setIsSidebarOpen, selectedPage }) {
  const [tab, setTab] = useState("desktop");
  return (
    <header
      className={cn(
        "bg-white w-full p-5 flex justify-between items-center sticky top-0"
      )}
    >
      <div className="flex gap-2 items-center">
        <button
          className={cn("h-10 aspect-square md:hidden")}
          onClick={() => setIsSidebarOpen(true)}
        >
          <img src="/icons/menu.svg" alt="toggle sidebar" />
        </button>
        <h3 className="font-semibold text-_designBlue-600">
          {selectedPage.title}
        </h3>
      </div>
      <button>
        <img
          src={`/icons/${tab === "desktop" ? "desktop" : "mobile"}.svg`}
          alt={tab === "desktop" ? "desktop" : "mobile"}
          onClick={() => {
            setTab((ps) => (ps === "desktop" ? "mobile" : "desktop"));
          }}
        />
      </button>
    </header>
  );
}

export default Header;
