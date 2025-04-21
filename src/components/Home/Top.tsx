import CardDishTop from "@/components/Home/CardDishTop";

export interface Comment {
  nameUser: string;
  commentText: string;
  time: string;
}

export interface DishTop {
  id: number;
  nameRestaurant: string;
  nameDish: string;
  price: number;
  comments: Comment[];
}

const Top = () => {
  const top: DishTop[] = [
    {
      id: 1,
      nameRestaurant: "La Pasta Fresca",
      nameDish: "Spaghetti Carbonara",
      price: 275,
      comments: [
        {
          nameUser: "Maria",
          commentText: "Creamy and authentic taste!",
          time: "5 minutes ago",
        },
        {
          nameUser: "Dima",
          commentText: "Perfectly cooked pasta, loved it.",
          time: "10 minutes ago",
        },
      ],
    },
    {
      id: 2,
      nameRestaurant: "Tokyo Bites",
      nameDish: "Sushi Set Deluxe",
      price: 420,
      comments: [
        {
          nameUser: "Anastasia",
          commentText: "Fresh and delicious, worth every penny!",
          time: "20 minutes ago",
        },
        {
          nameUser: "Igor",
          commentText: "Great selection of rolls!",
          time: "25 minutes ago",
        },
      ],
    },
    {
      id: 3,
      nameRestaurant: "BurgerTown",
      nameDish: "Double Cheeseburger",
      price: 180,
      comments: [
        {
          nameUser: "Yurii",
          commentText: "Juicy and satisfying!",
          time: "30 minutes ago",
        },
        {
          nameUser: "Olya",
          commentText: "Classic taste. Fries were also good.",
          time: "35 minutes ago",
        },
      ],
    },
    {
      id: 4,
      nameRestaurant: "Green Bowl",
      nameDish: "Vegan Buddha Bowl",
      price: 195,
      comments: [
        {
          nameUser: "Katya",
          commentText: "Colorful and full of flavor!",
          time: "15 minutes ago",
        },
        {
          nameUser: "Max",
          commentText: "Healthy and filling.",
          time: "18 minutes ago",
        },
      ],
    },
    {
      id: 5,
      nameRestaurant: "Grill House",
      nameDish: "BBQ Ribs",
      price: 360,
      comments: [
        {
          nameUser: "Oleh",
          commentText: "Tender and full of smoky flavor!",
          time: "40 minutes ago",
        },
        {
          nameUser: "Viktoria",
          commentText: "Fell off the bone, amazing sauce.",
          time: "42 minutes ago",
        },
      ],
    },
    {
      id: 6,
      nameRestaurant: "Kyiv Cafe",
      nameDish: "Syrnyky with Jam",
      price: 150,
      comments: [
        {
          nameUser: "Nastya",
          commentText: "So soft and tasty, just like grandma's!",
          time: "12 minutes ago",
        },
        {
          nameUser: "Roman",
          commentText: "Perfect for breakfast with coffee.",
          time: "14 minutes ago",
        },
      ],
    },
    {
      id: 7,
      nameRestaurant: "Tandoori Palace",
      nameDish: "Chicken Tikka Masala",
      price: 310,
      comments: [
        {
          nameUser: "Amina",
          commentText: "Full of spices, just like in India!",
          time: "8 minutes ago",
        },
        {
          nameUser: "Taras",
          commentText: "Nice heat and rich sauce.",
          time: "11 minutes ago",
        },
      ],
    },
    {
      id: 8,
      nameRestaurant: "French Touch",
      nameDish: "Croque Monsieur",
      price: 220,
      comments: [
        {
          nameUser: "Elena",
          commentText: "Crispy, cheesy and elegant!",
          time: "6 minutes ago",
        },
        {
          nameUser: "Stepan",
          commentText: "Perfect brunch item.",
          time: "9 minutes ago",
        },
      ],
    },
    {
      id: 9,
      nameRestaurant: "Mediterraneo",
      nameDish: "Greek Salad",
      price: 160,
      comments: [
        {
          nameUser: "Zoriana",
          commentText: "Fresh and crunchy, love the feta!",
          time: "7 minutes ago",
        },
        {
          nameUser: "Andriy",
          commentText: "Simple and delicious.",
          time: "13 minutes ago",
        },
      ],
    },
    {
      id: 10,
      nameRestaurant: "Hot Wok",
      nameDish: "Beef Pad Thai",
      price: 285,
      comments: [
        {
          nameUser: "Lena",
          commentText: "Sweet, sour and spicy — just perfect!",
          time: "16 minutes ago",
        },
        {
          nameUser: "Denys",
          commentText: "A bit too spicy for me, but tasty!",
          time: "19 minutes ago",
        },
      ],
    },
  ];

  return (
    <section className="relative mt-96" data-aos="fade-up">
      <div>
        <h1 className="font-karantina relative z-1 text-center text-8xl">
          Top 10
        </h1>
        <div className="relative flex overflow-hidden mt-6">
          <ul className="animate-infinite-scroll-horizontal-top flex shrink-0 gap-4">
            {top.map((dish) => (
              <CardDishTop key={dish.id} dish={dish} />
            ))}
            {top.map((dish) => (
              <CardDishTop key={`duplicate-${dish.id}`} dish={dish} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Top;
