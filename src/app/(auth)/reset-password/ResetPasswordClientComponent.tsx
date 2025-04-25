"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Quotes from "@/components/Decorations/Quotes";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { MoonLoader } from "react-spinners";

const ResetPasswordClientComponent = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    try {
      setLoading(true);

      await resetPassword(email);
      toast.success("Password reset email sent!", {
        className: "toast-success",
        icon: false,
      });
      router.push("/sign-in");
    } catch (error) {
      toast.error("Failed to send password reset email!", {
        className: "toast-error",
        icon: false,
      });
      console.error("Failed to send password reset email:", error);
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
          <main className="flex min-h-full items-center justify-center p-4">
            <div
              className="max-w-[700px] rounded-4xl bg-[#FAB735] px-2 py-10 md:px-20"
              data-aos="flip-left"
            >
              <Link
                href="/sign-in"
                className="absolute top-4 left-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-4xl bg-[#F2680F] transition-colors duration-300 ease-in-out hover:bg-[#F2570F]"
              >
                <ArrowLeft />
              </Link>
              <h1 className="font-karantina mt-2 text-center text-6xl md:mt-0 md:text-8xl">
                Reset Password
              </h1>
              <div className="flex justify-center">
                <div className="mt-4 flex w-full flex-col items-center gap-2 text-3xl">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-9/10 rounded-full bg-[#F2680F] px-4 pt-2 pb-3 focus:outline-none"
                  />
                  <button
                    onClick={handleResetPassword}
                    className="mt-4 w-3/4 cursor-pointer rounded-full bg-[#F2680F] pt-2 pb-4 text-3xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default ResetPasswordClientComponent;
