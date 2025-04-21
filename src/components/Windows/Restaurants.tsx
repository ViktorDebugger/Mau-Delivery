import Link from "next/link";
import Image from "next/image";

import { useState, useMemo } from "react";
import { X } from "lucide-react";

import SearchInput from "../Other/SearchInput";
import { restaurantsData } from "../../../public/RestaurantsData";
import type { Restaurant } from "@/types/restaurant.types";

interface WindowRestaurantsProps {
  handleClose: () => void;
}

const Restaurants = ({ handleClose }: WindowRestaurantsProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredRestaurants: Restaurant[] = useMemo(() => {
    return restaurantsData.filter((restaurant: Restaurant) => {
      const term = searchInput.toLowerCase();
      return restaurant.name.toLowerCase().includes(term);
    });
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  return (
    <>
      <div className="flex w-full items-center justify-start sm:justify-center md:mt-0">
        <SearchInput
          value={searchInput}
          onChange={setSearchInput}
          onSearch={handleSearch}
        />
      </div>
      <button onClick={handleClose} className="absolute top-6 right-4">
        <X size={32} />
      </button>
      <div className="custom-scrollbar-1 mt-2 lg:mt-8 max-h-[500px] lg:max-h-[520px] overflow-y-auto">
        <ul className="mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredRestaurants.map((restaurant) => (
            <li
              key={restaurant.id}
              className="flex shrink-0 items-center gap-3 rounded-4xl bg-[#F6DA9E] p-2 transition-colors duration-300 ease-in-out hover:bg-[#EAC984]"
            >
              <Link
                href={`/restaurant/${restaurant.id}`}
                passHref
                onClick={() => handleClose()}
                className="flex h-full w-full cursor-pointer items-center gap-4"
              >
                <div className="relative h-24 w-24 overflow-hidden rounded-4xl">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
                <div className="w-3/4">
                  <h1 className="line-clamp-2 text-2xl md:text-4xl font-bold">
                    {restaurant.name}
                  </h1>
                  <h2 className="line-clamp-1 text-lg md:text-2xl">
                    {restaurant.address}
                  </h2>
                  <div className="flex justify-end">
                    <ul className="flex gap-1 rounded-4xl bg-[#FFFFFF] px-2 text-2xl">
                      {[...Array(5)].map((_, index) => (
                        <li
                          key={index}
                          className={`${
                            index < Math.floor(restaurant.rating)
                              ? "text-[#FAB735]"
                              : "text-[#D1D5DB]"
                          }`}
                        >
                          ★
                        </li>
                      ))}
                    </ul>
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

export default Restaurants;
