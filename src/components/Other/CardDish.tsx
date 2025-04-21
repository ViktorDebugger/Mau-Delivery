import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import { useCart } from "@/context/CartContext";
import type { Dish } from "@/types/dish.types";
import type { CartItem } from "@/types/cart.types";

interface CardDishProps {
  dish: Dish;
}

const CardDishMenu = ({ dish }: CardDishProps) => {
  const { cart, setCart } = useCart();
  const [isItemInCart, setIsItemInCart] = useState<boolean>(false);

  useEffect(() => {
    setIsItemInCart(cart.some((item) => item.dishId === dish?.id));
  }, [cart, dish?.id]);

  const handleAddToCart = () => {
    if (!dish) return;

    try {
      const newItem: CartItem = {
        dishId: dish.id,
        quantity: 1,
        price: dish.price,
      };

      setCart([...cart, newItem]);
      setIsItemInCart(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFromCart = () => {
    setCart((prevCart) => prevCart.filter((item) => item.dishId !== dish.id));
    setIsItemInCart(false);
  };

  return (
    <li
      key={dish.id}
      className="flex max-w-full mx-auto md:max-w-98 gap-3 rounded-4xl bg-[#F2680F] p-4 transition-colors duration-300 ease-in-out" data-aos="fade-up"
    >
      <div className="flex flex-col items-center">
        <Link
          href={`/dish/${dish.id}`}
          passHref
          className="relative h-44 w-44 cursor-pointer overflow-hidden"
        >
          <Image
            className="relative top-1/2 left-0 z-10 translate-y-1 rounded-4xl transition-transform duration-300"
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
          className={`mt-4 w-full cursor-pointer rounded-full px-6 py-2 text-2xl transition duration-300 ease-in-out ${
            isItemInCart
              ? "bg-[#EF4444] hover:bg-[#DC2626]"
              : "bg-[#FAB735] hover:bg-[#F2A30F]"
          } `}
        >
          <p className="">
            {isItemInCart ? "Delete from cart" : "Add to cart"}
          </p>
        </button>
      </div>

      <div className="flex flex-col justify-between">
        <h1 className="text-center text-3xl leading-[1] font-bold line-clamp-2">
          {dish.name}
        </h1>
        <p className="text-left text-lg leading-[1] line-clamp-6">{dish.description}</p>
        <p className="rounded-4xl bg-[#FAB735]/40 text-center text-3xl font-bold">
          {dish.price} UAN
        </p>
      </div>
    </li>
  );
};

export default CardDishMenu;
