import Image from "next/image";
import { X } from "lucide-react";
import status from "../../../public/images/bg-items/status.png";
import { userIcon } from "@/types/user.types";

interface WindowStatusProps {
  handleClose: () => void;
  selectedTime: string;
  createdAt: string;
}

const Status = ({
  handleClose,
  selectedTime,
  createdAt,
}: WindowStatusProps) => {
  const strings = [
    "accepted",
    "cooking",
    "courier search",
    "on the way",
    "delivered",
  ];

  const relation = Math.max(
    0,
    Math.min(
      100,
      Number(
        (
          100 -
          ((new Date(selectedTime).getTime() - Date.now()) /
            (new Date(selectedTime).getTime() -
              new Date(createdAt).getTime())) *
            100
        ).toFixed(0),
      ),
    ),
  );

  const currentStage = Math.floor(relation / 20) - 1;

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleClose}
        className="absolute top-4 right-3 block md:hidden"
      >
        <X size={32} />
      </button>
      <h1 className="font-karantina text-center text-6xl md:text-8xl">
        Order Status
      </h1>
      <div className="relative mt-10 h-2 w-9/10 rounded-full bg-[#F2680F] md:h-4">
        <ul className="flex justify-between text-3xl">
          {strings.map((str, index) => (
            <li key={index} className="relative -top-1 z-10 md:-top-2">
              <div
                className={`h-4 w-4 rounded-full md:h-8 md:w-8 ${
                  index <= currentStage ? "bg-[#F20E0E]" : "bg-[#F2680F]"
                }`}
              ></div>
              <p className="absolute -right-28 w-64 text-center text-sm sm:text-lg md:text-xl lg:text-2xl">
                {str}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 flex w-full flex-col items-center justify-between text-3xl md:flex-row">
        <div className="flex w-full items-center gap-4 rounded-4xl bg-[#F2680F] p-4 md:w-4/10">
          <figure className="w-2/10 xl:w-3/10">
            <Image
              src={userIcon}
              alt=""
              width={100}
              height={100}
              className="rounded-full"
            />
          </figure>
          <div className="text-xl lg:text-2xl">
            <p>Courier</p>
            <p>+380000000000</p>
          </div>
        </div>
        <figure className="mt-4 flex w-full justify-center md:mt-0 md:w-2/10">
          <Image src={status} alt="User Profile" width={200} height={250} />
        </figure>
      </div>
    </div>
  );
};

export default Status;
