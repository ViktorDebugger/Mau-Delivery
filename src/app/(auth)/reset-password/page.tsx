import Link from "next/link";

import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Reset Password",
};

const ResetPassword = () => {
  return (
    <main className="flex h-full items-center justify-center p-4" data-aos="fade-down">
      <div className="max-w-[700px] rounded-4xl bg-[#FAB735] px-2 md:px-20 py-10">
        <Link
          href="/sign-in"
          className="absolute top-8 left-8 flex h-8 w-8 cursor-pointer items-center justify-center rounded-4xl bg-[#F2680F] transition-colors duration-300 ease-in-out hover:bg-[#F2570F]"
        >
          <ArrowLeft />
        </Link>
        <h1 className="font-karantina text-center text-6xl md:text-8xl mt-2 md:mt-0">Reset Password</h1>
        <div className="flex justify-center">
          <div className="mt-4 flex w-3/4 flex-col gap-2 text-3xl">
            <input
              type="text"
              placeholder="Email"
              className="rounded-full bg-[#F2680F] px-4 pt-2 pb-3 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Code"
              className="rounded-full bg-[#F2680F] px-4 pt-2 pb-3 focus:outline-none"
            />
            <button className="mt-4 cursor-pointer rounded-full bg-[#F2680F] pt-2 pb-4 text-3xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
