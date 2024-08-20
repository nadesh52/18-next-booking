"use client";

import HomeMenu from "@/components/HomeMenu";
import Landing from "@/components/Landing";
import React from "react";
import Login from "../(auth-layout)/login/page";

const Home = () => {
  return (
    <article className="px-5">
      {/* no login */}
      {/* <HomeMenu /> */}
      {/* if login */}
      <Landing />
    </article>
  );
};

export default Home;
