"use client";

import React from "react";
import logo from "@/public/assets/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header
      className={`sticky top-0 z-[999] h-[35px] md:h-[70px] w-full bg-white py-0 transition-all `}
    >
      <div
        className={`absolute left-4 top-1/2 h-fit w-fit -translate-y-1/2 translate-x-0 transition-all`}
      >
        <Link href="/">
          <Image src={logo} width={72} height={40} alt="logo" className="h-[20px] w-[36px] md:h-[40px] md:w-[72px]" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
