import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/db/firebase";
import type { Order } from "@/types/cart.types";

export const saveOrder = async (
  order: Omit<Order, "orderId" | "createdAt">,
) => {
  try {
    const orderData = {
      ...order,
      createdAt: new Date().toISOString(), // Додаємо час створення
    };

    const docRef = await addDoc(collection(db, "orders"), orderData);
    console.log("Order saved with ID: ", docRef.id);
  } catch (error) {
    console.error("Error saving order: ", error);
    throw new Error("Failed to save order");
  }
};

export const getUserOrders = async (userId: string): Promise<Order[]> => {
  try {
    // Створюємо запит для отримання замовлень користувача
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, where("userId", "==", userId));

    // Виконуємо запит
    const querySnapshot = await getDocs(q);

    // Перетворюємо результати у масив замовлень
    const orders: Order[] = querySnapshot.docs.map((doc) => {
      const data = doc.data() as Omit<Order, "orderId">; // Виключаємо orderId з даних
      return {
        orderId: doc.id, // Додаємо orderId з ID документа
        ...data, // Розпаковуємо інші дані
      };
    });

    return orders;
  } catch (error) {
    console.error("Error fetching user orders: ", error);
    throw new Error("Failed to fetch user orders");
  }
};
