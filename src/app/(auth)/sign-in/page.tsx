import Link from "next/link";

import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Sign In",
};

const SignIn = () => {
  return (
    <main className="flex h-full items-center justify-center p-4" data-aos="fade-down">
      <div className="max-w- rounded-4xl bg-[#FAB735] px-4 sm:px-10 py-10">
        <Link
          href="/"
          className="absolute top-8 left-8 flex h-8 w-8 cursor-pointer items-center justify-center rounded-4xl bg-[#F2680F] transition duration-300 ease-in-out hover:bg-[#F2570F]"
        >
          <ArrowLeft />
        </Link>
        <h1 className="font-karantina text-center text-6xl md:text-8xl">Sign In</h1>
        <div className="mt-4 flex w-full flex-col gap-2 text-3xl">
          <input
            type="text"
            placeholder="Email"
            className="rounded-full bg-[#F2680F] px-4 pt-2 pb-3 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-full bg-[#F2680F] px-4 pt-2 pb-3 focus:outline-none"
          />
        </div>
        <div className="mt-4 flex flex-col text-3xl">
          <button className="mt-4 cursor-pointer rounded-full bg-[#F2680F] pt-2 pb-4 text-3xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F]">
            Submit
          </button>
          <div className="mt-4 flex justify-center gap-4 text-2xl">
            <Link href={"/reset-password"} className="font-bold underline">
              Forgot password
            </Link>
          </div>
          <div className="flex justify-center gap-4 text-2xl">
            <span>Don't have an account?</span>
            <Link href={"/sign-up"} className="font-bold underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
