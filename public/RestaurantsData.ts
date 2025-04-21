import type { Restaurant } from "@/types/restaurant.types";

export const restaurantsData: Restaurant[] = [
  {
    id: "rest_1",
    name: "1708 Pizza di Napoli",
    image:
      "https://res.cloudinary.com/dlistrvqm/image/upload/v1744846202/tgcdfftlpislhrxe48vb.png",
    address: "Shevchenka St, 8, Lviv",
    rating: 4.8,
    cuisine: "Italian",
    description:
      "Authentic Neapolitan pizza restaurant with traditional wood-fired oven.",
    reviews: [
      {
        username: "Michael",
        rating: 5,
        text: "An incredible atmosphere of an authentic Italian pizzeria! The pizza is prepared in a wood-fired oven, giving it a special taste and aroma. The dough is thin and crispy, with characteristic bubbles around the edges. The sauce is made from selected tomatoes, and the mozzarella melts in your mouth. Service is top-notch - the waiters are attentive and friendly. Especially loved the truffle pizza - it's a must-try!",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Sophia",
        rating: 4.5,
        text: "Visited the restaurant on the weekend and was absolutely amazed! The interior transports you straight to Naples - authentic details, pleasant lighting, and cozy atmosphere. We ordered several different pizzas and each was special. The dough simply melts in your mouth, and the ingredients are of the highest quality. The wine list is also worth noting - an excellent selection of Italian wines at reasonable prices.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Alessandro",
        rating: 4.8,
        text: "As an Italian, I can confidently say - this is the most authentic pizzeria in Lviv! The pizzaiolo clearly trained in Italy, the preparation technique and dough quality are at the highest level. The sauce has the perfect balance of tanginess and sweetness, and the topping combinations are very successful. I especially want to note the cleanliness of the establishment and the professionalism of the staff. Prices are slightly above average, but the quality fully justifies the cost.",
        avatar: "/images/icons/user.png",
      },
    ],
  },
  {
    id: "rest_2",
    name: "Respublica Sadu",
    image:
      "https://res.cloudinary.com/dlistrvqm/image/upload/v1744845380/gpeb5sl6tedqqxwpciyb.png",
    address: "Sichovykh Striltsiv St, 12, Lviv",
    rating: 4.6,
    cuisine: "European",
    description: "Modern European cuisine in a cozy garden setting.",
    reviews: [
      {
        username: "David",
        rating: 4.5,
        text: "A magical place with an incredible garden atmosphere! The cuisine impresses with its diversity and quality of execution. The duck confit was simply outstanding - the meat tender and juicy, and the sauce complemented the dish perfectly. The presentation of dishes is very creative, showing that the chef pays attention to every detail. Service is excellent, staff knows the menu thoroughly and can recommend the perfect wine pairing.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Emma",
        rating: 4.7,
        text: "The perfect place for a romantic dinner! The garden creates a magical atmosphere, especially in the evening when they light candles and fairy lights. The menu offers a wonderful combination of classic European dishes with modern touches. The wine list is simply impressive - a great selection of both local and imported wines. The desserts deserve special attention - particularly loved the chocolate fondant with lavender ice cream.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Marcus",
        rating: 4.6,
        text: "Respublica Sadu is more than just a restaurant, it's a true gastronomic experience! The seasonal menu always offers something new and interesting. This time I tried the salmon tartare with avocado and ravioli with porcini mushrooms - both dishes were flawless. The summer terrace in the garden creates a special atmosphere, and the professional sommelier helps select the perfect wine for your dish. Prices are above average, but the quality is worth it.",
        avatar: "/images/icons/user.png",
      },
    ],
  },
  {
    id: "rest_3",
    name: "Maioran",
    image:
      "https://res.cloudinary.com/dlistrvqm/image/upload/v1744845380/hmltkotbzfnlnnrpcetd.png",
    address: "Rynok Square, 14, Lviv",
    rating: 4.5,
    cuisine: "Ukrainian",
    description: "Traditional Ukrainian cuisine with a modern twist.",
    reviews: [
      {
        username: "Oleksandr",
        rating: 4.5,
        text: "Maioran impresses with its modern approach to Ukrainian cuisine! The borscht is served in an unusual format, but the taste remains authentic and rich. The vareniki with various fillings simply melt in your mouth. Especially impressed by the presentation of dishes - each plate is like a work of art. The interior combines traditional Ukrainian elements with modern design, creating a unique atmosphere.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Natalia",
        rating: 4.5,
        text: "An incredible restaurant that reimagines Ukrainian cuisine! Each dish is a successful combination of tradition and innovation. The cabbage rolls in grape leaves with porcini mushroom sauce are something extraordinary! The staff is very attentive and professional, always ready to explain the peculiarities of each dish. It's also nice that the restaurant uses local seasonal products.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Viktor",
        rating: 4.5,
        text: "Visiting Maioran is a true gastronomic journey through Ukrainian cuisine! The chef masterfully combines traditional recipes with modern cooking techniques. The potato pancakes with salmon and porcini mushroom sauce are simply outstanding. The drinks menu impresses with its selection of Ukrainian wines and infusions. The atmosphere is very cozy, and the location in the heart of Lviv makes it an ideal place to experience modern Ukrainian gastronomy.",
        avatar: "/images/icons/user.png",
      },
    ],
  },
  {
    id: "rest_4",
    name: "Poke LULU",
    image:
      "https://res.cloudinary.com/dlistrvqm/image/upload/v1744845380/uwipsndcre3jwlhaorze.jpg",
    address: "Vynnychenka St, 6, Lviv",
    rating: 4.7,
    cuisine: "Asian",
    description:
      "Fresh and healthy Hawaiian poke bowls and Asian fusion dishes.",
    reviews: [
      {
        username: "Alex",
        rating: 4.8,
        text: "The freshest poke bowls in Lviv! The portions are very generous, and the quality of ingredients is top-notch. I especially love the salmon bowl - the fish melts in your mouth, and the sauce complements the dish perfectly. It's also great that you can create your own combination of ingredients. The service is quick and friendly.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Lisa",
        rating: 4.6,
        text: "A wonderful place for a healthy and delicious lunch! All ingredients are always fresh, and the sauces are simply incredible. I really appreciate that you can choose the portion size. The tuna bowl is my favorite, especially with extra avocado. The interior is stylish and cozy, and the staff is always smiling.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Maria",
        rating: 4.7,
        text: "Discovered this place a month ago and now I'm a regular customer! Poke bowls are the perfect option for a light but filling lunch. Love the variety of toppings and sauces. Extra points for delivery option - everything arrives fresh and neatly packed. The price matches the quality perfectly.",
        avatar: "/images/icons/user.png",
      },
    ],
  },
  {
    id: "rest_5",
    name: "I love kebab",
    image:
      "https://res.cloudinary.com/dlistrvqm/image/upload/v1744845380/wduc1uhcutwzejezyzh0.jpg",
    address: "Doroshenka St, 36, Lviv",
    rating: 4.4,
    cuisine: "Middle Eastern",
    description: "Authentic kebabs and Middle Eastern street food.",
    reviews: [
      {
        username: "Ahmed",
        rating: 4.5,
        text: "The best kebabs in the city! The meat is always juicy and perfectly seasoned, and the lavash is fresh and soft. I especially love the lamb kebab - it just melts in your mouth. The sauces are homemade and very tasty. The staff works quickly even during peak hours. The prices are very reasonable for such quality.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Maria",
        rating: 4.3,
        text: "Pleasantly surprised by the vegetarian options! The falafel is simply incredible - crispy on the outside and tender inside. Great selection of fresh vegetables and sauces. Portions are large, prices are affordable. The only downside is sometimes having to wait in line, but it's worth it.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Oleg",
        rating: 4.4,
        text: "An excellent place for a quick and filling meal! The chicken kebab is my favorite, I always order it with spicy sauce. I like that you can choose additional ingredients. The place is always clean, and the staff works efficiently. Extra points for late working hours - perfect after an evening walk around the city.",
        avatar: "/images/icons/user.png",
      },
    ],
  },
  {
    id: "rest_6",
    name: "Snack House",
    image:
      "https://res.cloudinary.com/dlistrvqm/image/upload/v1744845379/imw84qobgamwxen0ldug.png",
    address: "Krakivska St, 7, Lviv",
    rating: 4.3,
    cuisine: "Fast Food",
    description: "Quick bites and comfort food in a casual setting.",
    reviews: [
      {
        username: "John",
        rating: 4.2,
        text: "Perfect place for late-night snacks! The mozzarella sticks are simply incredible - the cheese pulls just the way it should. The sauce for them is also excellent. Great selection of appetizers, everything is prepared quickly and served hot. Friendly staff even at late hours.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Sarah",
        rating: 4.4,
        text: "Great place for a quick bite! The nachos with cheese sauce are absolutely amazing! I love that you can order both small and large portions. Prices are pleasant, service is quick. Convenient location in the city center.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Maxim",
        rating: 4.3,
        text: "Excellent fast food with great quality! The french fries are always hot and crispy, the sauces are homemade. I especially love the chicken wings in honey-mustard sauce. The interior is simple but clean and cozy. Good selection of drinks. Perfect place for a snack while walking around the city.",
        avatar: "/images/icons/user.png",
      },
    ],
  },
  {
    id: "rest_7",
    name: "Pizza Palace",
    image:
      "https://res.cloudinary.com/dlistrvqm/image/upload/v1744845379/qsczvyxjwjontc2pj9ss.avif",
    address: "Svobody Ave, 15, Lviv",
    rating: 4.5,
    cuisine: "Italian",
    description:
      "Classic and creative pizza combinations in a family-friendly atmosphere.",
    reviews: [
      {
        username: "Robert",
        rating: 4.5,
        text: "Our family's favorite place! The kids love the pepperoni pizza, and my wife and I always order the quattro formaggi. The dough is thin and crispy, the sauce is homemade, and the cheese is of the highest quality. We love the cozy atmosphere and friendly staff. It's also great that you can order pizza with different toppings on each half.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Anna",
        rating: 4.5,
        text: "Consistently high quality pizza! The dough is always perfect - thin with crispy edges. The toppings are generous, and the sauce has a wonderful balance of spices. I especially love the mushroom pizza with truffle oil. Prices are moderate considering the quality of ingredients. Service is excellent.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Peter",
        rating: 4.5,
        text: "The best pizzeria in the area! The pizza is cooked in a real wood-fired oven, which gives it a special taste. The toppings are always fresh and high-quality. I really like that you can add or remove ingredients as you wish. The atmosphere is wonderful - you can either have a quick bite or spend a pleasant evening with friends.",
        avatar: "/images/icons/user.png",
      },
    ],
  },
  {
    id: "rest_8",
    name: "Fresh Bar",
    image:
      "https://res.cloudinary.com/dlistrvqm/image/upload/v1744845379/qm9owjrymjfv2qklajkq.avif",
    address: "Ruska St, 20, Lviv",
    rating: 4.6,
    cuisine: "Healthy",
    description: "Fresh juices, smoothies, and healthy food options.",
    reviews: [
      {
        username: "Emily",
        rating: 4.7,
        text: "The Fresh Bar has completely transformed my morning routine! Their green detox smoothie is a perfect balance of nutrients and flavor - you can taste the freshness of each ingredient. The staff is incredibly knowledgeable about their products and can recommend the perfect combination based on your preferences. The acai bowls are also a standout, topped with fresh fruits and crunchy granola.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Daniel",
        rating: 4.5,
        text: "What a gem in the heart of Lviv! The juice combinations are innovative and delicious - I particularly love their carrot-ginger-turmeric blend. The portion sizes are generous, and you can really feel the quality of the ingredients they use. The atmosphere is bright and welcoming, perfect for a healthy breakfast or lunch break. Their seasonal specials are always worth trying!",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Sarah",
        rating: 4.6,
        text: "I've tried many healthy cafes in Lviv, but Fresh Bar stands out for their consistency and quality. Their smoothie bowls are not only Instagram-worthy but also incredibly satisfying. The protein smoothies are perfect for post-workout refreshment. Love that they offer healthy snack options too. The service is always quick and friendly, even during peak hours.",
        avatar: "/images/icons/user.png",
      },
    ],
  },
  {
    id: "rest_9",
    name: "Sushi House",
    image:
      "https://res.cloudinary.com/dlistrvqm/image/upload/v1744845379/dijolgnlx8pejxyrv4zl.jpg",
    address: "Hnatyuka St, 12, Lviv",
    rating: 4.7,
    cuisine: "Japanese",
    description:
      "Authentic Japanese cuisine with a wide selection of sushi and rolls.",
    reviews: [
      {
        username: "Yuki",
        rating: 4.8,
        text: "As someone who grew up in Japan, I can confidently say this is the most authentic sushi experience in Lviv! The nigiri selection is exceptional - the rice is perfectly seasoned and the fish is remarkably fresh. The itamae clearly understands the importance of temperature and texture in sushi preparation. The presentation is traditional and elegant, just like in Tokyo's best sushi bars.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Mark",
        rating: 4.6,
        text: "The attention to detail at Sushi House is impressive! Their dragon roll is a perfect blend of flavors - the eel is perfectly glazed, and the avocado adds a creamy texture that complements the crispy tempura inside. The wasabi is fresh and properly pungent, not the artificial kind. The sake selection is also noteworthy, with options to pair perfectly with your sushi choices.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Lisa",
        rating: 4.7,
        text: "Every visit to Sushi House is a culinary journey! The sashimi platter is a work of art - each slice is cut with precision and served at the perfect temperature. Their specialty rolls are creative without sacrificing authenticity. The miso soup is rich and comforting, and the green tea is of excellent quality. The service is attentive and knowledgeable about Japanese cuisine.",
        avatar: "/images/icons/user.png",
      },
    ],
  },
  {
    id: "rest_10",
    name: "Burger Joint",
    image:
      "https://res.cloudinary.com/dlistrvqm/image/upload/v1744845379/xxfddbxs2yyhj5nut9dq.jpg",
    address: "Valova St, 10, Lviv",
    rating: 4.4,
    cuisine: "American",
    description: "Gourmet burgers and American comfort food.",
    reviews: [
      {
        username: "Tom",
        rating: 4.5,
        text: "Burger Joint has mastered the art of the perfect burger! Their double cheeseburger is a masterpiece - two perfectly cooked patties with just the right amount of pink in the middle, melted cheese that cascades down the sides, and a brioche bun that holds everything together beautifully. The house-made pickles add the perfect crunch and tanginess. Worth every calorie!",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Jessica",
        rating: 4.3,
        text: "This place understands what makes a great burger experience! The atmosphere is casual yet inviting, with a great rock playlist always playing in the background. Their sweet potato fries are the best I've had in Lviv - perfectly crispy outside and fluffy inside. The variety of house-made sauces is impressive, and they're always happy to let you try different ones.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Michael",
        rating: 4.4,
        text: "Finally, a burger place that knows how to cook meat properly! The quality of the beef is evident in every bite - juicy, flavorful, and seasoned perfectly. Their bacon is always crispy, and the vegetables are fresh and crisp. The milkshakes are thick and creamy, made with real ice cream. The staff is friendly and efficient, even during busy lunch hours.",
        avatar: "/images/icons/user.png",
      },
    ],
  },
  {
    id: "rest_11",
    name: "Italian Corner",
    image:
      "https://res.cloudinary.com/dlistrvqm/image/upload/v1744845379/w2depxvukyxaqlqgupoc.avif",
    address: "Staroyevreyska St, 5, Lviv",
    rating: 4.5,
    cuisine: "Italian",
    description: "Traditional Italian dishes in a cozy atmosphere.",
    reviews: [
      {
        username: "Marco",
        rating: 4.6,
        text: "The Italian Corner brings authentic flavors of Italy to Lviv! Their carbonara is exactly how it should be - made with guanciale, pecorino romano, and absolutely NO cream. The pasta is always cooked al dente, and the portion sizes are generous. The wine list features excellent Italian selections that perfectly complement the dishes. The atmosphere reminds me of small trattorias in Rome.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Sophie",
        rating: 4.4,
        text: "This cozy restaurant captures the essence of Italian dining! The homemade pasta is exceptional - you can taste the difference in every bite. Their tiramisu is the best I've had outside of Italy - perfect balance of coffee and mascarpone, not too sweet. The staff is knowledgeable about Italian cuisine and always happy to make recommendations. The intimate atmosphere makes it perfect for date nights.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Antonio",
        rating: 4.5,
        text: "A true gem for Italian food lovers! The risotto is creamy and cooked to perfection, with seasonal ingredients that showcase the best of Italian cuisine. The bruschetta appetizers are simple yet delicious, with perfectly ripe tomatoes and high-quality olive oil. The espresso is properly made - short and intense, just like in Italy. The service is attentive without being intrusive.",
        avatar: "/images/icons/user.png",
      },
    ],
  },
  {
    id: "rest_12",
    name: "Wings & Beer",
    image:
      "https://res.cloudinary.com/dlistrvqm/image/upload/v1744845379/wceopxvpcy8bwpsyccki.avif",
    address: "Kopernyka St, 18, Lviv",
    rating: 4.3,
    cuisine: "American",
    description: "Specialty wings and craft beer selection.",
    reviews: [
      {
        username: "Mike",
        rating: 4.4,
        text: "Wings & Beer has perfected their wing game! The buffalo sauce has the perfect balance of heat and flavor - spicy enough to make you sweat but not so hot that you can't taste the chicken. The meat is always juicy and well-cooked, never dry. Their blue cheese dip is homemade and complements the wings perfectly. The craft beer selection is impressive and constantly rotating.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Laura",
        rating: 4.2,
        text: "This is the ultimate sports bar experience in Lviv! The atmosphere is perfect for watching games - multiple screens with great viewing angles from every seat. The wings are consistently good, with an impressive variety of sauces to choose from. The beer selection is extensive, with both local craft options and international favorites. The staff is knowledgeable about their beers and can make great recommendations.",
        avatar: "/images/icons/user.png",
      },
      {
        username: "Steve",
        rating: 4.3,
        text: "A fantastic spot for wing lovers! Their garlic parmesan wings are addictive - perfectly crispy and full of flavor. The portions are generous, and the prices are reasonable for the quality you get. The beer flights are a great way to try different craft brews. The service is quick and friendly, and they're great about keeping the games on that customers want to watch.",
        avatar: "/images/icons/user.png",
      },
    ],
  },
];
