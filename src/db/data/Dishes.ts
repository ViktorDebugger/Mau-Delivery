// import type { Dish1 } from "@/types/dish.types";

// export const dishes: Dish1[] = [
//   {
//     restaurant: "Snack House",
//     name: "Chicken Nuggets",
//     rating: 4.0,
//     description:
//       "Crispy golden nuggets made from tender chicken breast with a perfect blend of spices. Served with a special dipping sauce that enhances the natural flavors of the chicken.",
//     price: 100,
//     ingredients: ["chicken breast", "breadcrumbs", "spices", "dipping sauce"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201778/dishes/chicken-nuggets.webp",
//     allergens: ["gluten", "eggs"],
//     nutrition: {
//       calories: 320,
//       protein: 18,
//       fat: 15,
//       carbs: 30,
//     },
    
//   },
//   {
//     restaurant: "Pizza Palace",
//     name: "Four Cheese Pizza",
//     rating: 4.6,
//     description:
//       "A luxurious combination of four premium cheeses - mozzarella, parmesan, gorgonzola, and edam - on a perfect tomato sauce base. Each cheese brings its unique flavor and texture to create a harmonious taste experience.",
//     price: 240,
//     ingredients: [
//       "mozzarella",
//       "parmesan",
//       "gorgonzola",
//       "edam",
//       "tomato sauce",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201782/dishes/four-cheese.webp",
//     allergens: ["milk", "gluten"],
//     nutrition: {
//       calories: 800,
//       protein: 32,
//       fat: 45,
//       carbs: 80,
//     },
//   },
//   {
//     restaurant: "Fresh Bar",
//     name: "Fresh Orange Juice",
//     rating: 4.8,
//     description:
//       "100% natural orange juice made from freshly squeezed oranges. A refreshing and healthy drink packed with natural vitamins and minerals.",
//     price: 45,
//     ingredients: ["fresh oranges"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201792/dishes/orange-juice.webp",
//     allergens: [],
//     nutrition: {
//       calories: 120,
//       protein: 2,
//       fat: 0,
//       carbs: 28,
//     },
//   },
//   {
//     restaurant: "Sushi House",
//     name: "Philadelphia Roll",
//     rating: 4.7,
//     description:
//       "A classic sushi roll featuring fresh salmon, creamy cheese, and avocado wrapped in nori. The perfect balance of rich flavors and smooth textures in every bite.",
//     price: 190,
//     ingredients: ["salmon", "cream cheese", "avocado", "cucumber", "nori"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201796/dishes/philadelphia.webp",
//     allergens: ["fish", "milk", "soy"],
//     nutrition: {
//       calories: 480,
//       protein: 22,
//       fat: 28,
//       carbs: 42,
//     },
  
//   },
//   {
//     restaurant: "Sushi House",
//     name: "Tekka Maki",
//     rating: 2.2,
//     description:
//       "Traditional Japanese tuna roll with perfectly seasoned rice and nori. A simple yet elegant dish that highlights the natural flavors of fresh tuna.",
//     price: 150.0,
//     ingredients: ["tuna", "rice", "nori"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201798/dishes/tekka-maki.webp",
//     allergens: ["fish", "soy"],
//     nutrition: {
//       calories: 280,
//       protein: 16,
//       fat: 4,
//       carbs: 50,
//     },
    
//   },
//   {
//     restaurant: "Pizza Palace",
//     name: "Pepperoni Pizza",
//     rating: 4.7,
//     description:
//       "Classic pepperoni pizza with generous amounts of spicy pepperoni and melted mozzarella. The perfect combination of crispy crust, rich tomato sauce, and aromatic oregano.",
//     price: 210,
//     ingredients: ["pepperoni", "mozzarella", "tomato sauce", "oregano"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201795/dishes/pepperoni.webp",
//     allergens: ["milk", "gluten"],
//     nutrition: {
//       calories: 850,
//       protein: 35,
//       fat: 42,
//       carbs: 76,
//     },
    
