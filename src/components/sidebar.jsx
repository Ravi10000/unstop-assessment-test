import { cn } from "#/utilities/cn";
import { Link, useLocation } from "react-router-dom";
import _ from "prop-types";
import { motion } from "framer-motion";
import { menuOptions, adminOptions } from "#/utilities/sidebar-options";

Sidebar.propTypes = {
  isSidebarOpen: _.bool,
  setIsSidebarOpen: _.func,
  setSelectedPage: _.func,
};

function Sidebar({ isSidebarOpen, setSelectedPage, setIsSidebarOpen }) {
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <aside
      className={cn(
        "w-full fixed top-0 left-0 h-screen md:w-fit md:static z-10 transition-all",
        isSidebarOpen ? "" : "pointer-events-none md:pointer-events-auto"
      )}
    >
      <div
        className={cn(
          "absolute h-full w-full bg-black/10 z-10 hidden",
          isSidebarOpen ? "animate-appear block" : ""
        )}
      ></div>
      <aside
        className={cn(
          "z-20 h-screen w-screen max-w-[315px] bg-_designBlue-200 transition-all py-10 flex flex-col gap-10 items-center relative md:static  md:w-fit md:px-2 md:bg-white",
          isSidebarOpen ? "left-0" : "-left-full"
          // isSidebarOpen ? "left-0" : "-left-full"
        )}
      >
        <div className="flex justify-between items-center w-full max-w-[275px] text-_designBlue-600 md:hidden">
          <h3 className="text-sm font-medium">Menu</h3>
          <button onClick={closeSidebar}>
            <img src="/icons/close.svg" alt="close menu" />
          </button>
        </div>
        <SidebarOptions {...{ setSelectedPage, closeSidebar }} />
      </aside>
    </aside>
  );
}

SidebarOptions.propTypes = {
  setSelectedPage: _.func,
  closeSidebar: _.func,
};

function SidebarOptions({ setSelectedPage, closeSidebar }) {
  const { pathname } = useLocation();
  return (
    <ul className="flex flex-col gap-2 items-center w-full">
      {menuOptions.map(({ title, icon, activeIcon, path }) => {
        const isSelected = path === pathname;
        return (
          <motion.li
            key={title}
            whileTap={{ scale: 0.9 }}
            className="w-full max-w-[275px] text-center"
          >
            <Link
              onClick={() => {
                setSelectedPage({ title, path });
                closeSidebar();
              }}
              to={path}
              className={cn(
                "border rounded-lg flex gap-2 p-3 font-semibold md:flex-col md:items-center md:text-[12px]",
                isSelected
                  ? "bg-_designBlue-300 border-_designBlue-500 text-_designBlue-500"
                  : "border-transparent text-_designBlue-600"
              )}
            >
              <img
                className="h-5 w-fit"
                src={`/icons/${isSelected ? activeIcon : icon}`}
                alt={title}
              />
              <span className="font-medium">{title}</span>
            </Link>
          </motion.li>
        );
      })}
      <div className="w-[90%] border border-dashed mx-5 my-3" />
      {adminOptions.map(({ title, icon, activeIcon, path }) => {
        const isSelected = path === pathname;
        return (
          <motion.li
            key={title}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-[275px] text-center"
          >
            <Link
              onClick={() => {
                setSelectedPage({ title, path });
                closeSidebar();
              }}
              to={path}
              className={cn(
                "border rounded-lg flex justify-between gap-2 p-3 font-semibold md:flex-col md:items-center md:text-[12px]",
                isSelected
                  ? "bg-_designBlue-300 border-_designBlue-500 text-_designBlue-500"
                  : "border-transparent text-_designBlue-600"
              )}
            >
              <div className="flex gap-2 items-center md:flex-col">
                <img
                  className="h-5 w-fit"
                  src={`/icons/${isSelected ? activeIcon : icon}`}
                  alt={title}
                />
                <span className="font-medium">{title}</span>
              </div>
              <span className="bg-_designRed-300 border border-_designRed-500 rounded-full text-_designRed-500 py-1 px-3 text-[10px] w-fit">
                Admin
              </span>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}

export default Sidebar;
