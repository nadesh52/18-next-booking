"use client";

import {
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartFill,
  HomeIcon as HomeFill,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// const menuItem = [
//   {
//     name: 'home',
//     url: '/',
//     icon: <HomeFill className="size-8" />,
//     iconFill: <HomeIcon className="size-8" />
//   },
//   {
//     name: 'search',
//     url: '/search',
//     icon: <MagnifyingGlassIcon
//     className={`size-8 w-full hover:text-primary ${pathName === "/search" ? "stroke-2" : "stroke-1"}`}
//   />
//   },
//   {
//     name: 'favorite',
//     url: '/favorite',
//     icon: <HeartFill className="size-8" />,
//     iconFill: <HeartIcon className="size-8" />
//   },
// ]

const BottomBar = () => {
  const pathName = usePathname();

  return (
    <footer className="sticky bottom-0 bg-white">
      <ul className="flex h-16 w-full items-center justify-between">
        <li className="h-full w-full">
          <Link href="/">
            <div className="flex h-full w-full items-center justify-center">
              {pathName === "/" ? (
                <HomeFill className="size-8" />
              ) : (
                <HomeIcon className="size-8" />
              )}
            </div>
          </Link>
        </li>

        <li className="h-full w-full">
          <Link href="/search">
            <div className="flex h-full w-full items-center justify-center">
              <MagnifyingGlassIcon
                className={`size-8 w-full ${pathName === "/search" ? "stroke-2" : "stroke-1"}`}
              />
            </div>
          </Link>
        </li>

        <li className="h-full w-full">
          <Link href="/favorite">
            <div className="flex h-full w-full items-center justify-center">
              {pathName === "/favorite" ? (
                <HeartFill className="size-8" />
              ) : (
                <HeartIcon className="size-8" />
              )}
            </div>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default BottomBar;
