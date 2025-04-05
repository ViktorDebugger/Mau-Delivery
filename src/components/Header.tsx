"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropDownBasket from "./DropDownBasket";
import WindowDishes from "./WindowDishes";
import WindowRestaurants from "./WindowRestaurants";
import { useState } from "react";
import SearchInput from "./SearchInput";

const Header = () => {
  const pathname = usePathname();
  const [windowDishes, setWindowDishes] = useState<boolean>(false);
  const [windowRestaurants, setWindowRestaurants] = useState<boolean>(false);

  function handleWindowDishes() {
    setWindowDishes((w) => !w);
  }
  function handleWindowRestaurants() {
    setWindowRestaurants((w) => !w);
  }

  return (
    <>
      <header className="bg-[#FFCA8DB2] w-full h-[114px] relative z-2">
        <div className="flex items-center py-1 px-8">
          <Image
            src="/images/icons/logo.png"
            alt="MAU Delivery Logo"
            width={100}
            height={100}
          />
          <SearchInput handle={handleWindowDishes} />
          <SearchInput handle={handleWindowRestaurants} />
          <nav className="ml-auto -mt-4">
            <ul className="flex items-center font-katibeh text-[32px] gap-[10px]">
              <li>
                <DropDownBasket />
              </li>
              <li>
              <Link
                  href="/top-100"
                  className={`mt-2 h-[50px] transition ease-in-out duration-300 px-5 rounded-4xl flex justify-center items-center ${
                    pathname === "/top-100" ? "bg-[#FFBA26]" : "hover:bg-[#ffba26cc]"
                  }`}
                >
                  <span className="-mt-[10px]">Top 100</span>
                </Link>
              </li>
              <li>
              <Link
                  href="/about"
                  className={`mt-2 h-[50px] transition ease-in-out duration-300 px-5 rounded-4xl flex justify-center items-center ${
                    pathname === "/about" ? "bg-[#FFBA26]" : "hover:bg-[#ffba26cc]"
                  }`}
                >
                  <span className="-mt-[10px]">About Us</span>
                </Link>
              </li>
              <li>
              <Link
                  href="/"
                  className={`mt-2 h-[50px] transition ease-in-out duration-300 px-5 rounded-4xl flex justify-center items-center ${
                    pathname === "/" ? "bg-[#FFBA26]" : "hover:bg-[#ffba26cc]"
                  }`}
                >
                  <span className="-mt-[10px]">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className={`mt-2 h-[50px] transition ease-in-out duration-300 px-5 rounded-4xl flex justify-center items-center ${
                    pathname === "/account" ? "bg-[#FFBA26]" : "hover:bg-[#ffba26cc]"
                  }`}
                >
                  <span className="-mt-[10px]">Account</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {windowDishes ? <WindowDishes handle={handleWindowDishes} /> : <></>}
      {windowRestaurants ? (
        <WindowRestaurants handle={handleWindowRestaurants} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
