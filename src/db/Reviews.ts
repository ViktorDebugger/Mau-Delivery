import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/db/firebase";
import type { ReviewDishType } from "@/types/dish.types";
import type { ReviewRestaurantType } from "@/types/restaurant.types";

export const saveDishReview = async (review: ReviewDishType): Promise<void> => {
  try {
    const reviewsRef = collection(db, "dishReviews");
    await addDoc(reviewsRef, review);
  } catch (error) {
    console.error("Error saving dish review:", error);
    throw new Error("Failed to save dish review");
  }
};

export const saveRestaurantReview = async (
  review: ReviewRestaurantType,
): Promise<void> => {
  try {
    const reviewsRef = collection(db, "restaurantReviews");
    await addDoc(reviewsRef, review);
  } catch (error) {
    console.error("Error saving restaurant review:", error);
    throw new Error("Failed to save restaurant review");
  }
};

export const getDishReviews = async (dishId: string): Promise<ReviewDishType[]> => {
  try {
    const reviewsRef = collection(db, "dishReviews");
    const q = query(reviewsRef, where("dishId", "==", dishId));
    const querySnapshot = await getDocs(q);

    const reviews: ReviewDishType[] = [];
    querySnapshot.forEach((doc) => {
      reviews.push(doc.data() as ReviewDishType);
    });

    return reviews;
  } catch (error) {
    console.error("Error getting dish reviews: ", error);
    return [];
  }
};

export const getRestaurantReviews = async (
  restaurantId: string,
): Promise<ReviewRestaurantType[]> => {
  try {
    const reviewsRef = collection(db, "restaurantReviews");
    const q = query(reviewsRef, where("restaurantId", "==", restaurantId));
    const querySnapshot = await getDocs(q);

    const reviews: ReviewRestaurantType[] = [];
    querySnapshot.forEach((doc) => {
      reviews.push(doc.data() as ReviewRestaurantType);
    });

    return reviews;
  } catch (error) {
    console.error("Error getting restaurant reviews: ", error);
    return [];
  }
};

export const getUserReviews = async (
  userId: string,
): Promise<(ReviewDishType | ReviewRestaurantType)[]> => {
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

    const reviews: (ReviewDishType | ReviewRestaurantType)[] = [];

    dishSnapshot.forEach((doc) => {
      reviews.push(doc.data() as ReviewDishType);
    });

    restaurantSnapshot.forEach((doc) => {
      reviews.push(doc.data() as ReviewRestaurantType);
    });

    return reviews;
  } catch (error) {
    console.error("Error getting user reviews: ", error);
    return [];
  }
};
