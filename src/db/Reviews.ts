import { addDoc, collection, setDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "@/db/firebase";
import type { ReviewDish } from "@/types/dish.types";
import type { ReviewRestaurant } from "@/types/restaurant.types";

// Функція для збереження відгуку про страву
export const saveDishReview = async (review: ReviewDish): Promise<void> => {
  try {
    const reviewsRef = collection(db, "dishReviews");
    await addDoc(reviewsRef, review);
    console.log("Dish review saved successfully!");
  } catch (error) {
    console.error("Error saving dish review:", error);
    throw new Error("Failed to save dish review");
  }
};

// Функція для збереження відгуку про ресторан
export const saveRestaurantReview = async (
  review: ReviewRestaurant,
): Promise<void> => {
  try {
    const reviewsRef = collection(db, "restaurantReviews");
    await addDoc(reviewsRef, review);
    console.log("Restaurant review saved successfully!");
  } catch (error) {
    console.error("Error saving restaurant review:", error);
    throw new Error("Failed to save restaurant review");
  }
};

// Функція для отримання коментарів про страву
export const getDishReviews = async (dishId: string): Promise<ReviewDish[]> => {
  try {
    const reviewsRef = collection(db, "dishReviews");
    const q = query(reviewsRef, where("dishId", "==", dishId));
    const querySnapshot = await getDocs(q);

    const reviews: ReviewDish[] = [];
    querySnapshot.forEach((doc) => {
      reviews.push(doc.data() as ReviewDish);
    });

    return reviews;
  } catch (error) {
    console.error("Error getting dish reviews: ", error);
    return [];
  }
};

// Функція для отримання коментарів про ресторан
export const getRestaurantReviews = async (
  restaurantId: string,
): Promise<ReviewRestaurant[]> => {
  try {
    const reviewsRef = collection(db, "restaurantReviews");
    const q = query(reviewsRef, where("restaurantId", "==", restaurantId));
    const querySnapshot = await getDocs(q);

    const reviews: ReviewRestaurant[] = [];
    querySnapshot.forEach((doc) => {
      reviews.push(doc.data() as ReviewRestaurant);
    });

    return reviews;
  } catch (error) {
    console.error("Error getting restaurant reviews: ", error);
    return [];
  }
};

// Функція для отримання коментарів користувача
export const getUserReviews = async (
  userId: string,
): Promise<(ReviewDish | ReviewRestaurant)[]> => {
  try {
    const dishReviewsRef = collection(db, "dishReviews");
    const restaurantReviewsRef = collection(db, "restaurantReviews");

    const dishQuery = query(dishReviewsRef, where("userId", "==", userId));
    const restaurantQuery = query(
      restaurantReviewsRef,
      where("userId", "==", userId),
    );

    const [dishSnapshot, restaurantSnapshot] = await Promise.all([
      getDocs(dishQuery),
      getDocs(restaurantQuery),
    ]);

    const reviews: (ReviewDish | ReviewRestaurant)[] = [];

    dishSnapshot.forEach((doc) => {
      reviews.push(doc.data() as ReviewDish);
    });

    restaurantSnapshot.forEach((doc) => {
      reviews.push(doc.data() as ReviewRestaurant);
    });

    return reviews;
  } catch (error) {
    console.error("Error getting user reviews: ", error);
    return [];
  }
};