//   },
//   {
//     restaurant: "Pizza Palace",
//     name: "Diavola Pizza",
//     rating: 4.4,
//     description:
//       "A fiery pizza featuring spicy salami and chili peppers on a bed of melted mozzarella. The perfect choice for those who love bold, spicy flavors.",
//     price: 230,
//     ingredients: [
//       "spicy salami",
//       "chili peppers",
//       "mozzarella",
//       "tomato sauce",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201781/dishes/diavola.webp",
//     allergens: ["milk", "gluten"],
//     nutrition: {
//       calories: 820,
//       protein: 34,
//       fat: 40,
//       carbs: 82,
//     },
    
//   },
//   {
//     restaurant: "Burger Joint",
//     name: "Classic Bacon Burger",
//     rating: 4.6,
//     description:
//       "Juicy beef patty topped with crispy bacon, melted cheese, and fresh vegetables. The special sauce adds a unique flavor that makes this burger truly memorable.",
//     price: 170,
//     ingredients: [
//       "beef patty",
//       "bacon",
//       "cheese",
//       "lettuce",
//       "tomato",
//       "special sauce",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201771/dishes/bacon.webp",
//     allergens: ["milk", "gluten", "eggs"],
//     nutrition: {
//       calories: 720,
//       protein: 38,
//       fat: 45,
//       carbs: 48,
//     },
//   },
//   {
//     restaurant: "Fresh Bar",
//     name: "Fresh Lemonade",
//     rating: 4.5,
//     description:
//       "Refreshing homemade lemonade made with fresh lemon juice, mint, and sparkling water. A perfect balance of sweet and tangy flavors with a hint of mint.",
//     price: 40,
//     ingredients: ["lemon juice", "sugar syrup", "mint", "sparkling water"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201788/dishes/lemonade.webp",
//     allergens: [],
//     nutrition: {
//       calories: 80,
//       protein: 0,
//       fat: 0,
//       carbs: 20,
//     },
    
//   },
//   {
//     restaurant: "Sushi House",
//     name: "Rainbow Roll",
//     rating: 4.8,
//     description:
//       "A colorful sushi roll featuring fresh salmon, tuna, and crab stick with avocado and cucumber. The beautiful presentation matches the delicious combination of flavors.",
//     price: 200,
//     ingredients: [
//       "salmon",
//       "tuna",
//       "crab stick",
//       "avocado",
//       "cucumber",
//       "rice",
//       "nori",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201797/dishes/rainbow.webp",
//     allergens: ["fish", "shellfish", "soy"],
//     nutrition: {
//       calories: 460,
//       protein: 24,
//       fat: 16,
//       carbs: 60,
//     },
    
//   },
//   {
//     restaurant: "Burger Joint",
//     name: "Guacamole Burger",
//     rating: 4.5,
//     description:
//       "A fresh take on the classic burger with homemade guacamole, fresh vegetables, and melted cheese. The creamy avocado adds a unique texture and flavor to this delicious burger.",
//     price: 160,
//     ingredients: [
//       "beef patty",
//       "guacamole",
//       "cheese",
//       "lettuce",
//       "tomato",
//       "onion",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201786/dishes/guacamole.webp",
//     allergens: ["milk", "gluten"],
//     nutrition: {
//       calories: 680,
//       protein: 35,
//       fat: 42,
//       carbs: 45,
//     },
    
//   },
//   {
//     restaurant: "Burger Joint",
//     name: "Double Cheese Burger",
//     rating: 4.7,
//     description:
//       "Double the pleasure with two juicy beef patties, double cheese, and crispy bacon. A hearty burger that satisfies even the biggest appetites.",
//     price: 180,
//     ingredients: [
//       "two beef patties",
//       "cheese",
//       "bacon",
//       "lettuce",
//       "tomato",
//       "special sauce",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201782/dishes/double.webp",
//     allergens: ["milk", "gluten", "eggs"],
//     nutrition: {
//       calories: 920,
//       protein: 56,
//       fat: 58,
//       carbs: 52,
//     },
    
