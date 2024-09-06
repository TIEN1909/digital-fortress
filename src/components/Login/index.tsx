import React from "react";
import FormLogin from "./FormLogin";
import Image from "next/image";
import Illustration from "../../../public/assets/Illustration.png";

const Login = () => {
  return (
    <div className="mx-auto w-full h-screen flex items-center justify-between ">
      <div className="px-[112px] w-1/2">
        <h1 className="text-4xl font-normal">
          Hello, <span className="text-gradient font-medium">Digital Fortress</span>
        </h1>
        <p className="text-[18px] text-neutral-20 mt-6">
          Log in to platform to start creating magic.
        </p>
        <FormLogin />
      </div>
      <div className="w-1/2 h-full">
        <Image
          src={Illustration}
          alt="login-image"
          width={550}
          height={1024}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Login;
