import Image from "next/image";
import Link from "next/link";

import { useState, useMemo } from "react";
import { X } from "lucide-react";

import SearchInput from "../Other/SearchInput";
import Filter from "../Menu/Filter";

import { dishesData } from "../../../public/DishesData";
import type { FilterValues } from "../Menu/Filter";
import type { Dish } from "@/types/dish.types";

interface WindowDishesProps {
  handleClose: () => void;
}

const Dishes = ({ handleClose }: WindowDishesProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [activeFilters, setActiveFilters] = useState<FilterValues>({
    minPrice: null,
    maxPrice: null,
    minRating: null,
    maxRating: null,
  });

  const handleApplyFilters = (filters: FilterValues) => {
    setActiveFilters(filters);
  };

  const filteredDishes: Dish[] = useMemo<Dish[]>(() => {
    return dishesData.filter((dish: Dish) => {
      const term = searchInput.toLowerCase();
      const nameMatch = dish.name.toLowerCase().includes(term);

      const price = dish.price;
      const priceMatch =
        (activeFilters.minPrice === null || price >= activeFilters.minPrice) &&
        (activeFilters.maxPrice === null || price <= activeFilters.maxPrice);

      const rating = dish.rating;
      const ratingMatch =
        (activeFilters.minRating === null ||
          rating >= activeFilters.minRating) &&
        (activeFilters.maxRating === null || rating <= activeFilters.maxRating);

      return nameMatch && priceMatch && ratingMatch;
    });
  }, [searchTerm, activeFilters]);

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  return (
    <>
      <div className="flex w-full items-center justify-start gap-2 sm:justify-center md:mt-0 md:gap-8">
        <SearchInput
          value={searchInput}
          onChange={setSearchInput}
          onSearch={handleSearch}
        />
        <Filter
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onApply={handleApplyFilters}
          onOpen={() => setIsOpen(true)}
        />
      </div>

      <button onClick={handleClose} className="absolute top-4 right-3 block md:hidden">
        <X size={32} />
      </button>

      <div className="custom-scrollbar-1 mt-2 lg:mt-8 max-h-[500px] lg:max-h-[520px] overflow-y-auto">
        <ul className="mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredDishes.map((dish) => (
            <li
              key={dish.id}
              className="flex shrink-0 rounded-4xl bg-[#F6DA9E] p-2 transition-colors duration-300 ease-in-out hover:bg-[#EAC984]"
            >
              <Link
                href={`/dish/${dish.id}`}
                passHref
                onClick={() => handleClose()}
                className="flex h-full w-full cursor-pointer items-center gap-4"
              >
                <div className="relative h-24 w-24 overflow-hidden rounded-4xl">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
                <div className="w-3/4">
                  <h1 className="line-clamp-2x text-xl md:text-3xl font-bold">
                    {dish.name}
                  </h1>
                  <h2 className="line-clamp-1 text-lg md:text-2xl">{dish.restaurant}</h2>
                  <div className="flex justify-end text-2xl font-bold">
                    <p className="rounded-4xl bg-[#FAB735]/60 px-4">
                      {dish.price} UAN
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dishes;
