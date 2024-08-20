"use client";

import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import Title from "./Title";
import TransactionCard from "./TransactionCard";

const Landing = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [desc, setDesc] = useState("Hello, World!");

  const handleSave = () => {
    setIsEdit(false);
  };
  return (
    <article>
      <section className="flex flex-col items-center">
        <div className="relative w-full">
          <div className="absolute top-0 h-[100px] md:h-[120px] w-full -z-50 bg-base pointer-events-none"></div>
        </div>
        <div className="border-4 border-white rounded-2xl max-w-[150px] max-h-[150px] md:max-w-[200px] md:max-h-[200px] overflow-hidden bg-cover mt-5">
          <Image
            src="https://placehold.co/200.jpg"
            alt="profile"
            width={200}
            height={200}
          />
        </div>

        <div className="w-full mt-5">
          <div className="flex justify-between">
            <div className="my-3">
              <p className="text-xl font-medium">USERNAME</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-xl font-medium">30</p>
              <FontAwesomeIcon
                icon={faHeart}
                size="xl"
                className="text-accent"
              />
            </div>
          </div>

          <div className="group my-3">
            {isEdit === false ? (
              <span>{desc}</span>
            ) : (
              <label>
                <textarea
                  className="bg-base h-40 w-full p-3 rounded-xl"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </label>
            )}

            <div className="flex justify-end items-center gap-2 mt-2 text-gray group-hover:text-primary">
              {isEdit === false ? (
                <button
                  className="border group-hover:border-primary w-fit px-2 rounded-full"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="sm" />
                  <span className="ml-2 text-sm">Edit</span>
                </button>
              ) : (
                <>
                  <div>
                    <button
                      className="bg-success-primary text-white w-fit px-3 py-1 rounded-full"
                      onClick={handleSave}
                    >
                      save
                    </button>
                  </div>
                  <div>
                    <button
                      className="bg-error text-white w-fit px-3 py-1 rounded-full"
                      onClick={() => setIsEdit(false)}
                    >
                      cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        <Title>Transactions</Title>
        <div className="mt-5">
          <TransactionCard />
        </div>
      </section>
    </article>
  );
};

export default Landing;
