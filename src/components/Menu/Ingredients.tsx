"use client";

import { useState, useRef, useEffect } from "react";

interface CaloriesProps {
  ingradients: string[];
}

const Ingredients = ({ ingradients }: CaloriesProps) => {
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
    };
  }, []);

  const handleOpen = () => {
    setIsOpen((o) => !o);
  };

  return (
    <div className="relative" ref={menuRef}>
      <div className="relative flex justify-end">
        <button
          onClick={() => handleOpen()}
          className="cursor-pointer rounded-4xl bg-[#FAB735] px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
        >
          Ingredients
        </button>
        <div
          className={`absolute bottom-14 -left-6 z-40 w-60 rounded-4xl border-4 border-[#F2680F] bg-[#FAB735] p-4 shadow-2xl transition-all duration-300 ease-in-out ${
            isOpen
              ? "visible -translate-y-2 opacity-100"
              : "pointer-events-none invisible translate-y-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-2 text-2xl">
            {ingradients.map((ingradient) => (
              <li
                key={ingradient}
                className="flex justify-between rounded-2xl bg-[#F2680F] px-2 py-1"
              >
                <span>{ingradient} kcal</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
