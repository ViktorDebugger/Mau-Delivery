import { addAllDishesToFirestore } from "@/db/Dish";
import { dishes } from "@/db/data/Dishes";
import { toast } from "react-toastify";

const UploadDishesButton = () => {
  const handleUploadDishes = async () => {
    try {
      await addAllDishesToFirestore(dishes);
      toast.success("All dishes have been uploaded successfully!", {
        className: "toast-success",
        icon: false,
      });
    } catch (error) {
      console.error("Error uploading dishes: ", error);
      toast.error("Failed to upload dishes!", {
        className: "toast-error",
        icon: false,
      });
    }
  };

  return (
    <button
      onClick={handleUploadDishes}
      className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-blue-700"
    >
      Upload Dishes
    </button>
  );
};

export default UploadDishesButton;
