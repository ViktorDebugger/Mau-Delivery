"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Status from "../Windows/Status";
import Window from "../Windows/Window";
import Comment from "../Windows/Comment";
import type { OrderType } from "@/types/cart.types";

interface OrderProps {
  order: OrderType;
}

const Order = ({ order }: OrderProps) => {
  const [windowStatus, setWindowStatus] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [selectedDishId, setSelectedDishId] = useState<string | null>(null);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<
    string | null
  >(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [windowDishComment, setWindowDishComment] = useState<boolean>(false);
  const [windowRestaurantComment, setWindowRestaurantComment] =
    useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setWindowStatus(false);
      setWindowDishComment(false);
      setWindowRestaurantComment(false);
      setSelectedDishId(null);
      setSelectedRestaurantId(null);
      setSelectedTitle("");
      setIsClosing(false);
    }, 300);
  };

  const handleOpenStatus = () => {
    setIsClosing(false);
    setWindowStatus(true);
  };

  const handleOpenDishComment = (dishId: string, dishName: string) => {
    setSelectedDishId(dishId);
    setSelectedTitle(dishName);
    setIsClosing(false);
    setWindowDishComment(true);
  };

  const handleOpenRestaurantComment = (
    restaurantId: string,
    restaurantName: string,
  ) => {
    console.log("restaurantId", restaurantId);
    setSelectedRestaurantId(restaurantId);
    setSelectedTitle(restaurantName);
    setIsClosing(false);
    setWindowRestaurantComment(true);
  };

  useEffect(() => {
    const endTime = new Date(order.selectedTime).getTime();

    const updateTimer = () => {
      const now = Date.now();
      const difference = endTime - now;
      setTimeLeft(difference > 0 ? difference : 0);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [order.selectedTime]);

  const formatTimeLeft = (time: number) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 / 60 / 60) % 24);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <li
        className="rounded-4xl border-4 border-[#FAB735] bg-[#F2680F] p-4 text-3xl"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#FBE7BB] p-4 text-xl leading-[1] sm:text-3xl xl:flex-row">
          <div className="flex w-9/10 justify-between gap-4 xl:w-3/10">
            <p className="w-5/10 text-center xl:text-left">Created at: </p>
            <p className="w-5/10 font-bold">
              {new Date(order.createdAt).toLocaleString(undefined, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </p>
          </div>
          <button
            onClick={handleOpenStatus}
            className="w-9/10 cursor-pointer rounded-4xl bg-[#FAB735] px-2 py-4 font-bold transition-colors duration-300 hover:bg-[#F2A30F] xl:w-3/10"
          >
            Order Status
          </button>
          <div className="flex w-9/10 justify-between gap-4 xl:w-3/10">
            <p className="w-5/10 text-center xl:text-left">Time to complete:</p>
            {timeLeft > 0 ? (
              <p className="w-5/10 font-bold">{formatTimeLeft(timeLeft)}</p>
            ) : (
              <p className="w-5/10 font-bold">Completed</p>
            )}
          </div>
        </div>

        <ul className="mt-4 flex flex-col gap-4">
          {order.dishes.map((dish) => (
            <li
              key={dish.dishId}
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
              <div className="flex w-full flex-col justify-between gap-4">
                <div className="flex flex-col justify-evenly gap-4 rounded-2xl bg-[#F6DA9E] px-4 py-1 text-lg sm:text-xl md:text-3xl">
                  <div className="flex flex-col sm:flex-row">
                    <p className="w-full sm:w-5/10 md:w-3/10">Dish</p>
                    <p className="line-clamp-1 w-full font-bold sm:w-5/10 md:w-7/10">
                      {dish.name}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <p className="w-full sm:w-5/10 md:w-3/10">Restaurant</p>
                    <p className="line-clamp-1 w-full font-bold sm:w-5/10 md:w-7/10">
                      {dish.restaurant}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex w-full flex-col justify-evenly gap-2 text-xl md:w-5/10 lg:w-4/10 lg:text-3xl">
                    <button
                      onClick={() =>
                        handleOpenDishComment(dish.dishId, dish.name)
                      }
                      className="cursor-pointer rounded-2xl bg-[#F6DA9E] px-2 transition-colors duration-300 ease-in-out hover:bg-[#EAC984] md:px-4"
                    >
                      Comment a Dish
                    </button>
                    <button
                      onClick={() =>
                        handleOpenRestaurantComment(
                          dish.restaurantId,
                          dish.restaurant,
                        )
                      }
                      className="cursor-pointer rounded-2xl bg-[#F6DA9E] px-2 transition-colors duration-300 ease-in-out hover:bg-[#EAC984] md:px-4"
                    >
                      Comment a Restaurant
                    </button>
                  </div>

                  <div className="flex w-full flex-col justify-evenly rounded-2xl bg-[#F6DA9E] px-4 text-xl md:w-6/10 md:text-3xl">
                    <div className="flex">
                      <p className="w-1/2">Price</p>
                      <p className="w-1/2 font-bold">{dish.price} UAN</p>
                    </div>
                    <div className="flex">
                      <p className="w-1/2">Quantity</p>
                      <p className="w-1/2 font-bold">{dish.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex min-h-50 flex-col gap-0 lg:flex-row lg:gap-4">
          <div className="mt-4 flex w-full flex-col rounded-2xl bg-[#FBE7BB] p-4 lg:w-5/10 xl:w-7/10">
            {order?.comment?.length ? (
              <>
                <p>Comment:</p>
                <p className="text-lg leading-[1] font-bold md:text-xl lg:text-3xl">
                  {order.comment}
                </p>
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-center text-lg font-bold md:text-xl lg:text-3xl">
                  No comment
                </p>
              </div>
            )}
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
          ChildComponent={<Status handleClose={handleClose} selectedTime={order.selectedTime} createdAt={order.createdAt} />}
        />
      )}
      {windowDishComment && selectedDishId && (
        <Window
          handleClose={handleClose}
          isClosing={isClosing}
          windowWidth={"w-full md:w-9/10 lg:w-8/10 xl:w-7/10"}
          windowHeight={""}
          ChildComponent={
            <Comment
              handleClose={handleClose}
              title={selectedTitle}
              id={selectedDishId}
              type="dish"
            />
          }
        />
      )}
      {windowRestaurantComment && selectedRestaurantId && (
        <Window
          handleClose={handleClose}
          isClosing={isClosing}
          windowWidth={"w-full md:w-9/10 lg:w-8/10 xl:w-7/10"}
          windowHeight={""}
          ChildComponent={
            <Comment
              handleClose={handleClose}
              title={selectedTitle}
              id={selectedRestaurantId}
              type="restaurant"
            />
          }
        />
      )}
    </>
  );
};

export default Order;
