"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBasket, ChevronUp, ChevronDown, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Order from "../Windows/Order";
import Window from "../Windows/Window";
import type { CartItemType } from "@/types/cart.types";

const Cart = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { cart, setCart } = useCart();
  const cartItems: CartItemType[] = cart;
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [windowOrder, setWindowOrder] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setWindowOrder(false);
      setIsClosing(false);
    }, 300);
  };

  const handleOpenOrder = () => {
    setWindowOrder(true);
    setIsOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen((o) => !o);
  };

  const handleIncreaseQuantity = (dishId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.dishId === dishId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const handleDecreaseQuantity = (dishId: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.dishId === dishId && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.dishId !== dishId));
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="relative" ref={menuRef}>
        <div
          onClick={() => handleOpen()}
          className={`flex cursor-pointer flex-col rounded-4xl px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-[#FAB735] ${
            isOpen ? "bg-[#FAB735]" : "bg-none"
          }`}
        >
          <button className="cursor-pointer">
            <ShoppingBasket size={32} />
          </button>
        </div>
        <motion.div
          layout
          className={`absolute top-18 -left-10 z-1 flex flex-col justify-between gap-2 rounded-4xl border-4 border-[#FAB735] bg-[#F2680F] p-4 shadow-2xl transition-all duration-300 ease-in-out ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-2 opacity-0"
          } ${cart.length ? "h-[430px] w-[500px]" : "h-[100px] w-[150px]"}`}
        >
          {cart.length ? (
            <>
              <motion.ul
                layout
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="custom-scrollbar-2 flex h-3/4 flex-col gap-2 overflow-y-auto"
              >
                <AnimatePresence mode="sync">
                  {cartItems.map((item) => (
                    <motion.li
                      key={item.dishId}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }}
                      layout
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex justify-between gap-1 rounded-2xl bg-[#FBE7BB] p-2 text-2xl"
                    >
                      <div className="flex gap-4">
                        <figure className="relative h-16 w-16 overflow-hidden">
                          <Image
                            className="rounded-2xl object-cover"
                            src={item.image}
                            alt="dish"
                            fill
                            sizes="64px"
                          />
                        </figure>
                        <div>
                          <h1 className="line-clamp-1">{item.name}</h1>
                          <p>{item.price * item.quantity} UAN</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-[10px]">
                        <div className="flex items-center justify-center rounded-lg bg-[#FAB735] px-2">
                          <p className="-mt-2">{item.quantity}</p>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <button
                            onClick={() => handleIncreaseQuantity(item.dishId)}
                            className="flex cursor-pointer items-center justify-center rounded-xl bg-[#FAB735] leading-[1] transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
                          >
                            <ChevronUp size={24} />
                          </button>
                          <button
                            onClick={() => handleDecreaseQuantity(item.dishId)}
                            className="flex cursor-pointer items-center justify-center rounded-xl bg-[#FAB735] leading-[1] transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
                          >
                            <ChevronDown size={24} />
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.dishId)}
                          className="flex cursor-pointer items-center justify-center rounded-2xl bg-[#FAB735] transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
                        >
                          <X size={24} />
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
              <div className="flex flex-col rounded-2xl bg-[#FBE7BB] px-4 py-1 text-2xl">
                <div className="flex justify-between">
                  <p>Total price</p>
                  <p className="font-bold">
                    {cart.reduce(
                      (accum, cur) => accum + cur.price * cur.quantity,
                      0,
                    )}
                    UAN
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Total quantity</p>
                  <p className="font-bold">
                    {cart.reduce((accum, cur) => accum + cur.quantity, 0)}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleOpenOrder}
                  className="w-1/2 cursor-pointer rounded-4xl bg-[#FBE7BB] px-4 py-1 text-2xl transition-colors duration-300 ease-in-out hover:bg-[#F6DA9E]"
                >
                  <p>Make Order</p>
                </button>
              </div>
            </>
          ) : (
            <motion.div
              layout
              transition={{ duration: 0.3, ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex h-full items-center justify-center rounded-2xl bg-[#FAB735] p-2"
            >
              None
            </motion.div>
          )}
        </motion.div>
      </div>
      {windowOrder && (
        <Window
          handleClose={handleClose}
          isClosing={isClosing}
          windowWidth={"w-full lg:w-8/10"}
          windowHeight={"h-full lg:h-9/10"}
          ChildComponent={<Order handleClose={handleClose} />}
        />
      )}
    </>
  );
};

export default Cart;
