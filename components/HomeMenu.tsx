import Image from "next/image";
import React from "react";
import logo from "@/public/assets/svg/logo.svg";
import LoginBtn from "./LoginBtn";

const HomeMenu = () => {
  return (
    <article className="h-[calc(100dvh-153px)] flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <p className="text-sm">You are not log in</p>
        <p className="text-lg font-medium">Login to get your trade passcode</p>
      </div>
      <div>
        <LoginBtn />
      </div>
    </article>
  );
};

export default HomeMenu;
