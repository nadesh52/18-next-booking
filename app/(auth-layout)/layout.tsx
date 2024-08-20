"use client";

import React from "react";
import logo from "@/public/assets/svg/logo.svg";
import Image from "next/image";
import "@/styles/globals.css";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface AuthLayout {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayout) => {
  const router = useRouter();

  return (
    <html lang="en">
      <body className="relative max-w-screen-sm mx-auto px-8 md:px-0">
        <main>
          <article className="h-screen relative flex flex-col justify-evenly items-center">
            <button
              onClick={() => router.back()}
              className="absolute top-10 left-10 rounded-full w-fit py-1 px-2 hover:bg-accent hover:text-white"
            >
              <FontAwesomeIcon icon={faXmark} size="2xl" />
            </button>
            <div>
              <Image src={logo} alt="logo" width={200} />
            </div>
            <>{children}</>
          </article>
        </main>
      </body>
    </html>
  );
};

export default AuthLayout;
