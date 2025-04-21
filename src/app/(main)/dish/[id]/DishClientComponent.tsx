"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import { useState, useEffect } from "react";

import { useCart } from "@/context/CartContext";
import Calories from "@/components/Menu/Calories";
import Ingredients from "@/components/Menu/Ingredients";
import ReviewsSlider from "@/components/Other/ReviewsSlider";
import HorizontalTrace from "@/components/Decorations/HorizontalTrace";
import bgItem05 from "../../../../../public/images/bg-items/bg-item-5.png";
import { dishesData } from "../../../../../public/DishesData";
import { restaurantsData } from "../../../../../public/RestaurantsData";
import type { Dish } from "@/types/dish.types";
import type { CartItem } from "@/types/cart.types";

export default function DishClientComponent() {
  const { cart, setCart } = useCart();
  const [isItemInCart, setIsItemInCart] = useState<boolean>(false);
  const params = useParams();
  const id = params.id as string;
  const dish = dishesData.find((dish: Dish) => dish.id === id);
  const restaurant = restaurantsData.find(
    (restaurant) => restaurant.name === dish?.restaurant,
  );

  useEffect(() => {
    setIsItemInCart(cart.some((item) => item.dishId === dish?.id));
  }, [cart, dish?.id]);

  if (!dish || !restaurant) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FBE7BB]">
        <h1 className="text-[45px]">Dish not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!dish) return;

    const newItem: CartItem = {
      dishId: dish.id,
      quantity: 1,
      price: dish.price,
    };

    setCart([...cart, newItem]);
    setIsItemInCart(true);
  };

  const handleDeleteFromCart = () => {
    setCart((prevCart) => prevCart.filter((item) => item.dishId !== dish.id));
    setIsItemInCart(false);
  };

  return (
    <>
      
      <section className="relative mt-24 min-h-screen px-8 pt-8">
        <Image
          className="absolute -top-5 left-0 z-0 hidden md:-top-1 md:block"
          src={bgItem05}
          alt=""
          width={560}
          height={200}
          data-aos="fade-down"
        />
        <article className="flex flex-col items-center justify-between lg:flex-row">
          <h1 className="font-karantina relative z-10 w-full self-start text-center text-6xl md:w-5/10 md:text-left" data-aos="fade-right">
            {dish.name}
          </h1>
          <div className="mt-4 flex flex-col items-center gap-4 md:flex-row lg:mt-0" data-aos="fade-right">
            <p className="relative z-10 w-full rounded-4xl border-4 border-[#F2680F] bg-[#FAB735] p-4 text-3xl md:w-7/10">
              {dish.description}
            </p>
            <div className="flex w-6/10 flex-col gap-2 text-3xl md:w-3/10">
              <button
                onClick={() =>
                  isItemInCart ? handleDeleteFromCart() : handleAddToCart()
                }
                className={`cursor-pointer rounded-full px-4 pt-4 pb-3 transition-colors duration-300 ease-in-out ${
                  isItemInCart
                    ? "bg-[#EF4444] hover:bg-[#DC2626]"
                    : "bg-[#F2680F] hover:bg-[#F2570F]"
                } `}
              >
                <p className="-mt-4">
                  {isItemInCart ? "Delete from cart" : "Add to cart"}
                </p>
              </button>
              <div className="w-full rounded-4xl bg-[#FAB735]/50 px-4 pb-1 text-center font-bold sm:w-2/3">
                <p>{dish.price} UAN</p>
              </div>
            </div>
          </div>
        </article>

        <article className="mt-8 flex flex-col items-center justify-around gap-2 lg:flex-row relative z-10">
          <div className="flex flex-col" data-aos="fade-right">
            <div className="relative h-78 w-78 overflow-hidden sm:h-96 sm:w-96">
              <Image
                className="relative top-1/2 left-0 z-10 translate-y-1 rounded-4xl border-4 border-[#F2680F] transition-transform duration-300"
                src={dish.image}
                alt=""
                fill
                sizes="400px"
                priority
              />
            </div>
            <div className="mb-10 flex justify-center">
              <div className="relative z-10 -mt-8 w-9/10 rounded-2xl border-4 border-[#FAB735] bg-[#F2680F] p-4">
                <div className="relative z-40 w-full text-2xl">
                  <p>Restaurant</p>
                  <Link href={`/restaurant/${restaurant.id}`} passHref>
                    <span className="line-clamp-1 cursor-pointer rounded-2xl bg-[#FBE7BB] px-4 font-bold underline">
                      {dish.restaurant}
                    </span>
                  </Link>
                </div>
                <div className="relative z-40 mt-2 gap-2 text-2xl">
                  <p>Allergens</p>
                  <p className="max-w-78 rounded-2xl bg-[#FBE7BB] px-2">
                    {dish.allergens.length ? (
                      <span>
                        {dish.allergens.map(
                          (allergen: string, index: number) => (
                            <span key={allergen}>
                              {allergen}
                              {index !== dish.allergens.length - 1 ? ", " : ""}
                            </span>
                          ),
                        )}
                      </span>
                    ) : (
                      <span>None</span>
                    )}
                  </p>
                </div>
                <div className="mt-4 flex justify-between text-xl">
                  <Ingredients ingradients={dish.ingredients} />
                  <Calories nutrition={dish.nutrition} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-8/10 lg:mt-0 lg:w-5/10 xl:w-7/10" data-aos="fade-up">
            <ReviewsSlider reviews={dish.reviews} />
          </div>
        </article>
      </section>
      <div className="relative w-full bottom-40">
        <HorizontalTrace />
      </div>
    </>
  );
}
