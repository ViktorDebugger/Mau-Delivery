"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { MoonLoader } from "react-spinners";
import Quotes from "@/components/Decorations/Quotes";
import HorizontalTrace from "@/components/Decorations/HorizontalTrace";
import Order from "@/components/Other/Order";
import bgItem from "../../../../../public/images/bg-items/bg-item-7.png";
import { userIcon, type UserData } from "@/types/user.types";
import { getUserData } from "@/db/User";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { getUserOrders } from "@/db/Order";
import UserReviewsSlider from "@/components/Other/UserReviewsSlider";
import { OrderType } from "@/types/cart.types";

const Profile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userOrders, setUserOrders] = useState<OrderType[]>([]);
  const params = useParams();
  const { id } = params;
  const { user, logout } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const fetchedUserData = await getUserData(id as string);
      setUserData(fetchedUserData);

      if (fetchedUserData) {
        const fetchedOrders = await getUserOrders(id as string);
        setUserOrders(fetchedOrders);
      }

      setLoading(false);
    };

    fetchUserData();
    setNotFound(!!userData);
  }, [id]);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      toast.success("Logout successfully!", {
        className: "toast-success custom-toast",
        hideProgressBar: true,
        autoClose: 3000,
        closeOnClick: true,
        icon: false,
        position: "top-center",
      });
      router.replace("/");
    } catch (error) {
      toast.error("Error logging out!", {
        className: "toast-error",
        icon: false,
      });
      console.error("Error logging out: ", error);
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
      ) : notFound ? (
        <div className="mt-6 flex h-9/10 items-center justify-center rounded-2xl bg-[#F6DA9E] text-3xl">
          User not found
        </div>
      ) : (
        <section className="mx-auto mt-30 max-w-[1370px] px-2 lg:mt-52">
          <Image
            src={bgItem}
            width={300}
            height={500}
            alt="bg"
            className="absolute top-0 left-0 hidden lg:block"
            data-aos="fade-right"
          />
          <div className="flex w-full flex-col items-center justify-between lg:flex-row lg:items-start">
            <div
              className="relative mt-4 flex h-56 w-56 lg:mt-0"
              data-aos="fade-right"
            >
              <div className="absolute top-0 right-0">
                <Quotes />
              </div>
              <div className="relative h-56 w-56 rounded-[55px] border-4 border-[#F2680F] bg-[#D1D5DB]">
                <Image
                  src={userData?.avatar ? userData?.avatar : userIcon}
                  alt="User Profile"
                  fill
                  sizes="230px"
                  className="rounded-[50px] object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 rotate-[180deg]">
                <Quotes />
              </div>
            </div>
            <div className="mt-4 w-full lg:-mt-12 lg:w-3/4">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <h1
                  className="font-karantina my-8 text-center text-4xl sm:text-6xl md:mt-0 md:text-8xl"
                  data-aos="fade-up"
                >
                  {userData!.firstName} {userData!.lastName}
                </h1>
                <div
                  className="w-full text-xl md:text-3xl xl:w-6/10"
                  data-aos="fade-right"
                >
                  <div className="flex flex-col gap-2 rounded-4xl bg-[#FAB735] p-4">
                    <div className="flex rounded-2xl bg-[#FBE7BB] px-2">
                      <p className="w-3/10">Phone:</p>
                      <p className="w-7/10 font-bold">{userData!.phone}</p>
                    </div>
                    <div className="flex rounded-2xl bg-[#FBE7BB] px-2">
                      <p className="w-3/10">Address:</p>
                      <p className="w-7/10 font-bold">{userData!.address}</p>
                    </div>
                    <div className="flex rounded-2xl bg-[#FBE7BB] px-2">
                      <p className="w-3/10">Email:</p>
                      <p className="w-7/10 font-bold">{userData!.email}</p>
                    </div>
                    <div className="flex rounded-2xl bg-[#FBE7BB] px-2 pb-3">
                      <p className="w-3/10">Allergens:</p>
                      <ul className="mt-4 flex w-7/10 flex-wrap gap-2 leading-[0.5] font-bold">
                        {userData!.allergens.map((allergen, index) => (
                          <li key={index}>
                            <span>
                              {allergen}
                              {index < userData!.allergens.length - 1
                                ? ","
                                : ""}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-4" data-aos="fade-right">
                    <Link
                      href={`/edit/${id}`}
                      className="w-1/2 cursor-pointer rounded-4xl bg-[#FAB735] px-4 py-2 text-center transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/change-password/${id}`}
                      className="w-1/2 cursor-pointer rounded-4xl bg-[#FAB735] px-4 py-2 text-center transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
                    >
                      Change Password
                    </Link>
                  </div>
                  <div
                    className="mt-4 flex justify-center"
                    data-aos="fade-right"
                  >
                    <button
                      onClick={handleLogout}
                      type="button"
                      className="w-1/2 cursor-pointer rounded-4xl bg-[#FAB735] px-4 py-2 text-center transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {user && (
            <div className="mt-20 flex justify-center" data-aos="fade-up">
              <UserReviewsSlider userId={user.uid} />
            </div>
          )}

          <HorizontalTrace />

          <h1
            className="font-karantina mt-40 text-center text-8xl"
            data-aos="fade-up"
          >
            Orders
          </h1>
          {userOrders.length > 0 ? (
            <ul className="my-8 flex flex-col gap-8">
              {userOrders
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime(),
                )
                .map((order) => (
                  <Order key={order.orderId} order={order} />
                ))}
            </ul>
          ) : (
            <div className="flex h-60 w-full items-center justify-center text-4xl">
              Orders not found
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Profile;
