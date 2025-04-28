"use client";

import Link from "next/link";
import Image from "next/image";
import type { DishType } from "@/types/dish.types";
import { useState, useEffect } from "react";
import { getDishReviews } from "@/db/Reviews";
import type { ReviewDishType } from "@/types/dish.types";
import { formatDistanceToNow } from "date-fns";

interface CardDishTopProps {
  dish: DishType;
}

const CardDishTop = ({ dish }: CardDishTopProps) => {
  const [reviews, setReviews] = useState<ReviewDishType[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const dishReviews = await getDishReviews(dish.id);
        setReviews(dishReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [dish.id]);

  return (
    <li className="relative z-1 w-74 cursor-pointer rounded-4xl bg-[#F2680F] px-4 py-4 transition-colors duration-300 ease-in-out hover:bg-[#F2570F]">
      <Link href={`/dish/${dish.id}`}>
        <div className="flex justify-center">
          <div className="relative h-48 w-64">
            <Image
              className="rounded-4xl object-cover"
              src={dish.image}
              alt="dish"
              fill
              sizes="250px"
            />
          </div>
        </div>

        <h1 className="line-clamp-1 text-4xl font-bold">{dish.name}</h1>
        <p className="line-clamp-1 text-2xl">{dish.restaurant}</p>
        <div className="flex justify-end">
          <p className="rounded-4xl bg-[#FAB735]/40 px-4 text-2xl leading-[1.3] font-bold">
            {dish.price} UAN
          </p>
        </div>
        <ul className="mt-4 flex flex-col gap-2">
          {reviews.length ? (
            reviews.slice(0, 1).map((review, index) => (
              <li
                key={index}
                className="relative rounded-4xl bg-[#FAB735] px-4 py-1"
              >
                <ul className="text-md absolute top-2 right-2 flex gap-1 rounded-4xl bg-[#FFFFFF] px-2">
                  {[...Array(5)].map((_, index) => (
                    <li key={index} className="text-[#FAB735]">
                      ★
                    </li>
                  ))}
                </ul>
                <h1 className="line-clamp-1 text-2xl font-bold">
                  {review.username}
                </h1>
                <p className="line-clamp-1 text-xl">{review.text}</p>
                <p className="-mt-1 text-right">
                  {formatDistanceToNow(new Date(review.timestamp), {
                    addSuffix: true,
                  })}
                </p>
              </li>
            ))
          ) : (
            <p className="rounded-4xl bg-[#DB4803] py-7 text-center text-2xl">
              Reviews not found
            </p>
          )}
        </ul>
      </Link>
    </li>
  );
};

export default CardDishTop;
