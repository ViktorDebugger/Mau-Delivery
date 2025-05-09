"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import ReviewsSlider from "@/components/Other/ReviewsSlider";
import HorizontalTrace from "@/components/Decorations/HorizontalTrace";
import CardDish from "@/components/Other/CardDish";
import bgItem05 from "@/assets/images/bg-items/bg-item-5.png";
import { getRestaurantById } from "@/db/Restaurant";
import type { RestaurantType } from "@/types/restaurant.types";
import type { DishType } from "@/types/dish.types";
import { getDishesByRestaurantName } from "@/db/Dish";

const Restaurant = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null);
  const [dishes, setDishes] = useState<DishType[] | []>([]);
  const [notFound, setNotFound] = useState<boolean>(false);
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    const fetchRestaurant = async () => {
      setLoading(true);
      const fetchedRestaurant = await getRestaurantById(id);
      setRestaurant(fetchedRestaurant);

      if (fetchedRestaurant) {
        const fetchedDishes = await getDishesByRestaurantName(
          fetchedRestaurant.name,
        );
        setDishes(fetchedDishes);
      }

      setLoading(false);
    };

    fetchRestaurant();
    setNotFound(!!restaurant);
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <MoonLoader color="#F2680F" loading={loading} size={100} />
        </div>
      ) : notFound ? (
        <div className="mt-6 flex h-9/10 items-center justify-center rounded-2xl bg-[#F6DA9E] text-3xl">
          Restaurant not found
        </div>
      ) : (
        <section className="relative mt-24 min-h-screen px-2 pt-8 lg:px-8">
          <Image
            className="absolute -top-5 left-0 z-0 hidden md:-top-1 md:block"
            src={bgItem05}
            alt=""
            width={560}
            data-aos="fade-down"
          />

          <article
            className="flex flex-col items-center justify-between lg:flex-row"
            data-aos="fade-right"
          >
            <h1 className="font-karantina relative z-10 w-full self-start text-center text-6xl font-bold lg:w-3/10">
              {restaurant!.name}
            </h1>
            <p className="relative z-10 mt-4 w-auto rounded-4xl border-4 border-[#F2680F] bg-[#FAB735] p-4 text-center text-3xl lg:mt-0 lg:w-5/10">
              {restaurant!.address}
            </p>
          </article>
          <article className="mt-8 flex flex-col items-center justify-around gap-2 lg:flex-row">
            <div className="flex flex-col" data-aos="fade-right">
              <figure className="relative h-78 w-78 overflow-hidden sm:h-96 sm:w-96">
                <Image
                  className="relative top-1/2 left-0 z-10 rounded-4xl border-4 border-[#F2680F] bg-[#D1D5DB] object-cover transition-transform duration-300"
                  src={restaurant!.image}
                  alt=""
                  fill
                  sizes="400px"
                  priority
                />
              </figure>
            </div>
            <div
              className="mt-8 w-8/10 lg:mt-0 lg:w-6/10 xl:w-7/10"
              data-aos="fade-up"
            >
              <ReviewsSlider restaurantId={restaurant?.id} />
            </div>
          </article>

          <HorizontalTrace />

          <article>
            <h1
              className="font-karantina relative z-20 mt-16 text-center text-8xl"
              data-aos="fade-up"
              data-aos-offset="-200"
            >
              Menu
            </h1>
            <div className="flex w-full justify-center">
              {dishes.length ? (
                <ul className="my-9 grid grid-cols-1 gap-2 px-0 md:grid-cols-2 lg:gap-6 lg:px-4 xl:grid-cols-3">
                  {dishes.map((dish) => (
                    <CardDish
                      key={dish.id}
                      dish={dish}
                      restaurant={restaurant as RestaurantType}
                    />
                  ))}
                </ul>
              ) : (
                <div
                  className="flex h-60 w-full items-center justify-center text-4xl"
                  data-aos="fade-up"
                >
                  Dishes not found
                </div>
              )}
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default Restaurant;
