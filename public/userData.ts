const userData = {
  firstname: "Coffee",
  lastname: "Lover92",
  phone: "+380000000000",
  address: "City, Street, 00",
  email: "coffeelover92@example.com",
  allergens: [
    "nuts",
    "dairy",
    "gluten",
    "soy",
    "shellfish",
    "eggs",
    "fish",
    "peanuts",
    "sesame",
    "mustard",
  ],
  profileImage: "/images/icons/user.png",
  orders: [
    {
      orderId: 1,
      totalAmount: 145,
      totalQuantity: 3,
      paymentMethod: "Card",
      createdAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
      dishes: [
        {
          dishId: "dish_1",
          quantity: 2,
          price: 100,
        },
        {
          dishId: "dish_2",
          quantity: 1,
          price: 45,
        },
      ],
      comment:
        "Thank you for the quick delivery! Everything was delicious and exceeded my expectations. The iced latte was particularly refreshing, and I appreciate the attention to detail in the preparation. I will definitely be ordering again soon!",
    },
    {
      orderId: 2,
      totalAmount: 80,
      totalQuantity: 2,
      paymentMethod: "Cash",
      createdAt: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
      dishes: [
        {
          dishId: "dish_3",
          quantity: 1,
          price: 30,
        },
        {
          dishId: "dish_4",
          quantity: 1,
          price: 50,
        },
      ],
      comment:
        "Everything was wonderful, thank you! The flavors were well-balanced, and the presentation was appealing. I particularly enjoyed the cappuccino, which was rich and creamy. I look forward to trying more items from your menu in the future!",
    },
  ],
  reviews: [
    {
      username: "Restaurant - CoffeeLover92",
      rating: 5,
      text: "Absolutely loved the iced latte! The perfect balance of flavors, with just the right amount of sweetness and a rich coffee taste that lingers on the palate. I could drink this every day and never get tired of it. Highly recommend it to anyone who enjoys a refreshing coffee drink!",
    },
    {
      username: "Dish - LatteLover",
      rating: 4,
      text: "Very good cappuccino, but a bit too frothy for my taste. The coffee flavor was strong and well-balanced, but I found the foam to be a little overwhelming. If you enjoy a creamier texture, this might be perfect for you. Overall, a solid choice for a morning pick-me-up!",
    },
    {
      username: "Restaurant - EspressoExpert",
      rating: 4,
      text: "Rich and creamy cappuccino, but could use a bit more coffee flavor. The texture was delightful, and the presentation was beautiful, but I was hoping for a stronger coffee taste to really make it stand out. Still, it was enjoyable and made for a pleasant afternoon treat.",
    },
    {
      username: "Dish - StrongBrew",
      rating: 5,
      text: "Best espresso I've ever had! Strong and rich, with a deep flavor that really hits the spot. I appreciate the attention to detail in the brewing process, as it truly makes a difference. This espresso is perfect for those who love a bold coffee experience. I can't wait to come back for more!",
    },
  ],
};

export default userData;
