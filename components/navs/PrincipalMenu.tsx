import React from "react";
import { Links } from "./Links";
import { principalLinks } from "@/data/common";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "../ui/Logo";

export const PrincipalMenu = () => {
  return (
    <header className="flex h-[70px] justify-between items-center w-full px-3 lg:px-10 py-3 lg:py-5 absolute z-50 ">
      <header className="flex items-center gap-1 ml-1 lg:ml-10">
        <Logo />
      </header>
      <nav className="flex gap-4 lg:gap-10 text-sm">
        <Links links={principalLinks} />
        <MobileMenu links={principalLinks} />
      </nav>
    </header>
  );
};
