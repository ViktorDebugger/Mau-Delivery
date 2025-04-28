"use client";

import Image from "next/image";
import { MoonLoader } from "react-spinners";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import type { ReviewDishType } from "@/types/dish.types";
import type { ReviewRestaurantType } from "@/types/restaurant.types";
import { getDishReviews, getRestaurantReviews } from "@/db/Reviews";
import { userIcon } from "@/types/user.types";
import { getUserAvatar } from "@/db/User";
import "swiper/css";

interface ReviewsSliderProps {
  dishId?: string;
  restaurantId?: string;
}

const ReviewsSlider = ({ dishId, restaurantId }: ReviewsSliderProps) => {
  const swiperRef = useRef<SwiperType>(null);
  const [reviews, setReviews] = useState<
    ReviewDishType[] | ReviewRestaurantType[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setNotFound(false);

      try {
        let fetchedReviews:ReviewDishType[] | ReviewRestaurantType[] = [];
        if (dishId) {
          fetchedReviews = await getDishReviews(dishId);
        } else if (restaurantId) {
          fetchedReviews = await getRestaurantReviews(restaurantId);
        }
        if (fetchedReviews.length === 0) {
          setNotFound(true);
          return;
        }

        const reviewsWithAvatars = await Promise.all(
          fetchedReviews.map(async (review) => {
            const avatar = await getUserAvatar(review.userId);
            return {
              ...review,
              avatar: avatar || userIcon,
          }   })
        ) as ReviewDishType[] | ReviewRestaurantType[];

        setReviews(reviewsWithAvatars);

      } catch (error) {
        console.error("Error fetching reviews:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [dishId, restaurantId]);

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <MoonLoader color="#F2680F" loading={loading} size={100} />
        </div>
      ) : notFound ? (
        <div className="flex w-full items-center justify-center">
          <div className="mt-6 flex h-40 w-1/2 items-center justify-center rounded-2xl bg-[#F6DA9E] text-3xl">
            Reviews not found
          </div>
        </div>
      ) : (
        <div className="relative mx-auto w-full max-w-3xl px-4 md:px-16">
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
            loop={true}
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
                      <div className="relative h-10 w-10 md:h-20 md:w-20">
                        <Image
                          src={`${review.avatar ? review.avatar : userIcon}`}
                          alt="User Avatar"
                          fill
                          sizes="80px"
                          className="rounded-full object-fill"
                        />
                      </div>
                      <h3 className="text-lg font-bold sm:text-xl md:text-3xl">
                        {review.username}
                      </h3>
                    </div>

                    <div className="flex">
                      <ul className="flex gap-1 rounded-4xl bg-[#FFFFFF] px-2">
                        {[...Array(5)].map((_, index) => (
                          <li
                            key={index}
                            className={`text-2xl ${
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

export default ReviewsSlider;
