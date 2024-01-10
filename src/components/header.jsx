import { cn } from "#/utilities/cn";
import _ from "prop-types";
import { useState } from "react";
import TabSwitcher from "./tab-switcher";
import { useLocation } from "react-router-dom";

Header.propTypes = {
  setIsSidebarOpen: _.func,
  title: _.string,
  selectedPage: _.object,
};
function Header({ setIsSidebarOpen, selectedPage }) {
  const [tab, setTab] = useState("desktop");
  const { pathname } = useLocation();
  const isAssessmentPage = pathname === "/dashboard/assessment";
  return (
    <header className="sticky top-0 left-0 md:static">
      <div
        className={cn(
          "bg-white w-full p-5  flex justify-between items-center md:py-0"
        )}
      >
        <div className="flex gap-3 items-center">
          <button
            className={cn("h-10 aspect-square md:hidden")}
            onClick={() => setIsSidebarOpen(true)}
          >
            <img src="/icons/menu.svg" alt="toggle sidebar" />
          </button>
          <h3 className="font-semibold text-_designBlue-600 py-5">
            {selectedPage.title}
          </h3>
          {isAssessmentPage && (
            <>
              <div className="h-11 w-[2px] bg-_designGray-100" />
              <div className="hidden md:flex">
                <TabSwitcher />
              </div>
            </>
          )}
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
      </div>
      {isAssessmentPage && (
        <div className="md:hidden">
          <TabSwitcher />
        </div>
      )}
    </header>
  );
}

export default Header;
