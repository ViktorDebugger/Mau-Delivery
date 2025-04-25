import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import { useCart } from "@/context/CartContext";
import type { Dish } from "@/types/dish.types";
import type { CartItem } from "@/types/cart.types";
import { useAuth } from "@/context/AuthContext";
import Window from "@/components/Windows/Window";
import Allergens from "@/components/Windows/Allergens";
import { Restaurant } from "@/types/restaurant.types";

interface CardDishProps {
  dish: Dish;
  restaurant: Restaurant;
}

const CardDishMenu = ({ dish, restaurant }: CardDishProps) => {
  const { user, userData } = useAuth();
  const userAllergens = userData?.allergens || [];
  const [windowAllergens, setWindowAllergens] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const { cart, setCart } = useCart();
  const [isItemInCart, setIsItemInCart] = useState<boolean>(false);

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

  const intersectingAllergens = (dish.allergens || []).filter((allergen) =>
    userAllergens.includes(allergen),
  );

  useEffect(() => {
    setIsItemInCart(cart.some((item) => item.dishId === dish?.id));
  }, [cart, dish?.id]);

  const addToCart = () => {
    if (!dish) return;
    try {
      const newItem: CartItem = {
        dishId: dish.id,
        restaurant: dish.restaurant,
        restaurantId: restaurant?.id || "",
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
    setCart((prevCart) => prevCart.filter((item) => item.dishId !== dish.id));
    setIsItemInCart(false);
  };

  return (
    <>
      <li
        key={dish.id}
        className="mx-auto flex max-w-full gap-3 rounded-4xl bg-[#F2680F] p-4 transition-colors duration-300 ease-in-out md:max-w-98"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center">
          <Link
            href={`/dish/${dish.id}`}
            passHref
            className="relative h-44 w-44 cursor-pointer overflow-hidden"
          >
            <Image
              className="relative top-1/2 left-0 z-10 translate-y-1 rounded-4xl object-cover transition-transform duration-300"
              src={dish.image}
              alt=""
              fill
              sizes="180px"
              priority
            />
          </Link>
          <ul className="relative z-10 -mt-4 flex gap-1 rounded-4xl bg-[#FFFFFF] px-2">
            {[...Array(5)].map((_, index) => (
              <li
                key={index}
                className={`text-2xl ${
                  index < Math.floor(dish.rating)
                    ? "text-[#FAB735]"
                    : "text-[#D1D5DB]"
                }`}
              >
                ★
              </li>
            ))}
          </ul>
          <button
            onClick={() =>
              isItemInCart ? handleDeleteFromCart() : handleAddToCart()
            }
            disabled={!user}
            className={`cursor-pointer w-full rounded-full mt-2 text-2xl px-4 pt-4 pb-3 transition-colors duration-300 ease-in-out disabled:cursor-auto disabled:bg-[#9CA3AF] ${
              isItemInCart
                ? "bg-[#EF4444] hover:bg-[#DC2626]"
                : "bg-[#FAB735] hover:bg-[#F2A30F]"
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
        </div>

        <div className="flex flex-col justify-between">
          <h1 className="line-clamp-2 text-center text-3xl leading-[1.2] font-bold">
            {dish.name}
          </h1>
          <p className="line-clamp-6 text-left text-lg leading-[1]">
            {dish.description}
          </p>
          <p className="rounded-4xl bg-[#FAB735]/40 text-center text-3xl font-bold">
            {dish.price} UAN
          </p>
        </div>
      </li>

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
};

export default CardDishMenu;
