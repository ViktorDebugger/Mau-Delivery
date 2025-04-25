import { useState } from "react";
import { X } from "lucide-react";
import { saveDishReview, saveRestaurantReview } from "@/db/Reviews";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";

interface CommentProps {
  handleClose: () => void;
  title: string; // Заголовок для компонента
  id: string; // ID страви або ресторану
  type: "dish" | "restaurant"; // Тип: страва або ресторан
}

const Comment = ({ handleClose, title, id, type }: CommentProps) => {
  const { user, userData } = useAuth();
  const [stars, setStars] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = async () => {
    try {
      if (type === "dish") {
        // Збереження відгуку про страву
        await saveDishReview({
          userId: user!.uid, // Замініть на реальний userId
          dishId: id,
          text: comment,
          type: "dish",
          stars,
          dishName: title,
          username: `${userData?.firstName} ${userData?.lastName}`,
          avatar: userData?.avatar,
          rating: 0
        });
        toast.success("Dish review saved successfully!", {
          className: "toast-success",
          icon: false
        });
      } else if (type === "restaurant") {
        // Збереження відгуку про ресторан
        await saveRestaurantReview({
          userId: user!.uid, // Замініть на реальний userId
          restaurantId: id,
          restaurantName: title, // Використовуємо title як назву ресторану
          text: comment,
          type:"restaurant",
          stars,
          username: `${userData?.firstName} ${userData?.lastName}`,
          avatar: userData?.avatar,
          rating: 0
        });
        toast.success("Restaurant review saved successfully!", {
          className: "toast-success",
          icon: false
        });
      }
      handleClose();
    } catch (error) {
      toast.error("Error saving review!", {
        className: "toast-error",
        icon: false
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
