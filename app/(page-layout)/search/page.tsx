"use client";

import Title from "@/components/Title";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

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
      <div className="mt-10">
        <label className="relative">
          {/* <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="xl"
            className="absolute bottom-0 left-2.5 text-gray pointer-events-none"
          /> */}
          <input
            type="text"
            placeholder="search seller"
            className="outline-none rounded-lg h-14 w-full px-12 text-2xl font-medium ring-gray ring-1 ring-inset hover:ring-primary focus:ring-inset focus:ring-primary"
          />
        </label>
      </div>

      <div className="mt-10">
        <Title>Top Credit</Title>
        <div className="py-4 w-full whitespace-nowrap scrollbar-thin overflow-hidden overflow-x-scroll">
          <ul className="flex justify-start items-center gap-4">
            {users.map((user: any, i: any) => (
              <li key={i}>
                <UserCard {...user} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Search;