//   },
//   {
//     restaurant: "Sushi House",
//     name: "California Roll",
//     rating: 4.6,
//     description:
//       "A popular sushi roll featuring crab meat, creamy avocado, and crisp cucumber. The addition of tobiko adds a delightful crunch and burst of flavor.",
//     price: 160,
//     ingredients: ["crab meat", "avocado", "cucumber", "tobiko", "rice", "nori"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201775/dishes/california.webp",
//     allergens: ["shellfish", "fish eggs", "soy"],
//     nutrition: {
//       calories: 400,
//       protein: 18,
//       fat: 12,
//       carbs: 58,
//     },
    
//   },
//   {
//     restaurant: "Fresh Bar",
//     name: "Raspberry Fizz",
//     rating: 4.4,
//     description:
//       "A refreshing blend of natural raspberry juice with sparkling water and fresh mint. The perfect balance of sweet and tart flavors with a hint of minty freshness.",
//     price: 35,
//     ingredients: ["raspberry juice", "sparkling water", "mint"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201798/dishes/raspberry.webp",
//     allergens: [],
//     nutrition: {
//       calories: 90,
//       protein: 1,
//       fat: 0,
//       carbs: 22,
//     },
   
//   },
//   {
//     restaurant: "Fresh Bar",
//     name: "Strawberry Fizz",
//     rating: 4.3,
//     description:
//       "Sweet and refreshing strawberry juice mixed with sparkling water and fresh mint. A perfect summer drink that combines natural sweetness with a refreshing fizz.",
//     price: 35,
//     ingredients: ["strawberry juice", "sparkling water", "mint"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201800/dishes/strawberry.webp",
//     allergens: [],
//     nutrition: {
//       calories: 85,
//       protein: 1,
//       fat: 0,
//       carbs: 20,
//     },
   
//   },
//   {
//     restaurant: "Pizza Palace",
//     name: "Meat Lovers Pizza",
//     rating: 4.7,
//     description:
//       "A carnivore's dream pizza loaded with pepperoni, bacon, ham, and sausage. Every bite is packed with rich, meaty flavors and melted mozzarella.",
//     price: 250,
//     ingredients: [
//       "pepperoni",
//       "bacon",
//       "ham",
//       "sausage",
//       "mozzarella",
//       "tomato sauce",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201790/dishes/meatlovers.webp",
//     allergens: ["milk", "gluten"],
//     nutrition: {
//       calories: 980,
//       protein: 48,
//       fat: 52,
//       carbs: 84,
//     },
//   },
//   {
//     restaurant: "Pizza Palace",
//     name: "Hawaiian Pizza",
//     rating: 4.2,
//     description:
//       "A controversial yet delicious combination of sweet pineapple and savory ham on a bed of melted mozzarella. The perfect balance of sweet and salty flavors.",
//     price: 220,
//     ingredients: ["ham", "pineapple", "mozzarella", "tomato sauce"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201787/dishes/hawaiian.webp",
//     allergens: ["milk", "gluten"],
//     nutrition: {
//       calories: 780,
//       protein: 32,
//       fat: 36,
//       carbs: 88,
//     },
   
