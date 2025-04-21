import Image from "next/image";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, X } from "lucide-react";

import { useCart } from "@/context/CartContext";
import { dishesData } from "../../../public/DishesData";

interface WindowDishesProps {
  handleClose: () => void;
}

const Order = ({ handleClose }: WindowDishesProps) => {
  const { cart, setCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card">("cash");
  const [selectTimeAuto, setSelectTimeAuto] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const findDish = (dishId: string) => {
    return dishesData.find((dish) => dish.id === dishId);
  };
  const handleIncreaseQuantity = (dishId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.dishId === dishId
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: (findDish(item.dishId)?.price || 0) * (item.quantity + 1),
            }
          : item,
      ),
    );
  };

  const handleDecreaseQuantity = (dishId: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.dishId === dishId && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
                price:
                  (findDish(item.dishId)?.price || 0) * (item.quantity - 1),
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.dishId !== dishId));
  };

  useEffect(() => {
    if (!cart.length) {
      handleClose();
    }
  }, [cart]);

  return (
    <div className="custom-scrollbar-1 grid grid-cols-1 gap-8 overflow-y-auto text-2xl md:grid-cols-2 h-[calc(100vh-100px)]">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 block lg:hidden"
      >
        <X size={32} />
      </button>
      <div className="flex flex-col items-center">
        <div className="z-1 flex h-[500px] w-full flex-col justify-between gap-2 rounded-4xl bg-[#F2680F] p-4">
          {cart.length && (
            <>
              <motion.ul
                layout
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="custom-scrollbar-2 flex h-3/4 flex-col gap-2 overflow-y-auto"
              >
                <AnimatePresence mode="sync">
                  {cart.map((item) => (
                    <motion.li
                      key={item.dishId}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }}
                      layout
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex justify-between gap-1 rounded-2xl bg-[#FBE7BB] p-2"
                    >
                      <div className="flex gap-4">
                        <Image
                          className="rounded-2xl"
                          src={findDish(item.dishId)?.image || ""}
                          alt="dish"
                          width={72}
                          height={70}
                        />
                        <div>
                          <h1 className="line-clamp-1">
                            {findDish(item.dishId)?.name}
                          </h1>
                          <p>{item.price} UAN</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center rounded-lg bg-[#FAB735] px-2">
                          <p className="-mt-2">{item.quantity}</p>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <button
                            onClick={() => handleIncreaseQuantity(item.dishId)}
                            className="flex cursor-pointer items-center justify-center rounded-xl bg-[#FAB735] transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
                          >
                            <ChevronUp size={24} />
                          </button>
                          <button
                            onClick={() => handleDecreaseQuantity(item.dishId)}
                            className="flex cursor-pointer items-center justify-center rounded-xl bg-[#FAB735] transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
                          >
                            <ChevronDown size={24} />
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.dishId)}
                          className="flex cursor-pointer items-center justify-center rounded-2xl bg-[#FAB735] transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
                        >
                          <X size={24} />
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
              <div className="flex flex-col rounded-2xl bg-[#FBE7BB] px-4 py-1">
                <div className="flex justify-between">
                  <p>Total price</p>
                  <p className="font-bold">
                    {cart.reduce((accum, cur) => accum + cur.price, 0)} UAN
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Total quantity</p>
                  <p className="font-bold">
                    {cart.reduce((accum, cur) => accum + cur.quantity, 0)}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <button className="mt-4 w-1/3 cursor-pointer rounded-full bg-[#F2680F] pb-2 text-3xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F]">
          Submit
        </button>
      </div>

      <div className="flex flex-col text-xl">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            className="rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
            placeholder="First name"
          />
          <input
            type="text"
            className="rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
            placeholder="Last name"
          />
          <input
            type="text"
            className="rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
            placeholder="Phone"
          />
          <input
            type="text"
            className="rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
            placeholder="Email"
          />
          <input
            type="text"
            className="rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
            placeholder="City"
          />
          <input
            type="text"
            className="rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
            placeholder="Street, 40"
          />
        </div>
        <h1 className="my-4 text-center text-3xl">Payment method</h1>
        <div className="flex w-full justify-center gap-4">
          <button
            onClick={() => setPaymentMethod("card")}
            className={`w-full cursor-pointer rounded-4xl px-6 py-2 transition-colors duration-100 ease-in-out ${
              paymentMethod === "card" ? "bg-[#F2A30F]" : "bg-[#FAB735]"
            }`}
          >
            Card
          </button>

          <button
            onClick={() => setPaymentMethod("cash")}
            className={`w-full cursor-pointer rounded-4xl px-6 py-2 transition-colors duration-100 ease-in-out ${
              paymentMethod === "cash" ? "bg-[#F2A30F]" : "bg-[#FAB735]"
            }`}
          >
            Cash
          </button>
        </div>
        <motion.div
          className={`mt-2 w-full rounded-4xl border-2 border-[#FAB735] bg-[#FBE7BB] p-4`}
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{
            maxHeight: paymentMethod === "card" ? "240px" : 0,
            opacity: paymentMethod === "card" ? 1 : 0,
          }}
          exit={{
            maxHeight: 0,
            opacity: 0,
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{ overflow: "hidden" }}
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="w-full rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
              placeholder="Number"
              maxLength={16}
              autoComplete="off"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
                placeholder="Valid until"
                maxLength={5}
                autoComplete="off"
              />
              <input
                type="text"
                className="rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
                placeholder="Code"
                maxLength={3}
                autoComplete="off"
              />
            </div>
          </div>
        </motion.div>
        <h1 className="mb-4 text-center text-3xl">Time</h1>
        <div className="flex w-full justify-center gap-4">
          <button
            onClick={() => setSelectTimeAuto(true)}
            className={`w-full cursor-pointer rounded-4xl px-6 py-2 transition-colors duration-100 ease-in-out ${
              selectTimeAuto ? "bg-[#F2A30F]" : "bg-[#FAB735]"
            }`}
          >
            As soon as possible 18:00
          </button>
          <input
            type="text"
            onClick={() => setSelectTimeAuto(false)}
            placeholder="Choose time (00:00)"
            className={`w-full cursor-pointer rounded-4xl px-6 py-2 transition-colors duration-100 ease-in-out focus:outline-none ${
              !selectTimeAuto ? "bg-[#F2A30F]" : "bg-[#FAB735]"
            }`}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
        </div>
        <textarea
          className="mt-4 cursor-pointer resize-none rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
          placeholder="Comment on the order"
          maxLength={140}
        ></textarea>
      </div>
    </div>
  );
};

export default Order;
