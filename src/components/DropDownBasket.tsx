"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const DropDownBasket = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

  function handleOpen() {
    setIsOpen((o) => !o);
  }

  return (
    <div className="relative" ref={menuRef}>
      <div
        onClick={() => handleOpen()}
        className={`flex flex-col cursor-pointer hover:bg-[#FFBA26] transition ease-in-out duration-300 px-4 py-2 rounded-4xl ${
          isOpen ? "bg-[#FFBA26]" : "bg-none"
        }`}
      >
        <button className="cursor-pointer">
          <Image
            src="/images/icons/basket.png"
            alt="basket"
            width={50}
            height={50}
          />
        </button>
      </div>
      <div
        className={`absolute z-1 top-[70px] left-[50px] w-[300px] bg-[#F2680F] rounded-4xl p-4 shadow-lg transition-all ease-in-out duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-[-10px] invisible pointer-events-none"
        }`}
      >
        <button
          onClick={() => handleOpen()}
          className="bg-[#FFBA26] hover:bg-[#ffa526] transition duration-300 ease-in-out w-[30px] h-[30px] flex justify-center items-center rounded-4xl cursor-pointer absolute top-[10px] right-[10px]"
        >
          <Image src="/images/icons/x.png" alt="x" width={20} height={20} />
        </button>
        <ul className="flex flex-col gap-6">
          <li className="flex gap-1 text-[25px]">
            <Image
              className="rounded-4xl"
              src="/images/dishes/basket-item.png"
              alt="dish"
              width={72}
              height={70}
            />
            <h1 className="leading-[0.5]">Borch</h1>
            <div className="flex items-end gap-[25px]">
              <div className="bg-[#FFBA26] rounded-4xl flex justify-center items-center px-[12px] leading-[1] pb-[7px]">
                1
              </div>
              <div>230 UAH</div>
            </div>
          </li>
          <li className="flex gap-1 text-[25px]">
            <Image
              className="rounded-4xl"
              src="/images/dishes/basket-item.png"
              alt="dish"
              width={72}
              height={70}
            />
            <h1 className="leading-[0.5]">Borch</h1>
            <div className="flex items-end gap-[25px]">
              <div className="bg-[#FFBA26] rounded-4xl flex justify-center items-center px-[12px] leading-[1] pb-[7px]">
                1
              </div>
              <div className="">230 UAH</div>
            </div>
          </li>
          <li className="flex gap-1 text-[25px]">
            <Image
              className="rounded-4xl"
              src="/images/dishes/basket-item.png"
              alt="dish"
              width={72}
              height={70}
            />
            <h1 className="leading-[0.5]">Borch</h1>
            <div className="flex items-end gap-[25px]">
              <div className="bg-[#FFBA26] rounded-4xl flex justify-center items-center px-[12px] leading-[1] pb-[7px]">
                1
              </div>
              <div className="">230 UAH</div>
            </div>
          </li>
        </ul>
        <div className="flex justify-between mt-[70px]">
          <p>Total:</p>
          <p>230 UAH</p>
        </div>
      </div>
    </div>
  );
};

export default DropDownBasket;
