"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { getUserOrders } from "@/db/Order";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Order {
  id: string;
  selectedTime: string;
}

interface OrdersContextProps {
  pendingOrders: Order[];
  addOrder: (order: Order) => void;
  removeOrder: (id: string) => void;
}

const OrdersContext = createContext<OrdersContextProps | undefined>(undefined);

export const OrdersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  const [pendingOrders, setPendingOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {
    setPendingOrders((prev) => [...prev, order]);
  };

  const removeOrder = (id: string) => {
    setPendingOrders((prev) => prev.filter((order) => order.id !== id));
  };

  useEffect(() => {
    const loadOrders = async () => {
      if (!user) return;

      try {
        const orders = await getUserOrders(user.uid);
        const now = Date.now();
        setPendingOrders(
          orders
            .filter((order) => new Date(order.selectedTime).getTime() > now)
            .map(
              (order) =>
                ({
                  id: order.orderId,
                  selectedTime: order.selectedTime,
                }) as Order,
            ),
        );
      } catch (error) {
        console.error("Failed to fetch user orders:", error);
      }
    };

    loadOrders();
  }, [user]);

  useEffect(() => {
    if (!user || pendingOrders.length === 0) return;

    const interval = setInterval(() => {
      const now = Date.now();
      pendingOrders.forEach((order) => {
        if (new Date(order.selectedTime).getTime() <= now) {
          removeOrder(order.id);

          toast.success(`Order is ready!`, {
            className: "toast-success custom-toast",
            hideProgressBar: true,
            autoClose: 3000,
            closeOnClick: true,
            icon: false,
            position: "top-center",
          });
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [user, pendingOrders]);

  return (
    <OrdersContext.Provider value={{ pendingOrders, addOrder, removeOrder }}>
      {children}
      <ToastContainer />
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrdersProvider");
  }
  return context;
};
