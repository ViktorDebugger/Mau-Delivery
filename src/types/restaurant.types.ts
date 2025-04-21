export interface Restaurant {
  id: string;
  name: string;
  image: string;
  address: string;
  rating: number;
  cuisine: string;
  description: string;
  reviews: Review[];
}

export interface Review {
  username: string;
  rating: number;
  text: string;
  avatar: string;
}
