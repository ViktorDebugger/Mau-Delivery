"use client";

import { useState, useRef, useEffect } from "react";
import type { NutritionType } from "@/types/dish.types";

interface CaloriesProps {
  nutrition: NutritionType;
}

const Calories = ({ nutrition }: CaloriesProps) => {
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
          Calorie table
        </button>
        <div
          className={`absolute -right-6 bottom-14 z-40 w-60 rounded-4xl border-4 border-[#F2680F] bg-[#FAB735] p-4 shadow-2xl transition-all duration-300 ease-in-out ${
            isOpen
              ? "visible -translate-y-2 opacity-100"
              : "pointer-events-none invisible translate-y-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 text-2xl">
            <div className="flex justify-between rounded-2xl bg-[#F2680F] px-2 py-1">
              <span>Calories</span>
              <span className="font-bold">{nutrition.calories} kcal</span>
            </div>

            <div className="flex justify-between rounded-2xl bg-[#F2680F] px-2 py-1">
              <span>Protein</span>
              <span className="font-bold">{nutrition.protein} g</span>
            </div>

            <div className="flex justify-between rounded-2xl bg-[#F2680F] px-2 py-1">
              <span>Fats</span>
              <span className="font-bold">{nutrition.fat} g</span>
            </div>

            <div className="flex justify-between rounded-2xl bg-[#F2680F] px-2 py-1">
              <span>Carbs</span>
              <span className="font-bold">{nutrition.carbs} g</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calories;
