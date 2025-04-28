"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBasket } from "lucide-react";
import Cart from "../Menu/Cart";
import Window from "../Windows/Window";
import Dishes from "../Windows/Dishes";
import Restaurants from "../Windows/Restaurants";
import Order from "../Windows/Order";
import logo from "../../../public/images/logo.png";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [windowDishes, setWindowDishes] = useState<boolean>(false);
  const [windowRestaurants, setWindowRestaurants] = useState<boolean>(false);
  const [windowOrder, setWindowOrder] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { cart } = useCart();
  const { user } = useAuth();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setWindowDishes(false);
      setWindowRestaurants(false);
      setWindowOrder(false);
      setIsClosing(false);
    }, 300);
  };

  const handleOpenDishes = () => {
    setIsClosing(false);
    setWindowDishes(true);
  };

  const handleOpenRestaurants = () => {
    setIsClosing(false);
    setWindowRestaurants(true);
  };

  const handleOpenOrder = () => {
    setIsClosing(false);
    setWindowOrder(true);
  };

  const toggleMenu = (isOpen: boolean) => {
    setMenuOpen(isOpen);
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <>
      <header
        className="fixed top-0 z-50 w-full bg-[#FFCA8D]"
        data-aos="fade-down"
      >
        <div className="flex items-center justify-between px-8 py-2">
          <div className="h-16 w-16 md:h-20 md:w-20">
            <Image src={logo} alt="MAU Delivery Logo" width={80} height={80} />
          </div>

          <nav className="ml-auto hidden md:block">
            <ul className="flex items-center gap-2 text-3xl lg:text-4xl">
              <li>{user && <Cart />}</li>
              <li>
                <button
                  onClick={handleOpenDishes}
                  className="flex h-12 cursor-pointer items-center justify-center rounded-4xl px-2 transition-colors duration-300 ease-in-out hover:bg-[#FAB735] lg:px-5"
                >
                  <span className="-mt-2">Dishes</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleOpenRestaurants}
                  className="flex h-12 cursor-pointer items-center justify-center rounded-4xl px-2 transition-colors duration-300 ease-in-out hover:bg-[#FAB735] lg:px-5"
                >
                  <span className="-mt-2">Restaurants</span>
                </button>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex h-12 cursor-pointer items-center justify-center rounded-4xl px-2 transition-colors duration-300 ease-in-out hover:bg-[#FAB735] lg:px-5"
                >
                  <span className="-mt-2">Home</span>
                </Link>
              </li>
              <li>
                {user ? (
                  <Link
                    href={`/profile/${user.uid}`}
                    className="flex h-12 items-center justify-center rounded-4xl px-2 transition-colors duration-300 ease-in-out hover:bg-[#FAB735] lg:px-5"
                  >
                    <span className="-mt-2">Profile</span>
                  </Link>
                ) : (
                  <Link
                    href="/sign-in"
                    className="flex h-12 items-center justify-center rounded-4xl px-2 transition-colors duration-300 ease-in-out hover:bg-[#FAB735] lg:px-5"
                  >
                    <span className="-mt-2">Login</span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className="flex gap-8 md:hidden">
            {user && (
              <button
                onClick={() => {
                  handleOpenOrder();
                  toggleMenu(false);
                }}
              >
                <ShoppingBasket size={36} />
              </button>
            )}
            <button onClick={() => toggleMenu(true)}>
              <Menu size={36} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-90 bg-[#FFCA8D] transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <nav className="ml-auto">
          <ul className="flex h-screen flex-col items-center justify-center gap-12 text-5xl">
            <li>
              <button
                onClick={() => {
                  handleOpenDishes();
                  toggleMenu(false);
                }}
                className="flex h-12 cursor-pointer items-center justify-center rounded-4xl px-5 transition-colors duration-300 ease-in-out hover:bg-[#FAB735]"
              >
                <span className="-mt-2">Dishes</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleOpenRestaurants();
                  toggleMenu(false);
                }}
                className="flex h-12 cursor-pointer items-center justify-center rounded-4xl px-5 transition-colors duration-300 ease-in-out hover:bg-[#FAB735]"
              >
                <span className="-mt-2">Restaurants</span>
              </button>
            </li>
            <li>
              <Link
                onClick={() => toggleMenu(false)}
                href="/"
                className="flex h-12 cursor-pointer items-center justify-center rounded-4xl px-5 transition-colors duration-300 ease-in-out hover:bg-[#FAB735]"
              >
                <span className="-mt-2">Home</span>
              </Link>
            </li>
            {user ? (
              <li>
                <Link
                  onClick={() => toggleMenu(false)}
                  href={`/profile/${user.uid}`}
                  className="flex h-12 cursor-pointer items-center justify-center rounded-4xl px-5 transition-colors duration-300 ease-in-out hover:bg-[#FAB735]"
                >
                  <span className="-mt-2">Profile</span>
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  onClick={() => toggleMenu(false)}
                  href="/sign-in"
                  className="flex h-12 cursor-pointer items-center justify-center rounded-4xl px-5 transition-colors duration-300 ease-in-out hover:bg-[#FAB735]"
                >
                  <span className="-mt-2">Login</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <button
          onClick={() => toggleMenu(false)}
          className="absolute top-6 right-8"
        >
          <X size={48} />
        </button>
      </div>

      {windowDishes && (
        <Window
          handleClose={handleClose}
          isClosing={isClosing}
          windowWidth={"w-9/10 md:w-7/10"}
          windowHeight={"h-19/20"}
          ChildComponent={<Dishes handleClose={handleClose} />}
        />
      )}
      {windowRestaurants && (
        <Window
          handleClose={handleClose}
          isClosing={isClosing}
          windowWidth={"w-9/10 md:w-7/10"}
          windowHeight={"h-19/20"}
          ChildComponent={<Restaurants handleClose={handleClose} />}
        />
      )}
      {windowOrder && (
        <>
          {cart!.length !== 0 ? (
            <Window
              handleClose={handleClose}
              isClosing={isClosing}
              windowWidth={"w-full lg:w-8/10"}
              windowHeight={"h-19/20 lg:h-9/10"}
              ChildComponent={<Order handleClose={handleClose} />}
            />
          ) : (
            <Window
              handleClose={handleClose}
              isClosing={isClosing}
              windowWidth={"w-5/10"}
              windowHeight={"h-3/10"}
              ChildComponent={<div className="flex w-full h-full justify-center items-center">
                <p className="text-4xl">None</p>
              </div>}
            />
          )}
        </>
      )}
    </>
  );
};

export default Header;
