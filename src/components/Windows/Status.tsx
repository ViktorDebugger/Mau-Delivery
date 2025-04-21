import Image from "next/image";

import { X } from "lucide-react";

import status from "../../../public/images/bg-items/status.png";
import courier from "../../../public/images/icons/user.png";

interface WindowStatusProps {
  handleClose: () => void;
}

const Status = ({ handleClose }: WindowStatusProps) => {
  const strings = [
    "accepted",
    "cooking",
    "courier search",
    "on the way",
    "delivered",
  ];

  return (
    <div className="flex flex-col items-center">
      <button onClick={handleClose} className="absolute top-4 right-3 block md:hidden">
        <X size={32} />
      </button>
      <h1 className="font-karantina text-center text-6xl md:text-8xl">Order Status</h1>{" "}
      <div className="relative mt-10 h-2 md:h-4 w-9/10 rounded-full bg-[#F2680F]">
        <ul className="flex justify-between text-3xl">
          {strings.map((str, index) => (
            <li key={index} className="relative -top-1 md:-top-2 z-10">
              <div
                className={`w-4 h-4 md:h-8 md:w-8 rounded-full ${
                  index < 3 ? "bg-[#EF4444]" : "bg-[#F2680F]"
                }`}
              ></div>
              <p className="absolute -right-28 w-64 text-center text-sm sm:text-lg md:text-xl lg:text-2xl">
                {str}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 flex flex-col md:flex-row w-full items-center justify-between text-3xl">
        <div className="flex w-full md:w-4/10 items-center gap-4 rounded-4xl bg-[#F2680F] p-4">
          <div className="w-2/10 xl:w-3/10">
            <Image
              src={courier}
              alt=""
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="text-xl lg:text-2xl">
            <p>Courier</p>
            <p>+380000000000</p>
          </div>
        </div>
        <div className="w-full flex justify-center md:w-2/10 mt-4 md:mt-0">
          <Image
            src={status}
            alt="User Profile"
            width={200}
            height={250}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Status;
