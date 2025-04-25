"use client";

import React, { useState, useRef } from "react";
import { saveUserData } from "@/db/User";
import { toast } from "react-toastify";
import type { User1 } from "@/types/user.types";
import { Plus, Minus } from "lucide-react";
import { uploadUserImageToCloudinary } from "@/db/Cloundinary";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { MoonLoader } from "react-spinners";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Quotes from "@/components/Decorations/Quotes";

const SignUpClient = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [allergensInput, setAllergensInput] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { register } = useAuth();
  const router = useRouter();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);

      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setBackgroundImage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        className: "toast-error",
        icon: false,
      });
      return;
    }

    setLoading(true);

    try {
      const userCredential = await register(email, password);
      const user = userCredential.user;

      const allergensArray = allergensInput
        .split(",")
        .map((allergen) => allergen.trim());
      const userData: User1 = {
        firstName,
        lastName,
        email,
        address,
        phone,
        allergens: allergensArray,
      };

      try {
        if (image) {
          const imageUrl = await uploadUserImageToCloudinary(image);
          userData.avatar = imageUrl;
        }
        await saveUserData(user.uid, userData);
      } catch (error) {
        toast.error("Failed to upload image!", {
          className: "toast-error",
          icon: false,
        });
        console.error("Failed to upload image:", error);
      }
      toast.success("User registered and data saved!", {
        className: "toast-success",
        icon: false,
      });
      console.log("User registered and data saved!");
      router.push(`/profile/${user.uid}`);
    } catch (error) {
      toast.error("Error registering user!", {
        className: "toast-error",
        icon: false,
      });
      console.error("Error registering user: ", error);
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
        <div className={`relative ${loading ? "hidden" : ""} mt-100 sm:mt-0`}>
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
          <main className="flex h-full items-center justify-center py-2">
            <div
              className="w-86 rounded-4xl bg-[#FAB735] px-4 py-5 sm:w-full md:px-10"
              data-aos="flip-left"
            >
              <Link
                href="/"
                className="absolute top-4 left-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-4xl bg-[#F2680F] transition duration-300 ease-in-out hover:bg-[#F2570F]"
              >
                <ArrowLeft />
              </Link>
              <h1 className="font-karantina mt-8 text-center text-6xl leading-[0.7] sm:mt-0 md:text-8xl">
                Sign Up
              </h1>
              <form
                onSubmit={handleSubmit}
                className="mt-4 flex flex-col text-xl"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col">
                    <div>
                      <p className="ml-4">First name</p>
                      <input
                        className="w-full rounded-4xl bg-[#F2680F] px-4 py-2 leading-[0.9] focus:outline-none"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="ml-4">Last name</p>
                      <input
                        className="w-full rounded-4xl bg-[#F2680F] px-4 py-2 leading-[0.9] focus:outline-none"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="ml-4">E-mail</p>
                      <input
                        className="w-full rounded-4xl bg-[#F2680F] px-4 py-2 leading-[0.9] focus:outline-none"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="ml-4">Password</p>
                      <input
                        className="w-full rounded-4xl bg-[#F2680F] px-4 py-2 leading-[0.9] focus:outline-none"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="ml-4">Confirm Password</p>
                      <input
                        className="w-full rounded-4xl bg-[#F2680F] px-4 py-2 leading-[0.9] focus:outline-none"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <p className="ml-4">Address</p>
                      <input
                        className="w-full rounded-4xl bg-[#F2680F] px-4 py-2 leading-[0.9] focus:outline-none"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="ml-4">Phone</p>
                      <input
                        className="w-full rounded-4xl bg-[#F2680F] px-4 py-2 leading-[0.9] focus:outline-none"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="ml-4">Allergies (comma separated)</p>
                      <input
                        className="w-full rounded-4xl bg-[#F2680F] px-4 py-2 leading-[0.9] focus:outline-none"
                        type="text"
                        value={allergensInput}
                        onChange={(e) => setAllergensInput(e.target.value)}
                      />
                    </div>
                    <div className="relative mt-2 flex w-full flex-grow items-center justify-center">
                      <label
                        className={`text-opacity-10 hover:text-opacity-90 relative h-40 w-40 cursor-pointer rounded-2xl bg-cover bg-center text-black opacity-70 transition-opacity duration-300 ease-in-out hover:opacity-90 focus:outline-none`}
                        style={{
                          backgroundImage: `url(${backgroundImage || "/images/icons/user.png"})`,
                        }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          ref={fileInputRef}
                        />
                        {!backgroundImage && (
                          <div className="pointer-events-none absolute top-15 left-16 z-10 cursor-pointer rounded-full bg-[#374151]/50 p-1 transition-colors hover:bg-[#374151]/70">
                            <Plus size={24} color="#000000" />
                          </div>
                        )}
                      </label>
                      {backgroundImage && (
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="absolute top-15 z-10 cursor-pointer rounded-full bg-[#374151]/50 p-1 transition-colors duration-300 ease-in-out hover:bg-[#374151]/70"
                        >
                          <Minus size={24} color="#9CA3AF" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    type="submit"
                    className="w-1/2 cursor-pointer rounded-full bg-[#F2680F] pb-2 text-3xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F]"
                  >
                    Submit
                  </button>
                </div>
                <div className="flex justify-center gap-4 text-2xl">
                  <span>Already have an account?</span>
                  <Link href={"/sign-in"} className="font-bold underline">
                    Sign In
                  </Link>
                </div>
              </form>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default SignUpClient;
