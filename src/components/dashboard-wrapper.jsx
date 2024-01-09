import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { cn } from "#/utilities/cn";
import Header from "./header";
import { useState } from "react";

function DashboardWrapper() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex gap-5 overflow-hidden h-screen bg-_designGray w-full"
      )}
    >
      <Sidebar {...{ isSidebarOpen, setIsSidebarOpen }} />
      <main className={cn("w-full")}>
        <Header {...{ isSidebarOpen, setIsSidebarOpen, title: "Assessment" }} />
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardWrapper;
