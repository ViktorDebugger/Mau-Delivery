"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/db/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  updateEmail,
  sendPasswordResetEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { UserData } from "@/types/user.types";
import { getUserData } from "@/db/User";

interface AuthContextInterface {
  user: User | null;
  userData: UserData | null;
  register: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  updateEmail: (newEmail: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  changePassword: (
    currentPassword: string,
    newPassword: string,
  ) => Promise<void>; // Додано новий метод
}

const changePassword = async (currentPassword: string, newPassword: string) => {
  const user = auth.currentUser;

  if (user) {
    try {
      const credential = EmailAuthProvider.credential(
        user.email!,
        currentPassword,
      );
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      console.log("Password updated successfully");
    } catch (error) {
      console.error("Failed to update password:", error);
      throw error;
    }
  } else {
    throw new Error("No authenticated user found");
  }
};

const updateEmailInAuth = async (newEmail: string) => {
  const user = auth.currentUser;

  if (user) {
    try {
      await updateEmail(user, newEmail);
      console.log("Email updated successfully in authentication");
    } catch (error) {
      console.error("Failed to update email in authentication:", error);
      throw error;
    }
  } else {
    throw new Error("No authenticated user found");
  }
};

const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential;
  } catch (error) {
    console.error("Error registering: ", error);
    throw error;
  }
};

const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential;
  } catch (error) {
    console.error("Error logging in: ", error);
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out: ", error);
  }
};

const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent successfully");
  } catch (error) {
    console.error("Failed to send password reset email:", error);
    throw error;
  }
};

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null); // Додаткові дані з Firestore

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const fetchUserData = async () => {
        setUser(user);
        if (user) {
          // Завантаження додаткових даних користувача з Firestore
          const fetchedUserData = await getUserData(user.uid);
          setUserData(fetchedUserData);
        } else {
          setUserData(null);
        }
      };
      fetchUserData();
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        userData,
        register,
        login,
        logout,
        updateEmail: updateEmailInAuth,
        resetPassword,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
