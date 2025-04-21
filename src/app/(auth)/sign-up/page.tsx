import Link from "next/link";
import Image from "next/image";

import { ArrowLeft } from "lucide-react";

import userImage from "./../../../../public/images/icons/user.png";

export const metadata = {
  title: "Sign Up",
};

const SignUp = () => {
  return (
    <main className="flex h-full items-center justify-center py-4" data-aos="fade-down">
      <div className="w-86 sm:w-full rounded-4xl bg-[#FAB735] px-4 md:px-10 py-5">
        <Link
          href="/"
          className="absolute left-4 top-8 flex h-8 w-8 cursor-pointer items-center justify-center rounded-4xl bg-[#F2680F] transition duration-300 ease-in-out hover:bg-[#F2570F]"
        >
          <ArrowLeft />
        </Link>
        <h1 className="font-karantina text-center text-6xl md:text-8xl leading-[0.7] mt-8 sm:mt-0">
          Sign Up
        </h1>
        <div className="mt-4 flex flex-col text-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="flex flex-col">
              <div>
                <p className="ml-4">First name</p>
                <input
                  className="rounded-4xl bg-[#F2680F] w-full px-4 py-2 leading-[0.9] focus:outline-none"
                  type="text"
                />
              </div>
              <div>
                <p className="ml-4">Last name</p>
                <input
                  className="rounded-4xl bg-[#F2680F] w-full px-4 py-2 leading-[0.9] focus:outline-none"
                  type="text"
                />
              </div>
              <div>
                <p className="ml-4">E-mail</p>
                <input
                  className="rounded-4xl bg-[#F2680F] w-full px-4 py-2 leading-[0.9] focus:outline-none"
                  type="text"
                />
              </div>
              <div>
                <p className="ml-4">Password</p>
                <input
                  className="rounded-4xl bg-[#F2680F] w-full px-4 py-2 leading-[0.9] focus:outline-none"
                  type="password"
                />
              </div>
              <div>
                <p className="ml-4">Password</p>
                <input
                  className="rounded-4xl bg-[#F2680F] w-full px-4 py-2 leading-[0.9] focus:outline-none"
                  type="password"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <p className="ml-4">Address</p>
                <input
                  className="rounded-4xl bg-[#F2680F] w-full px-4 py-2 leading-[0.9] focus:outline-none"
                  type="text"
                />
              </div>
              <div>
                <p className="ml-4">Phone</p>
                <input
                  className="rounded-4xl bg-[#F2680F] w-full px-4 py-2 leading-[0.9] focus:outline-none"
                  type="text"
                />
              </div>
              <div>
                <p className="ml-4">Allergies</p>
                <input
                  className="rounded-4xl bg-[#F2680F] w-full px-4 py-2 leading-[0.9] focus:outline-none"
                  type="text"
                />
              </div>
              <div className="mx-auto mt-5 rounded-4xl">
                <Image src={userImage} alt="user" width={150} height={150} />
              </div>
            </div>
          </div>
          <div className="flex mt-4 justify-center">
            <button className="w-1/2 cursor-pointer rounded-full bg-[#F2680F] pb-2 text-3xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F]">
              Submit
            </button>
          </div>
          <div className="mt-2 flex justify-center gap-4 text-2xl">
            <span>Already have an account?</span>
            <Link href={"/sign-in"} className="font-bold underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
