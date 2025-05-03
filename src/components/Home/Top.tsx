"use client";

import CardDishTop from "@/components/Home/CardDishTop";
import { useState, useEffect } from "react";
import { getAllDishesFromFirestore } from "@/db/Dish";
import type { DishType } from "@/types/dish.types";
import { MoonLoader } from "react-spinners";

const Top = () => {
  const [dishesData, setDishesData] = useState<DishType[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

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

  return (
    <section id="top-section" className="relative mt-96" data-aos="fade-up" data-aos-offset="400">
      <div>
        <h1 className="font-karantina relative z-1 text-center text-8xl">
          Top 10
        </h1>
        <>
          {" "}
          {loading ? (
            <div className="flex justify-center mt-20 mb-40">
              <MoonLoader color="#F2680F" size={100} />
            </div>
          ) : notFound ? (
            <h1 className="text-center text-4xl font-bold mt-20 mb-40">Dishes not found</h1>
          ) : (
            <div className="relative mt-6 flex overflow-hidden">
              <ul className="animate-infinite-scroll-horizontal-top flex shrink-0 gap-4">
                {dishesData.slice(0, 10).map((dish: DishType) => (
                  <CardDishTop key={dish.id} dish={dish} />
                ))}
                {dishesData.slice(0, 10).map((dish: DishType) => (
                  <CardDishTop key={dish.id} dish={dish} />
                ))}
              </ul>
            </div>
          )}
        </>
      </div>
    </section>
  );
};

export default Top;
