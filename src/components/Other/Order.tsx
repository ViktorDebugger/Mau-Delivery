"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import Status from "../Windows/Status";
import Window from "../Windows/Window";
import Comment from "../Windows/Comment";
import { dishesData } from "../../../public/DishesData";
import type { Order } from "@/types/cart.types";

interface OrderProps {
  order: Order;
}

const Order = ({ order }: OrderProps) => {
  const [windowStatus, setWindowStatus] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [windowComment, setWindowComment] = useState<boolean>(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setWindowStatus(false);
      setWindowComment(false);
      setIsClosing(false);
    }, 300);
  };

  const handleOpenStatus = () => {
    setIsClosing(false);
    setWindowStatus(true);
  };

  const handleOpenComment = () => {
    setIsClosing(false);
    setWindowComment(true);
  };

  const dishMap = dishesData.reduce(
    (acc, dish) => {
      acc[dish.id] = dish;
      return acc;
    },
    {} as Record<string, (typeof dishesData)[0]>,
  );

  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const createdAt = new Date(order.createdAt).getTime();
    const now = Date.now();
    const duration =
      order.paymentMethod === "Card" ? 2 * 60 * 60 * 1000 : 30 * 60 * 1000;
    const difference = createdAt + duration - now;

    setTimeLeft(difference > 0 ? difference : 0);

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [order]);

  const formattedDate = new Date(order.createdAt).toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const formatTimeLeft = (time: number) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 / 60 / 60) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <>
      <li className="rounded-4xl border-4 border-[#FAB735] bg-[#F2680F] p-4 text-3xl" data-aos="fade-up">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#FBE7BB] p-4 text-xl leading-[1] sm:text-3xl xl:flex-row">
          <div className="flex w-9/10 justify-end gap-4 xl:w-3/10">
            <p className="w-5/10 text-right">Created at: </p>
            <p className="w-5/10 font-bold">{formattedDate}</p>
          </div>
          <button
            onClick={handleOpenStatus}
            className="w-9/10 cursor-pointer rounded-4xl bg-[#FAB735] px-2 py-4 font-bold transition-colors duration-300 hover:bg-[#F2A30F] xl:w-3/10"
          >
            Order Status
          </button>
          <div className="flex w-9/10 justify-end gap-4 xl:w-3/10">
            <p className="w-5/10 text-right">Time to complete:</p>
            {timeLeft > 0 ? (
              <p className="w-5/10 font-bold">{formatTimeLeft(timeLeft)}</p>
            ) : (
              <p className="font-bold">Completed</p>
            )}
          </div>
        </div>

        <ul className="mt-4 flex flex-col gap-4">
          {order.dishes.map(({ dishId, quantity, price }) => {
            const dish = dishMap[dishId];
            if (!dish) return null;

            return (
              <li
                key={dish.id}
                className="flex gap-2 rounded-2xl bg-[#FBE7BB] p-4"
              >
                <div className="relative h-48 w-48">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="200px"
                    className="rounded-2xl object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between w-full gap-4">
                  <div className="flex flex-col justify-evenly rounded-2xl bg-[#F6DA9E] px-4 py-1 text-lg sm:text-xl md:text-3xl gap-4">
                    <div className="flex flex-col sm:flex-row">
                      <p className="w-full sm:w-5/10 md:w-3/10">Dish</p>
                      <p className="w-full sm:w-5/10 md:w-7/10 font-bold line-clamp-1">{dish.name}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <p className="w-full sm:w-5/10 md:w-3/10">Restaurant</p>
                      <p className="w-full sm:w-5/10 md:w-7/10 font-bold line-clamp-1">{dish.restaurant}</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col w-full md:w-5/10 lg:w-4/10 justify-evenly gap-2 text-xl lg:text-3xl">
                      <button
                        onClick={handleOpenComment}
                        className="cursor-pointer rounded-2xl bg-[#F6DA9E] px-2 md:px-4 transition-colors duration-300 ease-in-out hover:bg-[#EAC984]"
                      >
                        Comment a Dish
                      </button>
                      <button
                        onClick={handleOpenComment}
                        className="cursor-pointer rounded-2xl bg-[#F6DA9E] px-2 md:px-4 transition-colors duration-300 ease-in-out hover:bg-[#EAC984]"
                      >
                        Comment a Restaurant
                      </button>
                    </div>

                    <div className="flex flex-col justify-evenly w-full md:w-6/10 rounded-2xl bg-[#F6DA9E] px-4 text-xl md:text-3xl">
                      <div className="flex">
                        <p className="w-1/2">Price</p>
                        <p className="w-1/2 font-bold">{price} UAN</p>
                      </div>
                      <div className="flex">
                        <p className="w-1/2">Quantity</p>
                        <p className="w-1/2 font-bold">{quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex min-h-50 flex-col gap-8 lg:flex-row">
          <div className="mt-4 flex w-full flex-col rounded-2xl bg-[#FBE7BB] p-4 lg:w-5/10 xl:w-7/10">
            <p>Comment:</p>
            <p className="leading-[1] font-bold text-lg md:text-xl lg:text-3xl">{order.comment}</p>
          </div>
          <div className="mt-4 flex w-full flex-col justify-between rounded-2xl bg-[#FBE7BB] p-4 text-xl md:text-3xl lg:w-5/10 xl:w-3/10">
            <div className="flex gap-0 md:gap-8">
              <p className="w-2/3 md:w-1/2">Total price</p>
              <p className="w-1/3 font-bold md:w-1/2">
                {order.totalAmount} UAN
              </p>
            </div>
            <div className="flex gap-0 md:gap-8">
              <p className="w-2/3 md:w-1/2">Total quantity</p>
              <p className="w-1/3 font-bold md:w-1/2">{order.totalQuantity}</p>
            </div>
            <div className="flex gap-0 md:gap-8">
              <p className="w-2/3 md:w-1/2">Payment</p>
              <p className="w-1/3 font-bold md:w-1/2">{order.paymentMethod}</p>
            </div>
          </div>
        </div>
      </li>

      {windowStatus && (
        <Window
          handleClose={handleClose}
          isClosing={isClosing}
          windowWidth={"w-full md:w-9/10 lg:w-8/10 xl:w-7/10"}
          windowHeight={""}
          ChildComponent={<Status handleClose={handleClose} />}
        />
      )}
      {windowComment && (
        <Window
          handleClose={handleClose}
          isClosing={isClosing}
          windowWidth={"w-full md:w-9/10 lg:w-8/10 xl:w-7/10"}
          windowHeight={""}
          ChildComponent={<Comment handleClose={handleClose} />}
        />
      )}
    </>
  );
};

export default Order;
