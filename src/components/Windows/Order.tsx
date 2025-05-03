import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { useCart } from "@/context/CartContext";
import { getUserData } from "@/db/User";
import { saveOrder } from "@/db/Order";
import { useOrders } from "@/context/OrderContext";

interface WindowDishesProps {
  handleClose: () => void;
}

const Order = ({ handleClose }: WindowDishesProps) => {
  const { addOrder } = useOrders();
  const { user } = useAuth();
  const { cart, setCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"Cash" | "Card">("Cash");

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExpiry, setCardExpiry] = useState<string>("");
  const [cardCVC, setCardCVC] = useState<string>("");

  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectTimeAuto, setSelectTimeAuto] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const data = await getUserData(user.uid);
        setFirstName(data!.firstName);
        setLastName(data!.lastName);
        setPhone(data!.phone);
        setEmail(data!.email);
        setAddress(data!.address);
      }
    };
    fetchUserData();
  }, [user]);

  const getAsSoonAsPossibleTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 30);
    return now.toISOString();
  };

  const handleSelectAsSoonAsPossible = () => {
    setSelectTimeAuto(true);
    setSelectedTime("");
  };

  const handleManualTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;
    setSelectTimeAuto(false);
    setSelectedTime(time);
  };

  const formatTimeForDisplay = (time: string) => {
    const date = new Date(time);
    if (isNaN(date.getTime())) {
      return time;
    }
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSubmit = async () => {
    let timeResult = "";
    if (!selectTimeAuto) {
      const [hours, minutes] = selectedTime.split(":").map(Number);
      const now = new Date();
      const selectedDateTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours,
        minutes,
        0,
        0,
      );

      const minAllowedTime = new Date();
      minAllowedTime.setMinutes(minAllowedTime.getMinutes() + 30);

      const maxAllowedTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        0,
        0,
        0,
      );

      if (
        isNaN(selectedDateTime.getTime()) ||
        selectedDateTime < minAllowedTime ||
        selectedDateTime > maxAllowedTime
      ) {
        toast.error(
          `Invalid time. Please select a time between ${formatTimeForDisplay(
            minAllowedTime.toISOString(),
          )} and ${formatTimeForDisplay(maxAllowedTime.toISOString())}.`,
          {
            className: "toast-error custom-toast",
            hideProgressBar: true,
            autoClose: 3000,
            closeOnClick: true,
            icon: false,
            position: "top-center",
          },
        );
        return;
      }

      timeResult = selectedDateTime.toISOString();
    } else {
      timeResult = getAsSoonAsPossibleTime();
    }

    const orderData = {
      totalAmount: cart.reduce(
        (accum, cur) => accum + cur.quantity * cur.price,
        0,
      ),
      totalQuantity: cart.reduce((accum, cur) => accum + cur.quantity, 0),
      paymentMethod,
      selectedTime: timeResult,
      comment,
      dishes: cart.map((item) => ({
        dishId: item.dishId,
        restaurantId: item.restaurantId,
        restaurant: item.restaurant,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
        name: item.name,
      })),
      cardDetails:
        paymentMethod === "Card" ? { cardNumber, cardExpiry, cardCVC } : null,
      userId: user?.uid || "",
      user: {
        firstName: firstName || "",
        lastName: lastName || "",
        phone: phone || "",
        email: email || "",
        address: address || "",
      },
    };

    try {
      const docRef = await saveOrder(orderData);
      addOrder({
        id: docRef,
        ...orderData,
      });
      toast.success(`Order successfully created!`, {
        className: "toast-success custom-toast",
        hideProgressBar: true,
        autoClose: 3000,
        closeOnClick: true,
        icon: false,
        position: "top-center",
      });
      setCart([]);
      handleClose();
    } catch (error) {
      toast.error("Failed to create order. Please try again.", {
        className: "toast-error custom-toast",
        hideProgressBar: true,
        autoClose: 3000,
        closeOnClick: true,
        icon: false,
        position: "top-center",
      });
      console.error("Failed to save order:", error);
    }
  };

  const handleIncreaseQuantity = (dishId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.dishId === dishId
          ? {
              ...item,
              quantity: item.quantity + 1,
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
  }, [cart, handleClose]);

  return (
    <div className="custom-scrollbar-1 grid h-[calc(100vh-100px)] grid-cols-1 gap-8 overflow-y-auto text-2xl md:grid-cols-2">
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
                        <figure className="relative h-16 w-16 overflow-hidden">
                          <Image
                            className="rounded-2xl object-cover"
                            src={item.image}
                            alt="dish"
                            fill
                            sizes="64px"
                          />
                        </figure>
                        <div>
                          <h1 className="line-clamp-1">{item.name}</h1>
                          <p>{item.price * item.quantity} UAN</p>
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
                    {cart.reduce(
                      (accum, cur) => accum + cur.price * cur.quantity,
                      0,
                    )}
                    UAN
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

        <button
          onClick={handleSubmit}
          className="mt-4 w-1/3 cursor-pointer rounded-full bg-[#F2680F] pb-2 text-3xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F]"
        >
          Submit
        </button>
      </div>

      <div className="flex flex-col text-xl">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            className="rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            className="rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            className="rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          type="text"
          className="mt-4 rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
          placeholder="Street, 40"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <textarea
          className="mt-4 cursor-pointer resize-none rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
          placeholder="Comment on the order"
          maxLength={140}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <h1 className="my-1 text-center text-3xl">Payment method</h1>
        <div className="flex w-full justify-center gap-4">
          <button
            onClick={() => setPaymentMethod("Card")}
            className={`w-full cursor-pointer rounded-4xl px-6 py-2 transition-colors duration-100 ease-in-out ${
              paymentMethod === "Card" ? "bg-[#F2A30F]" : "bg-[#FAB735]"
            }`}
          >
            Card
          </button>

          <button
            onClick={() => setPaymentMethod("Cash")}
            className={`w-full cursor-pointer rounded-4xl px-6 py-2 transition-colors duration-100 ease-in-out ${
              paymentMethod === "Cash" ? "bg-[#F2A30F]" : "bg-[#FAB735]"
            }`}
          >
            Cash
          </button>
        </div>
        <motion.div
          className={`mt-2 w-full rounded-4xl border-2 border-[#FAB735] bg-[#FBE7BB] p-4`}
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{
            maxHeight: paymentMethod === "Card" ? "240px" : 0,
            opacity: paymentMethod === "Card" ? 1 : 0,
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
              type="number"
              className="w-full appearance-none rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
              placeholder="Number"
              autoComplete="off"
              value={cardNumber}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 16) {
                  setCardNumber(value);
                }
              }}
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                className="appearance-none rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
                placeholder="Valid until"
                autoComplete="off"
                value={cardExpiry}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 4) {
                    setCardExpiry(value);
                  }
                }}
              />
              <input
                type="number"
                className="appearance-none rounded-4xl bg-[#FAB735] px-4 py-2 placeholder:text-[#000000]/70 focus:outline-none"
                placeholder="Code"
                autoComplete="off"
                value={cardCVC}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 3) {
                    setCardCVC(value);
                  }
                }}
              />
            </div>
          </div>
        </motion.div>
        <h1 className="mb-4 text-center text-3xl">Time</h1>
        <div className="flex w-full justify-center gap-4">
          <button
            onClick={handleSelectAsSoonAsPossible}
            className={`w-full cursor-pointer rounded-4xl px-6 py-2 transition-colors duration-100 ease-in-out ${
              selectTimeAuto ? "bg-[#F2A30F]" : "bg-[#FAB735]"
            }`}
          >
            As soon as possible (
            {formatTimeForDisplay(getAsSoonAsPossibleTime())})
          </button>
          <input
            type="text"
            onClick={() => setSelectTimeAuto(false)}
            placeholder="Choose time (HH:MM)"
            className={`w-full cursor-pointer rounded-4xl px-6 py-2 transition-colors duration-100 ease-in-out focus:outline-none ${
              !selectTimeAuto ? "bg-[#F2A30F]" : "bg-[#FAB735]"
            }`}
            value={
              selectTimeAuto ? formatTimeForDisplay(selectedTime) : selectedTime
            }
            onChange={(e) => {
              handleManualTimeChange(e);
              setSelectTimeAuto(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
