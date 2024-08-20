"use client";

import { faHeart as heartNorm } from "@fortawesome/free-regular-svg-icons";
import {
  faHouse,
  faHouseUser,
  faMagnifyingGlass,
  faHeart as heartFill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BottomBar = () => {
  const pathName = usePathname();

  const homeBtn = () => {
    if (pathName === "/") {
      return (
        <button className="w-full text-center hover:shadow hover:rounded-md hover:text-primary py-2">
          <div>
            <FontAwesomeIcon icon={heartFill} size="xl" />
          </div>
          <p className="text-sm p-1">home</p>
        </button>
      );
    } else {
      return (
        <button className="w-full text-center text-gray hover:shadow hover:rounded-md hover:text-primary py-2">
          <div>
            <FontAwesomeIcon icon={heartNorm} size="xl" />
          </div>
          <p className="text-sm p-1">home</p>
        </button>
      );
    }
    return;
  };

  return (
    <nav>
      <ul className="grid grid-cols-3 place-items-center p-2">
        <li className="w-full">
          <Link href="/">
            {pathName === "/" ? (
              <button className="w-full text-center hover:shadow hover:rounded-md hover:text-primary py-2">
                <div>
                  <FontAwesomeIcon icon={faHouseUser} size="xl" />
                </div>
                <p className="text-sm p-1">home</p>
              </button>
            ) : (
              <button className="w-full text-center text-gray hover:shadow hover:rounded-md hover:text-primary py-2">
                <div>
                  <FontAwesomeIcon icon={faHouse} size="xl" />
                </div>
                <p className="text-sm p-1">home</p>
              </button>
            )}
          </Link>
        </li>

        <li className="w-full">
          <Link href="/search">
            <button
              className={`w-full text-center hover:shadow hover:rounded-md hover:text-primary py-2 ${
                pathName !== "/search" ? "text-gray" : ""
              }`}
            >
              <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
              </div>
              <p className="text-sm p-1">search</p>
            </button>
          </Link>
        </li>

        <li className="w-full">
          <Link href="/favorite">
            {pathName === "/favorite" ? (
              <button className="w-full text-center hover:shadow hover:rounded-md hover:text-primary py-2">
                <div>
                  <FontAwesomeIcon icon={heartFill} size="xl" />
                </div>
                <p className="text-sm p-1">favorite</p>
              </button>
            ) : (
              <button className="w-full text-center text-gray hover:shadow hover:rounded-md hover:text-primary py-2">
                <div>
                  <FontAwesomeIcon icon={heartNorm} size="xl" />
                </div>
                <p className="text-sm p-1">favorite</p>
              </button>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomBar;
