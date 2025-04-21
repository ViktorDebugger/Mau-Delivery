export interface CartItem {
  dishId: string;
  quantity: number;
  price: number;
}

export interface DishOrder {
  dishId: string;
  quantity: number;
  price: number;
}

export interface Order {
  orderId: number;
  totalAmount: number;
  totalQuantity: number;
  paymentMethod: string;
  createdAt: string;

  dishes: DishOrder[];
  comment: string;
}
