"use client";

import Image from "next/image";
import React, { useState } from "react";
import Title from "./Title";
import TransactionCard from "./TransactionCard";
import { HeartIcon } from "@heroicons/react/24/outline";

const Landing = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [desc, setDesc] = useState("Image by freepik");

  const handleSave = () => {
    setIsEdit(false);
  };
  return (
    <article className="bg-blue-200 pb-">
      <div className="2xs:items-center 2xs:px-0 flex flex-col items-start px-4">
        <div className="relative w-full">
          <div className="2xs:block pointer-events-none absolute top-0 -z-40 hidden h-[100px] w-full bg-base md:h-[120px]"></div>
        </div>
        <div className="border-slate-400 2xs:max-h-[170px] 2xs:max-w-[170px] my-8 max-h-[120px] max-w-[120px] overflow-hidden rounded-xl border bg-cover">
          <Image
            src="/assets/logos/shoplogo.jpg"
            alt="shop"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div>
        <div className="2xs:mx-12 mx-4 mb-8 max-h-fit rounded-xl bg-white p-4">
          <div className="flex justify-between">
            <div>
              <p className="text-xl font-medium">USERNAME</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-xl font-medium">30</p>
              <HeartIcon className="size-6" />
            </div>
          </div>

          <div className="group my-3">
            {isEdit === false ? (
              <div className="flex items-center justify-between">
                <p>{desc}</p>
                <button
                  className="w-fit rounded border p-2 text-gray group-hover:border-primary"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  Edit
                </button>
              </div>
            ) : (
              <>
                <label>
                  <textarea
                    className="bg-blue-100 caret-blue-600 focus-visible:ring-blue-400 h-40 w-full rounded-xl p-3 outline-none focus-visible:ring-2"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </label>
                <div className="mt-2 flex items-center justify-end gap-4">
                  <button
                    className="bg-red-300 hover:bg-red-600 w-fit rounded-md px-4 py-2 text-white"
                    onClick={() => setIsEdit(false)}
                  >
                    cancel
                  </button>
                  <button
                    className="bg-emerald-400 w-fit rounded-md px-4 py-2 text-white"
                    onClick={handleSave}
                  >
                    save
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="rounded-t-3xl bg-white p-4">
          <Title>Transactions</Title>
          <div className="mt-5">
            <TransactionCard />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Landing;
