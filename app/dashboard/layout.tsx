import { ReactNode } from "react";
import DashboardSideBar from "./(components)/DashboardSideBar";
import DashboardTopNav from "./(components)/DashboardTopNav";
import { NavbarTop } from "@/components/navbar-top";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen w-full">
      <NavbarTop />
      <main className="flex flex-col gap-4 p-4 lg:gap-6">{children}</main>
    </div>
  );
}
