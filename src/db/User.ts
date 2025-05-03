import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "@/db/firebase";
import type { UserData } from "@/types/user.types";

export const saveUserData = async (id: string, userData: UserData) => {
  try {
    await setDoc(doc(db, "users", id), userData);
  } catch (error) {
    console.error("Error saving user data: ", error);
  }
};

export const getUserData = async (id: string): Promise<UserData | null> => {
  try {
    const userDoc = await getDoc(doc(db, "users", id));
    if (userDoc.exists()) {
      return userDoc.data() as UserData;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting user data: ", error);
    return null;
  }
};

export const getUserAvatar = async (id: string): Promise<string | null> => {
  try {
    const userDoc = await getDoc(doc(db, "users", id));
    if (userDoc.exists()) {
      return userDoc.data()?.avatar || null;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting user avatar: ", error);
    return null;
  }
};
