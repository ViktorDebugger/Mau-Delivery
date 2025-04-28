import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { X } from "lucide-react";
import { MoonLoader } from "react-spinners";
import { getAllDishesFromFirestore } from "@/db/Dish";
import SearchInput from "../Other/SearchInput";
import Filter from "../Menu/Filter";
import type { FilterValues } from "../Menu/Filter";
import type { DishType } from "@/types/dish.types";

interface WindowDishesProps {
  handleClose: () => void;
}

const Dishes = ({ handleClose }: WindowDishesProps) => {
  const [dishesData, setDishesData] = useState<DishType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFilters, setActiveFilters] = useState<FilterValues>({
    minPrice: null,
    maxPrice: null,
    minRating: null,
    maxRating: null,
  });

  useEffect(() => {
    const fetchDishes = async () => {
      setLoading(true);
      const dishes = await getAllDishesFromFirestore();
      setDishesData(dishes);
      setLoading(false);
      setNotFound(dishes.length === 0);
    };

    fetchDishes();
  }, []);

  const handleApplyFilters = (filters: FilterValues) => {
    setActiveFilters(filters);
  };

  const filteredDishes: DishType[] = useMemo<DishType[]>(() => {
    const results = dishesData.filter((dish: DishType) => {
      const term = searchTerm.toLowerCase();
      const nameMatch = dish.name?.toLowerCase().includes(term);

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

    setNotFound(results.length === 0);

    return results;
  }, [searchTerm, activeFilters, dishesData]);

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

      <button
        onClick={handleClose}
        className="absolute top-4 right-3 lg:hidden"
      >
        <X size={32} />
      </button>

      {loading ? (
        <div className="flex h-full items-center justify-center">
          <MoonLoader color="#F2680F" loading={loading} size={100} />
        </div>
      ) : notFound ? (
        <div className="mt-6 flex h-9/10 items-center justify-center rounded-2xl bg-[#F6DA9E] text-3xl">
          Dishes not found
        </div>
      ) : (
        <div className="custom-scrollbar-1 mt-2 overflow-y-auto lg:mt-8 max-h-9/10 h-full">
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
                    <h1 className="line-clamp-2x text-xl font-bold md:text-3xl">
                      {dish.name}
                    </h1>
                    <h2 className="line-clamp-1 text-lg md:text-2xl">
                      {dish.restaurant}
                    </h2>
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
      )}
    </>
  );
};

export default Dishes;
