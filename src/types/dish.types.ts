export interface DishType {
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

export interface ReviewDishType {
  userId: string;
  dishId: string;
  dishName: string;
  username: string;
  rating: number;
  text: string;
  avatar?: string;
  stars: number;
  type: "dish";
  timestamp: string;
}

export interface NutritionType {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}
