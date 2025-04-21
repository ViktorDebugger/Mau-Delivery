"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import ReviewsSlider from "@/components/Other/ReviewsSlider";
import HorizontalTrace from "@/components/Decorations/HorizontalTrace";
import CardDish from "@/components/Other/CardDish";
import bgItem05 from "../../../../../public/images/bg-items/bg-item-5.png";
import { restaurantsData } from "../../../../../public/RestaurantsData";
import { dishesData } from "../../../../../public/DishesData";
import type { Restaurant } from "@/types/restaurant.types";

export default function RestaurantClientComponent() {
  const params = useParams();
  const id = params.id as string;
  const restaurant = restaurantsData.find(
    (restaurant: Restaurant) => restaurant.id === id,
  );

  if (!restaurant) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FBE7BB]">
        <h1 className="text-5xl">Restaurant not found</h1>
      </div>
    );
  }

  return (
    <section className="relative mt-24 min-h-screen px-2 pt-8 lg:px-8">
      <Image
        className="absolute -top-5 left-0 z-0 hidden md:-top-1 md:block"
        src={bgItem05}
        alt=""
        width={560}
        height={200}
        data-aos="fade-down"
      />

      <article className="flex flex-col items-center justify-between lg:flex-row" data-aos="fade-right">
        <h1 className="font-karantina relative z-10 w-full self-start text-center text-6xl font-bold lg:w-3/10">
          {restaurant.name}
        </h1>
        <p className="relative z-10 mt-4 w-auto rounded-4xl border-4 border-[#F2680F] bg-[#FAB735] p-4 text-center text-3xl lg:mt-0 lg:w-5/10">
          {restaurant.address}
        </p>
      </article>
      <article className="mt-8 flex flex-col items-center justify-around gap-2 lg:flex-row">
        <div className="flex flex-col" data-aos="fade-right">
          <div className="relative h-78 w-78 overflow-hidden sm:h-96 sm:w-96">
            <Image
              className="relative top-1/2 left-0 z-10 rounded-4xl border-4 border-[#F2680F] transition-transform duration-300"
              src={restaurant.image}
              alt=""
              fill
              sizes="400px"
              priority
            />
          </div>
        </div>
        <div className="mt-8 w-8/10 lg:mt-0 lg:w-6/10 xl:w-7/10" data-aos="fade-up">
          <ReviewsSlider reviews={restaurant.reviews} />
        </div>
      </article>

      <HorizontalTrace />


      <article>
      
        <h1 className="font-karantina mt-16 text-center text-8xl relative z-20" data-aos="fade-up">Menu</h1>
        <div className="flex w-full justify-center">
          <ul className="my-9 grid grid-cols-1 gap-2 px-0 md:grid-cols-2 lg:gap-6 lg:px-4 xl:grid-cols-3">
            {dishesData
              .filter((dish) => dish.restaurant === restaurant.name)
              .map((dish) => (
                <CardDish key={dish.id} dish={dish} />
              ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