//   },
//   {
//     restaurant: "Pizza Palace",
//     name: "Margherita Pizza",
//     rating: 4.5,
//     description:
//       "The classic Neapolitan pizza featuring fresh tomatoes, mozzarella, and basil. A simple yet perfect combination of flavors that never goes out of style.",
//     price: 200,
//     ingredients: [
//       "mozzarella",
//       "fresh tomatoes",
//       "basil",
//       "olive oil",
//       "tomato sauce",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201789/dishes/margherita.webp",
//     allergens: ["milk", "gluten"],
//     nutrition: {
//       calories: 720,
//       protein: 28,
//       fat: 32,
//       carbs: 82,
//     },
//   },
//   {
//     restaurant: "Snack House",
//     name: "French Fries",
//     rating: 4.4,
//     description:
//       "Golden crispy fries made from premium potatoes and cooked to perfection. The perfect side dish or snack that's crispy on the outside and fluffy on the inside.",
//     price: 50,
//     ingredients: ["potatoes", "vegetable oil", "salt"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201780/dishes/french-fries.webp",
//     allergens: [],
//     nutrition: {
//       calories: 320,
//       protein: 4,
//       fat: 16,
//       carbs: 42,
//     },
//   },
//   {
//     restaurant: "Snack House",
//     name: "Onion Rings",
//     rating: 4.3,
//     description:
//       "Crispy battered onion rings with a perfect golden crust. A delicious appetizer that combines the sweetness of onions with a satisfying crunch.",
//     price: 70,
//     ingredients: ["onions", "batter", "vegetable oil", "spices"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201774/dishes/onion-rings.webp",
//     allergens: ["gluten"],
//     nutrition: {
//       calories: 340,
//       protein: 6,
//       fat: 18,
//       carbs: 40,
//     },
    
//   },
//   {
//     restaurant: "Fresh Bar",
//     name: "Cherry Fizz",
//     rating: 4.2,
//     description:
//       "A refreshing cherry juice blend with sparkling water and fresh mint. The natural sweetness of cherries combined with a hint of mint creates a perfect summer drink.",
//     price: 35,
//     ingredients: ["cherry juice", "sparkling water", "mint"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201776/dishes/cherry.webp",
//     allergens: [],
//     nutrition: {
//       calories: 95,
//       protein: 1,
//       fat: 0,
//       carbs: 23,
//     },
   
//   },
//   {
//     restaurant: "Sushi House",
//     name: "Spider Roll",
//     rating: 4.7,
//     description:
//       "A unique sushi roll featuring crispy soft shell crab with avocado and cucumber. The spicy mayo and tobiko add extra layers of flavor and texture.",
//     price: 180,
//     ingredients: [
//       "soft shell crab",
//       "avocado",
//       "cucumber",
//       "spicy mayo",
//       "tobiko",
//       "rice",
//       "nori",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201799/dishes/spider.webp",
//     allergens: ["shellfish", "eggs", "soy"],
//     nutrition: {
//       calories: 500,
//       protein: 22,
//       fat: 24,
//       carbs: 56,
//     },
    
//   },
//   {
//     restaurant: "Fresh Bar",
//     name: "Virgin Mojito",
//     rating: 4.6,
//     description:
//       "A refreshing non-alcoholic mojito made with fresh mint, lime, and sparkling water. The perfect balance of sweet, sour, and minty flavors.",
//     price: 50,
//     ingredients: ["mint", "lime", "sugar syrup", "sparkling water"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201791/dishes/mojito.webp",
//     allergens: [],
//     nutrition: {
//       calories: 120,
//       protein: 0,
//       fat: 0,
//       carbs: 30,
//     },
    
//   },
//   {
//     restaurant: "Burger Joint",
//     name: "Classic Burger",
//     rating: 4.5,
//     description:
//       "The perfect classic burger with a juicy beef patty, fresh vegetables, and special sauce. A timeless combination that never disappoints.",
//     price: 140,
//     ingredients: [
//       "beef patty",
//       "cheese",
//       "lettuce",
//       "tomato",
//       "onion",
//       "special sauce",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201781/dishes/classic.webp",
//     allergens: ["milk", "gluten", "eggs"],
//     nutrition: {
//       calories: 650,
//       protein: 32,
//       fat: 38,
//       carbs: 45,
//     },
    
