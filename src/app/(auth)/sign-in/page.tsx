import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const SignIn = () => {
  return (
    <main className="flex h-full justify-center items-center p-4">
      <div className="bg-[#FAB735] rounded-4xl px-[180px] pb-[90px] pt-[20px] max-w-[700px] h-[570px]">
        <Link
          href="/account"
          className="absolute left-8 top-8 bg-[#F2680FB2] hover:bg-[#f26a0fdd] transition duration-300 ease-in-out w-8 h-8 rounded-4xl flex justify-center items-center cursor-pointer"
        >
          <ArrowLeft />
        </Link>
        <h1 className="font-karantina text-[100px] text-center">Sign In</h1>
        <div className="mt-[100px] flex flex-col gap-[50px] w-full font-katibeh text-[30px]">
          <input
            type="text"
            placeholder="Email"
            className="bg-[#F2680F] rounded-[50px] focus:outline-none px-4 pt-2 pb-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[#F2680F] rounded-[50px] focus:outline-none px-4 pt-2 pb-3"
          />
        </div>
      </div>
    </main>
  );
};

export default SignIn;
