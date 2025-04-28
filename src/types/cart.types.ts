export interface CartItemType {
  dishId: string;
  quantity: number;
  price: number;
  image: string;
  name: string;
  restaurant:string;
  restaurantId: string;
}

export interface OrderType {
  orderId: string;
  totalAmount: number;
  totalQuantity: number;
  paymentMethod: "Cash" | "Card";
  selectedTime: string;
  createdAt: string;

  dishes: {
    dishId: string;
    restaurantId: string;
    quantity: number;
    price: number;
    image: string;
    name: string;
    restaurant:string;
  }[];
  comment?: string;

  cardDetails: {
    cardNumber: string;
    cardExpiry: string;
    cardCVC: string;
  } | null;
  userId: string;

  user: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
  };
}
