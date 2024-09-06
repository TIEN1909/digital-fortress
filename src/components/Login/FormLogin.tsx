import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { IoIosLock } from "react-icons/io";
import Link from "next/link";

const FormLogin = () => {
  return (
    <form className="mt-16">
      <div className="flex items-center gap-3 px-4 h-[48px] bg-neutral-30 rounded-xl">
        <span>
          <TfiEmail className="text-neutral-40 text-xl" />
        </span>
        <input
          type="text"
          placeholder="Email"
          className="w-full bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center gap-3 px-4 h-[48px] bg-neutral-30 rounded-xl mt-6">
        <span>
          <IoIosLock className="text-neutral-40 text-2xl" />
        </span>
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-transparent outline-none"
        />
      </div>

      <div className="flex items-center justify-between mt-12">
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="ml-2 text-neutral-40">
            Remember me
          </label>
        </div>
        <Link href="forgot-password" className="text-gradient">
          Forgot password?
        </Link>
      </div>

      <Link
        href="/dashboard"
        className="flex justify-center flex-col items-center w-full bg-primary h-12 rounded-xl text-black mt-12 font-semibold"
      >
        Login
      </Link>
    </form>
  );
};

export default FormLogin;
