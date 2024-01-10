import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { cn } from "#/utilities/cn";
import Header from "./header";
import { useState } from "react";
import { menuOptions } from "#/utilities/sidebar-options";

function DashboardWrapper() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(menuOptions[0]);
  return (
    <div
      className={cn(
        "flex gap-5 overflow-hidden h-screen bg-_designGray w-full"
      )}
    >
      <Sidebar {...{ isSidebarOpen, setIsSidebarOpen, setSelectedPage }} />
      <main className={cn("w-full")}>
        <Header {...{ isSidebarOpen, setIsSidebarOpen, selectedPage }} />
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardWrapper;
