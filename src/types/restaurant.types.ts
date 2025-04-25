export interface Restaurant {
  id?: string;
  name: string;
  image: string;
  address: string;
  rating: number;
}

export interface ReviewRestaurant {
  userId: string;
  restaurantId: string;
  restaurantName: string;
  username: string;
  rating: number;
  text: string;
  avatar?: string;
  stars: number;
  type: "restaurant";
}