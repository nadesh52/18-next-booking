"use client";

import Title from "@/components/Title";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await res.json();
    console.log(jsonData);
    setUsers(jsonData);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <article className="px-5">
      <div className="mt-2">
        <div className="relative">
          <MagnifyingGlassIcon className="pointer-events-none absolute left-2.5 top-1/2 size-6 2xs:size-8 -translate-y-1/2 text-gray" />
          <input
            type="text"
            placeholder="Search..."
            className="h-10 2xs:h-14 w-full rounded-lg px-12 text-2xl font-medium outline-none ring-1 ring-inset ring-gray hover:ring-primary focus:ring-inset focus:ring-primary"
          />
        </div>
      </div>

      <div className="mt-4">
        <Title>Top Credit</Title>
        <div className="w-full overflow-hidden overflow-x-scroll whitespace-nowrap py-4 scrollbar-thin">
          <ul className="flex items-center justify-start gap-4 2xs:gap-8">
            {users.map((user: any, i: any) => (
              <li key={i}>
                <UserCard {...user} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <Title>Users</Title>
        <div className="mt-4 flex flex-col divide-y">
          {users.map((user: any, idx) => (
            <div key={idx} className="flex items-center gap-4 h-20 p-2 w-full hover:bg-slate-100 cursor-pointer">
              <Image
                src="/assets/icons/7.png"
                width={512}
                height={512}
                alt="icon"
                className="h-[50px] w-[50px] rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-medium text-lg">{user.username}</p>
                <p className="text-slate-400">{user.name}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Search;
