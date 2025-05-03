"use client";

import Image from "next/image";
import { MoonLoader } from "react-spinners";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import type { ReviewDishType } from "@/types/dish.types";
import type { ReviewRestaurantType } from "@/types/restaurant.types";
import { getUserReviews } from "@/db/Reviews";
import "swiper/css";

interface UserReviewsSliderProps {
  userId: string;
}

const UserReviewsSlider = ({ userId }: UserReviewsSliderProps) => {
  const swiperRef = useRef<SwiperType>(null);
  const [reviews, setReviews] = useState<
    (ReviewDishType | ReviewRestaurantType)[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setNotFound(false);

      try {
        const userReviews = await getUserReviews(userId);
        if (userReviews.length === 0) setNotFound(true);
        setReviews(userReviews);
      } catch (error) {
        console.error("Error fetching user reviews:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [userId]);

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <MoonLoader color="#F2680F" loading={loading} size={100} />
        </div>
      ) : notFound ? (
        <div className="flex w-full items-center justify-center">
          <div className="mt-6 flex h-40 w-8/10 md:w-4/10 items-center justify-center rounded-2xl bg-[#F6DA9E] text-3xl">
            Reviews not found
          </div>
        </div>
      ) : (
        <div className="relative mx-auto w-8/10 lg:w-full max-w-3xl px-4 md:px-16">
          {reviews.length > 1 && (
            <>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-1/2 -left-10 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#FAB735] transition-colors duration-300 hover:bg-[#F2A30F] md:h-12 md:w-12"
              >
                <ChevronLeft className="h-8 w-8 stroke-[3]" />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute top-1/2 right-[-40px] flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#FAB735] transition-colors duration-300 hover:bg-[#F2A30F] md:h-12 md:w-12"
              >
                <ChevronRight className="h-8 w-8 stroke-[3]" />
              </button>
            </>
          )}

          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={reviews.length > 1}
            spaceBetween={20}
            slidesPerView={1}
            speed={200}
            className="py-8"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="h-auto rounded-4xl bg-[#FAB735] p-6 shadow-md">
                  <div className="mb-4 flex flex-col items-start justify-between gap-4 xl:flex-row xl:items-center">
                    <div className="flex items-center gap-4">
                      {review.avatar && (
                        <figure className="h-12 w-12 md:h-20 md:w-20">
                          <Image
                            src={review.avatar}
                            alt={review.username}
                            width={80}
                            height={80}
                            className="rounded-full"
                          />
                        </figure>
                      )}
                      <h3 className="text-lg font-bold sm:text-xl md:text-3xl">
                        {review.type === "dish"
                          ? `Dish - ${review.dishName}`
                          : `Restaurant - ${review.restaurantName}`}
                      </h3>
                    </div>

                    <div className="flex">
                      <ul className="flex gap-1 rounded-4xl bg-[#FFFFFF] px-1 md:px-2">
                        {[...Array(5)].map((_, index) => (
                          <li
                            key={index}
                            className={`text-lg md:text-2xl ${
                              index < Math.floor(review.stars)
                                ? "text-[#FAB735]"
                                : "text-[#D1D5DB]"
                            }`}
                          >
                            ★
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="tex-sm leading-[1] sm:text-lg md:text-xl">
                    {review.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default UserReviewsSlider;
