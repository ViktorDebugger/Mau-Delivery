import Link from "next/link";
import Image from "next/image";

import Quotes from "@/components/Decorations/Quotes";
import ReviewsSlider from "@/components/Other/ReviewsSlider";
import HorizontalTrace from "@/components/Decorations/HorizontalTrace";
import Order from "@/components/Other/Order";
import bgItem from "../../../../public/images/bg-items/bg-item-7.png";
import userData from "../../../../public/userData";

export const metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
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
        <div className="relative mt-4 lg:mt-0 flex h-56 w-56" data-aos="fade-right">
          <div className="absolute top-0 right-0">
            <Quotes />
          </div>
          <div className="relative h-56 w-56 rounded-[50px] border-4 border-[#F2680F]">
            <Image
              src={userData.profileImage}
              alt="User Profile"
              fill
              sizes="230px"
              className="object-cover opacity-70"
            />
          </div>
          <div className="absolute bottom-0 left-0 rotate-[180deg]">
            <Quotes />
          </div>
        </div>
        <div className="mt-4 w-full lg:-mt-12 lg:w-3/4">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <h1 className="font-karantina my-8 text-4xl sm:text-6xl md:mt-0 md:text-8xl text-center" data-aos="fade-up">
              {userData.firstname} {userData.lastname}
            </h1>
            <div className="w-full text-xl md:text-3xl xl:w-6/10" data-aos="fade-right">
              <div className="flex flex-col gap-2 rounded-4xl bg-[#FAB735] p-4">
                <div className="flex rounded-2xl bg-[#FBE7BB] px-2">
                  <p className="w-3/10">Phone:</p>
                  <p className="w-7/10 font-bold">{userData.phone}</p>
                </div>
                <div className="flex rounded-2xl bg-[#FBE7BB] px-2">
                  <p className="w-3/10">Address:</p>
                  <p className="w-7/10 font-bold">{userData.address}</p>
                </div>
                <div className="flex rounded-2xl bg-[#FBE7BB] px-2">
                  <p className="w-3/10">Email:</p>
                  <p className="w-7/10 font-bold">{userData.email}</p>
                </div>
                <div className="flex rounded-2xl bg-[#FBE7BB] px-2 pb-3">
                  <p className="w-3/10">Allergens:</p>
                  <ul className="mt-4 flex w-7/10 flex-wrap gap-2 leading-[0.5] font-bold">
                    {userData.allergens.map((allergen, index) => (
                      <li key={index}>
                        <span>
                          {allergen}
                          {index < userData.allergens.length - 1 ? "," : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex gap-4" data-aos="fade-right">
                <Link
                  href="/sign-up"
                  className="w-1/2 cursor-pointer rounded-4xl bg-[#FAB735] px-4 py-2 text-center transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
                >
                  Edit
                </Link>
                <Link
                  href="/"
                  className="w-1/2 cursor-pointer rounded-4xl bg-[#FAB735] px-4 py-2 text-center transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center" data-aos="fade-up">
        <div className="mt-10 max-w-2/3">
          <ReviewsSlider reviews={userData.reviews} />
        </div>
      </div>

      <HorizontalTrace />

      <h1 className="font-karantina mt-10 text-center text-8xl relative z-20" data-aos="fade-up">Orders</h1>

      <ul className="my-8 flex flex-col gap-8">
        {userData.orders.map((order) => (
          <Order key={order.orderId} order={order} />
        ))}
      </ul>
    </section>
  );
}
