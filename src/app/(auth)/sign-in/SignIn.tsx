"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Quotes from "@/components/Decorations/Quotes";
import { MoonLoader } from "react-spinners";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);

      const userCredential = await login(email, password);
      const loggedInUser = userCredential.user;

      toast.success("Successfully logged in!", {
        className: "toast-success custom-toast",
        hideProgressBar: true,
        autoClose: 3000,
        closeOnClick: true,
        icon: false,
        position: "top-center",
      });
      router.push(`/profile/${loggedInUser!.uid}`);
    } catch (error) {
      toast.error("Error logging in!", {
        className: "toast-error custom-toast",
        hideProgressBar: true,
        autoClose: 3000,
        closeOnClick: true,
        icon: false,
        position: "top-center",
      });
      console.error("Error logging in: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <MoonLoader color="#F2680F" loading={loading} size={100} />
        </div>
      ) : (
        <div className={`relative ${loading ? "hidden" : ""}`}>
          <div
            className="relative -top-2 right-0 hidden sm:block md:-top-1"
            data-aos="fade-left"
          >
            <Quotes />
          </div>
          <div
            className="absolute -bottom-2 left-0 hidden rotate-[180deg] sm:block md:-top-1"
            data-aos="fade-left"
          >
            <Quotes />
          </div>
          <main className="flex h-full items-center justify-center p-4">
            <div
              className="rounded-4xl bg-[#FAB735] px-4 py-10 sm:px-10"
              data-aos="flip-left"
            >
              <Link
                href="/"
                className="absolute top-4 left-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-4xl bg-[#F2680F] transition duration-300 ease-in-out hover:bg-[#F2570F]"
              >
                <ArrowLeft />
              </Link>
              <h1 className="font-karantina text-center text-6xl md:text-8xl">
                Sign In
              </h1>
              <div className="mt-4 flex w-full flex-col gap-2 text-3xl">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full bg-[#F2680F] px-4 pt-2 pb-3 focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-full bg-[#F2680F] px-4 pt-2 pb-3 focus:outline-none"
                />
              </div>
              <div className="mt-4 flex flex-col text-3xl">
                <button
                  onClick={handleLogin}
                  className="mt-4 cursor-pointer rounded-full bg-[#F2680F] pt-2 pb-4 text-3xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F]"
                >
                  Submit
                </button>
                <div className="mt-4 flex justify-center gap-4 text-2xl">
                  <Link
                    href={"/reset-password"}
                    className="font-bold underline"
                  >
                    Forgot password
                  </Link>
                </div>
                <div className="flex justify-center gap-4 text-2xl">
                  <span>Don&apos;t have an account?</span>
                  <Link href={"/sign-up"} className="font-bold underline">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default SignIn;
