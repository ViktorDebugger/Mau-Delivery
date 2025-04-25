export interface Dish {
  id: string;
  restaurant: string;
  name: string;
  rating: number;
  description: string;
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
}

export interface ReviewDish {
  userId: string;
  dishId: string;
  dishName: string;
  username: string;
  rating: number;
  text: string;
  avatar?: string;
  stars: number;
  type: "dish";
}

export interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}
