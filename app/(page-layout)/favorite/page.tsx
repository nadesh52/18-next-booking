"use client";

import { faHeart as heart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartFill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "@/components/Title";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type UserInit = {
  id: number;
  name: string;
  email: string;
};

const Favorite = () => {
  const [isFav, setIsFav] = useState<any>({});
  const [users, setUsers] = useState<UserInit[]>([]);

  const fetchFav = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await res.json();
    setUsers(jsonData);
  };

  useEffect(() => {
    fetchFav();
  }, []);

  const handleFav = (id: any) => {
    setIsFav({
      ...isFav,
      [id]: !isFav[id],
    });
  };

  return (
    <article className="px-5">
      <div>
        <Title>Following</Title>
      </div>

      <div className="mt-5">
        <ul>
          {users.map((user: UserInit, i) => (
            <li key={i} className="my-5">
              <div className="flex items-start gap-3">
                <div className="min-w-[70px]">
                  <Image
                    src="https://placehold.co/70.jpg"
                    alt="avatar"
                    height={70}
                    width={70}
                    className="rounded-lg"
                  />
                </div>

                <div className="grow">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm line-clamp-1 sm:line-clamp-2">
                    {user.email}
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <button
                    onClick={() => {
                      handleFav(user.id);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={!isFav[user.id] ? heart : heartFill}
                      size="xl"
                      className={`${
                        isFav[user.id] === true ? "text-accent" : ""
                      } hover:scale-125 transition-all`}
                    />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Favorite;
