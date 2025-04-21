"use client";

import Image from "next/image";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

import type { Review } from "@/types/dish.types";

import "swiper/css";

interface ReviewsSliderProps {
  reviews: Review[];
}

export default function ReviewsSlider({ reviews }: ReviewsSliderProps) {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <div className="relative mx-auto w-full max-w-3xl px-4 md:px-16">
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
              <div className="mb-4 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {review.avatar && (
                    <div className="h-12 w-12 md:h-20 md:w-20">
                      <Image
                      src={review.avatar}
                      alt={review.username}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    </div>
                  )}
                  <h3 className="text-lg sm:text-xl md:text-3xl font-bold">{review.username}</h3>
                </div>

                <div className="flex">
                  <ul className="flex gap-1 rounded-4xl bg-[#FFFFFF] px-2">
                    {[...Array(5)].map((_, index) => (
                      <li
                        key={index}
                        className={`text-2xl ${
                          index < Math.floor(review.rating)
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
  );
}
