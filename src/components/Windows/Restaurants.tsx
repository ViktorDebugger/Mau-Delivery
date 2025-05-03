import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { X } from "lucide-react";
import { MoonLoader } from "react-spinners";
import { getAllRestaurantsFromFirestore } from "@/db/Restaurant";
import SearchInput from "../Other/SearchInput";
import type { RestaurantType } from "@/types/restaurant.types";

interface WindowRestaurantsProps {
  handleClose: () => void;
}

const Restaurants = ({ handleClose }: WindowRestaurantsProps) => {
  const [restaurantsData, setRestaurantsData] = useState<RestaurantType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      const restaurants = await getAllRestaurantsFromFirestore();
      setRestaurantsData(restaurants);
      setLoading(false);
      setNotFound(restaurants.length === 0);
    };

    fetchRestaurants();
  }, []);

  const filteredRestaurants: RestaurantType[] = useMemo(() => {
    const results = restaurantsData.filter((restaurant: RestaurantType) => {
      const term = searchTerm.toLowerCase();
      return restaurant.name?.toLowerCase().includes(term);
    });

    setNotFound(results.length === 0);

    return results;
  }, [searchTerm, restaurantsData]);

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
      <button onClick={handleClose} className="absolute top-6 right-4 lg:hidden">
        <X size={32} />
      </button>
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <MoonLoader color="#F2680F" loading={loading} size={100} />
        </div>
      ) : notFound ? (
        <div className="mt-6 flex h-9/10 items-center justify-center rounded-2xl bg-[#F6DA9E] text-3xl">
          Restaurants not found
        </div>
      ) : (
        <div className="custom-scrollbar-1 mt-2 overflow-y-auto lg:mt-8 max-h-9/10 h-full">
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
                  <figure className="relative h-24 w-24 overflow-hidden rounded-4xl">
                    <Image
                      src={restaurant.image}
                      alt={restaurant.name}
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </figure>
                  <div className="w-3/4">
                    <h1 className="line-clamp-2 text-2xl font-bold md:text-4xl">
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
      )}
    </>
  );
};

export default Restaurants;
