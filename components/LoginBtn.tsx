"use client";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LoginBtn = () => {
  return (
    <button>
      <div className="relative py-3 px-40 bg-primary text-white flex justify-center items-center gap-4 rounded-xl">
        <div className="absolute top-3 left-5">
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
        </div>
        <p className="text-xl">Log in with Facebook</p>
      </div>
    </button>
  );
};

export default LoginBtn;
