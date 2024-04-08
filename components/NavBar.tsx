"use client";

import Image from "next/image";
import ActiveUsers from "./users/ActiveUsers";
import { memo } from "react";
import { NavbarProps } from "@/types/type";

const NavBar = ({ activeElement }: NavbarProps) => {
  return (
    <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white">
      <Image src="/assets/logo.svg" alt="FigPro Logo" width={58} height={20} />

      <ActiveUsers />
    </nav>
  );
};

export default memo(
  NavBar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
