import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
const Login = () => {
  return (
    <main className="flex h-full justify-center items-center p-4">
      <div className="bg-[#FAB735] rounded-4xl px-[60px] py-5 max-w-[700px] h-[570px]">
      <Link href="/account" className="absolute left-8 top-8 bg-[#F2680FB2] hover:bg-[#f26a0fdd] transition duration-300 ease-in-out w-8 h-8 rounded-4xl flex justify-center items-center cursor-pointer">
          <ArrowLeft />
        </Link>
        <h1 className="font-karantina text-[100px] leading-[0.7] text-center">
          Sign Up
        </h1>
        <div className="flex gap-[70px] mt-4 font-katibeh text-[25px]">
          <div className="flex flex-col">
            <div>
              <p className="ml-4">First name</p>
              <input
                className="rounded-4xl bg-[#F2680F] focus:outline-none leading-[0.9] px-4 py-2"
                type="text"
              />
            </div>
            <div>
              <p className="ml-4">Last name</p>
              <input
                className="rounded-4xl bg-[#F2680F] focus:outline-none leading-[0.9] px-4 py-2"
                type="text"
              />
            </div>
            <div>
              <p className="ml-4">E-mail</p>
              <input
                className="rounded-4xl bg-[#F2680F] focus:outline-none leading-[0.9] px-4 py-2"
                type="text"
              />
            </div>
            <div>
              <p className="ml-4">Password</p>
              <input
                className="rounded-4xl bg-[#F2680F] focus:outline-none leading-[0.9] px-4 py-2"
                type="password"
              />
            </div>
            <div>
              <p className="ml-4">Password</p>
              <input
                className="rounded-4xl bg-[#F2680F] focus:outline-none leading-[0.9] px-4 py-2"
                type="password"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="ml-4">Address</p>
              <input
                className="rounded-4xl bg-[#F2680F] focus:outline-none leading-[0.9] px-4 py-2"
                type="text"
              />
            </div>
            <div>
              <p className="ml-4">Phone</p>
              <input
                className="rounded-4xl bg-[#F2680F] focus:outline-none leading-[0.9] px-4 py-2"
                type="text"
              />
            </div>
            <div>
              <p className="ml-4">Allergies</p>
              <input
                className="rounded-4xl bg-[#F2680F] focus:outline-none leading-[0.9] px-4 py-2"
                type="text"
              />
            </div>
            <div className="mx-auto mt-5 rounded-4xl">
              <Image
                src="/images/icons/user.png"
                alt="user"
                width={170}
                height={170}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
