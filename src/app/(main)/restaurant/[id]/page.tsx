import RestaurantClientComponent from "./RestaurantClientComponent";

export const metadata = () => {
  return {
    title: "Restaurant",
  };
};

export default function RestaurantPage() {
  return <RestaurantClientComponent />;
}
