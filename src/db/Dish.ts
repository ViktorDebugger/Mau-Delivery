"use server";

import { db } from "./firebase";
import {
  doc,
  collection,
  query,
  where,
  addDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import type { Dish1 } from "@/types/dish.types";

export const addDishToFirestore = async (dish: Dish1) => {
  try {
    const docRef = await addDoc(collection(db, "dishes"), dish);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const addAllDishesToFirestore = async (dishes: Dish1[]) => {
  for (const dish of dishes) {
    await addDishToFirestore(dish);
  }
};

export const getAllDishesFromFirestore = async (): Promise<Dish1[] | []> => {
  try {
    const querySnapshot = await getDocs(collection(db, "dishes"));
    const dishes: Dish1[] = [];

    querySnapshot.forEach((doc) => {
      dishes.push({ id: doc.id, ...doc.data() } as Dish1);
    });

    return dishes;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return [];
  }
};

export const getDishById = async (id: string): Promise<Dish1 | null> => {
  try {
    const docRef = doc(db, "dishes", id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() } as Dish1;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    return null;
  }
};

export const getDishesByRestaurantName = async (
  restaurantName: string,
): Promise<Dish1[] | []> => {
  try {
    const q = query(
      collection(db, "dishes"),
      where("restaurant", "==", restaurantName),
    );
    const querySnapshot = await getDocs(q);
    const dishes: Dish1[] = [];

    querySnapshot.forEach((doc) => {
      dishes.push({ id: doc.id, ...doc.data() } as Dish1);
    });

    return dishes;
  } catch (error) {
    console.error("Error getting dishes: ", error);
    return [];
  }
};
