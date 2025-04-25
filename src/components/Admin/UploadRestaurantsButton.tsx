import { addAllRestaurantsToFirestore } from "@/db/Restaurant";
import { restaurants } from "@/db/data/Restaurants";
import { toast } from "react-toastify";

const UploadRestaurantsButton = () => {
  const handleUploadRestaurants = async () => {
    try {
      await addAllRestaurantsToFirestore(restaurants);
      toast.success("All restaurants have been uploaded successfully!", {
        className: "toast-success",
        icon: false,
      });
    } catch (error) {
      console.error("Error uploading restaurants: ", error);
      toast.error("Failed to upload restaurants!", {
        className: "toast-error",
        icon: false,
      });
    }
  };

  return (
    <button
      onClick={handleUploadRestaurants}
      className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-blue-700"
    >
      Upload Restaurants
    </button>
  );
};

export default UploadRestaurantsButton;
