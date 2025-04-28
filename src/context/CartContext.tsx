"use client";

import { createContext, useContext, ReactNode } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { CartItemType } from "@/types/cart.types";

interface CartContextType {
  cart: CartItemType[];
  setCart: (
    cart: CartItemType[] | ((prev: CartItemType[]) => CartItemType[]),
  ) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useLocalStorage<CartItemType[]>("cart", []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
