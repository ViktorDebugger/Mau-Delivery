"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import Window from "@/components/Windows/Window";
import Allergens from "@/components/Windows/Allergens";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import Calories from "@/components/Menu/Calories";
import Ingredients from "@/components/Menu/Ingredients";
import ReviewsSlider from "@/components/Other/ReviewsSlider";
import HorizontalTrace from "@/components/Decorations/HorizontalTrace";
import bgItem05 from "../../../../../public/images/bg-items/bg-item-5.png";
import { getDishById } from "@/db/Dish";
import type { Dish } from "@/types/dish.types";
import type { CartItem } from "@/types/cart.types";
import { Restaurant } from "@/types/restaurant.types";
import { getRestaurantByName } from "@/db/Restaurant";

export default function DishClientComponent() {
  const { cart, setCart } = useCart();
  const { user, userData } = useAuth();
  const userAllergens = userData?.allergens || [];

  const [isItemInCart, setIsItemInCart] = useState<boolean>(false);
  const [dish, setDish] = useState<Dish | null>(null);
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [windowAllergens, setWindowAllergens] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [intersectingAllergens, setIntersectingAllergens] = useState<string[]>([]);

  const params = useParams();
  const id = params.id as string;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setWindowAllergens(false);
      setIsClosing(false);
    }, 300);
  };

  const handleOpen = () => {
    setIsClosing(false);
    setWindowAllergens(true);
  };

  useEffect(() => {
    const fetchDish = async () => {
      setLoading(true);
      const fetchedDish = await getDishById(id);
      setDish(fetchedDish);

      if (fetchedDish) {
        setIntersectingAllergens((fetchedDish.allergens || []).filter((allergen: string) =>
          userAllergens.includes(allergen)));
        const fetchedRestaurant = await getRestaurantByName(
          fetchedDish.restaurant,
        );
        setRestaurant(fetchedRestaurant);
      }

      setLoading(false);
    };

    fetchDish();
    setNotFound(!!dish);
  }, [id]);
  useEffect(() => {
    setIsItemInCart(cart.some((item) => item.dishId === dish?.id));
  }, [cart, dish?.id]);

  const addToCart = () => {
    if (!dish) return;
    try {
      const newItem: CartItem = {
        dishId: dish.id,
        restaurantId: restaurant?.id || "",
        restaurant: dish.restaurant,
        quantity: 1,
        price: dish.price,
        image: dish.image,
        name: dish.name,
      };

      setCart([...cart, newItem]);
      setWindowAllergens(false);
      setIsItemInCart(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = () => {
    if (!dish) return;

    if (intersectingAllergens.length) {
      handleOpen();
      return;
    }

    addToCart();
  };

  const handleDeleteFromCart = () => {
    setCart((prevCart) => prevCart.filter((item) => item.dishId !== dish!.id));
    setIsItemInCart(false);
  };

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <MoonLoader color="#F2680F" loading={loading} size={100} />
        </div>
      ) : notFound ? (
        <div className="mt-6 flex h-9/10 items-center justify-center rounded-2xl bg-[#F6DA9E] text-3xl">
          Dishes not found
        </div>
      ) : (
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
              <h1
                className="font-karantina relative z-10 w-full self-start text-center text-6xl md:w-5/10 md:text-left"
                data-aos="fade-right"
              >
                {dish!.name}
              </h1>
              <div
                className="mt-4 flex flex-col items-center gap-4 md:flex-row lg:mt-0"
                data-aos="fade-right"
              >
                <p className="relative z-10 w-full rounded-4xl border-4 border-[#F2680F] bg-[#FAB735] p-4 text-3xl md:w-7/10">
                  {dish!.description}
                </p>
                <div className="flex w-6/10 flex-col gap-2 text-3xl md:w-3/10">
                  <button
                    onClick={() =>
                      isItemInCart ? handleDeleteFromCart() : handleAddToCart()
                    }
                    disabled={!user}
                    className={`cursor-pointer rounded-full px-4 pt-4 pb-3 transition-colors duration-300 ease-in-out disabled:cursor-auto disabled:bg-[#9CA3AF] ${
                      isItemInCart
                        ? "bg-[#EF4444] hover:bg-[#DC2626]"
                        : "bg-[#F2680F] hover:bg-[#F2570F]"
                    } `}
                  >
                    <p className="-mt-4">
                      {isItemInCart
                        ? "Delete from cart"
                        : user
                          ? "Add to cart"
                          : "Login to add to cart"}
                    </p>
                  </button>
                  <div className="w-full rounded-4xl bg-[#FAB735]/50 px-4 pb-1 text-center font-bold sm:w-2/3">
                    <p>{dish!.price} UAN</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="relative z-10 mt-8 flex flex-col items-center justify-around gap-2 lg:flex-row">
              <div className="flex flex-col" data-aos="fade-right">
                <div className="relative h-78 w-78 overflow-hidden sm:h-96 sm:w-96">
                  <Image
                    className="relative top-1/2 left-0 z-10 translate-y-1 rounded-4xl border-4 border-[#F2680F] object-cover transition-transform duration-300"
                    src={dish!.image}
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
                      <Link href={`/restaurant/${restaurant!.id}`} passHref>
                        <span className="line-clamp-1 cursor-pointer rounded-2xl bg-[#FBE7BB] px-4 font-bold underline">
                          {dish!.restaurant}
                        </span>
                      </Link>
                    </div>
                    <div className="relative z-40 mt-2 gap-2 text-2xl">
                      <p>Allergens</p>
                      <p className="max-w-78 rounded-2xl bg-[#FBE7BB] px-2">
                        {dish!.allergens.length ? (
                          <span>
                            {dish!.allergens.map(
                              (allergen: string, index: number) => (
                                <span key={allergen}>
                                  {allergen}
                                  {index !== dish!.allergens.length - 1
                                    ? ", "
                                    : ""}
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
                      <Ingredients ingradients={dish!.ingredients} />
                      <Calories nutrition={dish!.nutrition} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-8/10 lg:mt-0 lg:w-5/10 xl:w-7/10"
                data-aos="fade-up"
              >
                <ReviewsSlider dishId={dish?.id} />
              </div>
            </article>
          </section>
          <div className="relative bottom-40 w-full">
            <HorizontalTrace />
          </div>
        </>
      )}
      {windowAllergens && (
        <Window
          handleClose={handleClose}
          isClosing={isClosing}
          windowWidth={"w-9/10 md:w-4/10"}
          windowHeight={"max-h-8/10"}
          ChildComponent={
            <Allergens
              handleClose={handleClose}
              allergens={intersectingAllergens}
              onConfirm={addToCart}
            />
          }
        />
      )}
    </>
  );
}
