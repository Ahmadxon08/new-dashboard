import { Moon } from "lucide-react";
import Link from "next/link";
import React from "react";
import AvatarNavbar from "./AvatarNavbar";
import { ModeToggle } from "./DarkModeToggle";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center  justify-between ">
      <SidebarTrigger />
      <div className="flex gap-3 items-center ">
        <Link href={"/"}>Dashboard</Link>
        <ModeToggle />
        <AvatarNavbar />
      </div>
    </div>
  );
};

export default Navbar;
