import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/db/firebase";
import type { OrderType } from "@/types/cart.types";

export const saveOrder = async (
  order: Omit<OrderType, "orderId" | "createdAt">,
) => {
  try {
    const orderData = {
      ...order,
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, "orders"), orderData);
    console.log("Order saved with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving order: ", error);
    throw new Error("Failed to save order");
  }
};

export const getUserOrders = async (userId: string): Promise<OrderType[]> => {
  try {
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, where("userId", "==", userId));

    const querySnapshot = await getDocs(q);

    const orders: OrderType[] = querySnapshot.docs.map((doc) => {
      const data = doc.data() as Omit<OrderType, "orderId">;
      return {
        orderId: doc.id,
        ...data,
      };
    });

    return orders;
  } catch (error) {
    console.error("Error fetching user orders: ", error);
    throw new Error("Failed to fetch user orders");
  }
};
