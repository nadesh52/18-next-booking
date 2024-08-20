"use client";

import React from "react";
import logo from "@/public/assets/svg/logo.svg";
import Image from "next/image";
import NavbarSub from "./NavbarSub";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full z-[999] bg-white">
      <div className="flex justify-center items-center py-6">
        <div className="w-[70px]">
          <Image src={logo} alt="logo" />
        </div>
      </div>
      {/* <NavbarSub /> */}
    </div>
  );
};

export default Navbar;
