import { useState } from "react";
import { X } from "lucide-react";

interface WindowCommentProps {
  handleClose: () => void;
}

const Comment = ({ handleClose }: WindowCommentProps) => {
  const [stars, setStars] = useState<number>(0);

  return (
    <>
      <button onClick={handleClose} className="absolute top-4 right-3 block md:hidden">
        <X size={32} />
      </button>
      <h1 className="font-karantina text-center text-5xl md:text-8xl">
        Comment a Restaurant
      </h1>{" "}
      <textarea
        className="mt-4 h-72 w-full resize-none rounded-4xl bg-[#FAB735] px-4 py-2 text-3xl placeholder:text-[#000000]/70 focus:outline-none"
        placeholder="Leave a comment"
        maxLength={300}
      ></textarea>
      <div className="mt-4 flex flex-col md:flex-row items-center justify-between">
        <ul className="flex gap-6 rounded-4xl bg-[#FFFFFF] px-4 py-1 text-4xl">
          {[...Array(5)].map((_, index) => (
            <li
              key={index}
              className={`${
                index < stars ? "text-[#FAB735]" : "text-[#9CA3AF]"
              }`}
            >
              <button
                onClick={() => setStars(index + 1)}
                className="cursor-pointer"
              >
                ★
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleClose()}
          className="cursor-pointer rounded-full mt-4 md:mt-0 bg-[#F2680F] px-12 py-2 text-4xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F]"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Comment;
