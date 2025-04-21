import Image from "next/image";

import type { DishTop } from "@/components/Home/Top";

interface Props {
  dish: DishTop;
}

const CardDishTop = ({ dish }: Props) => {
  const image =
    "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201795/dishes/pepperoni.webp";

  return (
    <li className="relative z-1 w-74 rounded-4xl bg-[#F2680F] px-4 py-4">
      <div className="flex justify-center">
        <div className="relative h-48 w-64">
          <Image
            className="rounded-4xl object-cover"
            src={image}
            alt="dish"
            fill
            sizes="250px"
          />
        </div>
      </div>

      <h1 className="line-clamp-1 text-4xl font-bold">{dish.nameRestaurant}</h1>
      <p className="line-clamp-1 text-2xl">{dish.nameDish}</p>
      <div className="flex justify-end">
        <p className="rounded-4xl bg-[#FAB735]/40 px-4 text-2xl leading-[1.3] font-bold">
          {dish.price} UAN
        </p>
      </div>
      <ul className="mt-4 flex flex-col gap-2">
        {dish.comments.map((item, index) => (
          <li
            key={index}
            className="relative rounded-4xl bg-[#FAB735] px-4 py-1"
          >
            <ul className="absolute top-2 right-2 flex gap-1 rounded-4xl bg-[#FFFFFF] px-2 text-xl">
              {[...Array(5)].map((_, index) => (
                <li key={index} className="text-[#FAB735]">
                  ★
                </li>
              ))}
            </ul>
            <h1 className="text-2xl font-bold">{item.nameUser}</h1>
            <p className="line-clamp-1 text-lg">{item.commentText}</p>
            <p className="text-right">{item.time}</p>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CardDishTop;
