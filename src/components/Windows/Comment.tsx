import { useState } from "react";
import { X } from "lucide-react";
import { saveDishReview, saveRestaurantReview } from "@/db/Reviews";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";

interface CommentProps {
  handleClose: () => void;
  title: string;
  id: string;
  type: "dish" | "restaurant";
}

const Comment = ({ handleClose, title, id, type }: CommentProps) => {
  const { user, userData } = useAuth();
  const [stars, setStars] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = async () => {
    if (stars === 0) {
      toast.error("Please select a rating!", {
        className: "toast-error custom-toast",
        hideProgressBar: true,
        autoClose: 3000,
        closeOnClick: true,
        icon: false,
        position: "top-center",
      });
      return;
    }
    if (comment.length < 10) {
      toast.error("Comment is too short!", {
        className: "toast-error custom-toast",
        hideProgressBar: true,
        autoClose: 3000,
        closeOnClick: true,
        icon: false,
        position: "top-center",
      });
      return;
    }
    try {
      if (type === "dish") {
        await saveDishReview({
          userId: user!.uid,
          dishId: id,
          text: comment,
          type: "dish",
          stars,
          dishName: title,
          username: `${userData?.firstName} ${userData?.lastName}`,
          rating: 0,
          timestamp: new Date().toISOString(),
        });
        toast.success("Dish review saved successfully!", {
          className: "toast-success custom-toast",
          hideProgressBar: true,
          autoClose: 3000,
          closeOnClick: true,
          icon: false,
          position: "top-center",
        });
      } else if (type === "restaurant") {
        await saveRestaurantReview({
          userId: user!.uid,
          restaurantId: id,
          restaurantName: title,
          text: comment,
          type: "restaurant",
          stars,
          username: `${userData?.firstName} ${userData?.lastName}`,
          rating: 0,
          timestamp: new Date().toISOString(),
        });
        toast.success("Restaurant review saved successfully!", {
          className: "toast-success custom-toast",
          hideProgressBar: true,
          autoClose: 3000,
          closeOnClick: true,
          icon: false,
          position: "top-center",
        });
      }
      handleClose();
    } catch (error) {
      toast.error("Error saving review!", {
        className: "toast-error custom-toast",
        hideProgressBar: true,
        autoClose: 3000,
        closeOnClick: true,
        icon: false,
        position: "top-center",
      });
      console.error("Error saving review:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleClose}
        className="absolute top-4 right-3 block md:hidden"
      >
        <X size={32} />
      </button>
      <h1 className="font-karantina text-center text-5xl md:text-8xl">
        {title}
      </h1>
      <textarea
        className="mt-4 h-72 w-full resize-none rounded-4xl bg-[#FAB735] px-4 py-2 text-3xl placeholder:text-[#000000]/70 focus:outline-none"
        placeholder="Leave a comment"
        maxLength={300}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div className="mt-4 flex flex-col items-center justify-between md:flex-row">
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
          onClick={handleSubmit}
          className="mt-4 cursor-pointer rounded-full bg-[#F2680F] px-12 py-2 text-4xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F] md:mt-0"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Comment;
