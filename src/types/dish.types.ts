export interface Dish {
  id: string;
  restaurant: string;
  name: string;
  rating: number;
  description: string;
  weight: string;
  price: number;
  ingredients: string[];
  image: string;
  allergens: string[];
  nutrition: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  reviews: Review[];
}

export interface Review {
  username: string;
  rating: number;
  text: string;
  avatar?: string;
}

export interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}
