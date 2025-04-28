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
import type { RestaurantType } from "@/types/restaurant.types";

export const addRestaurantToFirestore = async (restaurant: RestaurantType) => {
  try {
    const docRef = await addDoc(collection(db, "restaurants"), restaurant);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const addAllRestaurantsToFirestore = async (
  restaurants: RestaurantType[],
) => {
  for (const restaurant of restaurants) {
    await addRestaurantToFirestore(restaurant);
  }
};

export const getAllRestaurantsFromFirestore = async (): Promise<
  RestaurantType[] | []
> => {
  try {
    const querySnapshot = await getDocs(collection(db, "restaurants"));
    const restaurants: RestaurantType[] = [];

    querySnapshot.forEach((doc) => {
      restaurants.push({ id: doc.id, ...doc.data() } as RestaurantType);
    });

    return restaurants;
  } catch (error) {
    console.log("Error getting documents: ", error);
    return [];
  }
};

export const getRestaurantById = async (
  id: string,
): Promise<RestaurantType | null> => {
  try {
    const docRef = doc(db, "restaurants", id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() } as RestaurantType;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    return null;
  }
};

export const getRestaurantByName = async (
  name: string,
): Promise<RestaurantType | null> => {
  try {
    const q = query(collection(db, "restaurants"), where("name", "==", name));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() } as RestaurantType;
    } else {
      console.log("No such restaurant found!");
      return null;
    }
  } catch (error) {
    console.error("Error getting restaurant: ", error);
    return null;
  }
};