//   },
//   {
//     restaurant: "Italian Corner",
//     name: "Bruschetta",
//     rating: 4.4,
//     description:
//       "Classic Italian bruschetta with fresh tomatoes, basil, and garlic on toasted baguette. The perfect appetizer that combines fresh flavors with crispy bread.",
//     price: 80,
//     ingredients: ["baguette", "tomatoes", "basil", "garlic", "olive oil"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201772/dishes/bruschetta.webp",
//     allergens: ["gluten"],
//     nutrition: {
//       calories: 220,
//       protein: 6,
//       fat: 8,
//       carbs: 32,
//     },
//   },
//   {
//     restaurant: "Burger Joint",
//     name: "Chicken Burger",
//     rating: 4.3,
//     description:
//       "A lighter alternative featuring a juicy chicken breast patty with fresh vegetables. The perfect choice for those who prefer poultry over beef.",
//     price: 160,
//     ingredients: ["chicken breast", "lettuce", "tomato", "mayo", "pickles"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201778/dishes/chicken.webp",
//     allergens: ["gluten", "eggs"],
//     nutrition: {
//       calories: 580,
//       protein: 34,
//       fat: 28,
//       carbs: 42,
//     },
//   },
//   {
//     restaurant: "Sushi House",
//     name: "Dragon Roll",
//     rating: 4.8,
//     description:
//       "An elegant sushi roll with tender eel, creamy avocado, and crisp cucumber. The unagi sauce adds a rich, sweet flavor that complements the ingredients perfectly.",
//     price: 220,
//     ingredients: ["eel", "avocado", "cucumber", "unagi sauce", "rice", "nori"],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201783/dishes/dragon.webp",
//     allergens: ["fish", "soy"],
//     nutrition: {
//       calories: 520,
//       protein: 24,
//       fat: 26,
//       carbs: 54,
//     },
//   },
//   {
//     restaurant: "Wings & Beer",
//     name: "Buffalo Wings",
//     rating: 3.1,
//     description:
//       "Crispy chicken wings tossed in spicy buffalo sauce with a side of creamy blue cheese dip. The perfect combination of heat and coolness in every bite.",
//     price: 120.0,
//     ingredients: [
//       "chicken wings",
//       "buffalo sauce",
//       "butter",
//       "spices",
//       "blue cheese dip",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201773/dishes/buffalo-wings.webp",
//     allergens: ["milk"],
//     nutrition: {
//       calories: 680,
//       protein: 42,
//       fat: 52,
//       carbs: 8,
//     },
//   },
//   {
//     restaurant: "Burger Joint",
//     name: "Vegan Burger",
//     rating: 1.6,
//     description:
//       "A plant-based burger that doesn't compromise on taste, featuring a flavorful patty with vegan cheese and mayo. A delicious option for vegans and meat-lovers alike.",
//     price: 150.0,
//     ingredients: [
//       "plant-based patty",
//       "lettuce",
//       "tomato",
//       "vegan cheese",
//       "vegan mayo",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201803/dishes/vegan.webp",
//     allergens: ["soy", "gluten"],
//     nutrition: {
//       calories: 520,
//       protein: 22,
//       fat: 24,
//       carbs: 58,
//     },
//   },
//   {
//     restaurant: "Snack House",
//     name: "Mozzarella Sticks",
//     rating: 3.8,
//     description:
//       "Golden-fried mozzarella sticks with a crispy breadcrumb coating and melted cheese center. Served with tangy marinara sauce for the perfect dipping experience.",
//     price: 90.0,
//     ingredients: [
//       "mozzarella cheese",
//       "breadcrumbs",
//       "herbs",
//       "marinara sauce",
//     ],
//     image:
//       "https://res.cloudinary.com/dlistrvqm/image/upload/v1741201779/dishes/mozzarella-sticks.webp",
//     allergens: ["milk", "gluten", "eggs"],
//     nutrition: {
//       calories: 420,
//       protein: 18,
//       fat: 28,
//       carbs: 32,
//     },
//   },
// ];
