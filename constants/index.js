const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "art",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Tropical Breeze",
    country: "ID",
    detail: "Rum, pineapple, lime, pandan syrup",
    price: "$34",
  },
  {
    name: "Mango Sunset",
    country: "ID",
    detail: "Vodka, mango, grapefruit, grenadine",
    price: "$27",
  },
  {
    name: "Blue Paradise",
    country: "US",
    detail: "Blue Curacao, rum, orange, soda",
    price: "$20",
  },
  {
    name: "Passion Mojito",
    country: "CU",
    detail: "Rum, passion fruit, mint, soda",
    price: "$15",
  },
  {
    name: "Dragon Dream",
    country: "ID",
    detail: "Gin, dragon fruit, lime, tonic",
    price: "$32",
  },
];

const mockTailLists = [
  {
    name: "Sunshine Cooler",
    country: "ID",
    detail: "Orange, lemon, honey, soda water",
    price: "$28",
  },
  {
    name: "Island Bliss",
    country: "TH",
    detail: "Lychee, coconut water, lime, mint",
    price: "$19",
  },
  {
    name: "Berry Breeze",
    country: "US",
    detail: "Strawberry, blueberry, lemonade, basil",
    price: "$30",
  },
  {
    name: "Cucumber Splash",
    country: "ID",
    detail: "Cucumber, apple, lime, tonic",
    price: "$12",
  },
  {
    name: "Tropical Zen",
    country: "SG",
    detail: "Pineapple, mango, ginger, soda",
    price: "$25",
  },
];

const featureLists = [
  "Tropical flavors in every sip",
  "Vibrant colors, island vibes",
  "Served chilled, always refreshing",
  "Crafted for the perfect escape",
];

const goodLists = [
  "Fresh local fruits and herbs",
  "Signature tropical blends",
  "Zero shortcuts, just pure taste",
  "Every detail, thoughtfully poured",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "Monday – Thursday", time: "4:00 PM – 12:00 AM" },
  { day: "Friday", time: "4:00 PM – 2:00 AM" },
  { day: "Saturday", time: "2:00 PM – 2:00 AM" },
  { day: "Sunday", time: "2:00 PM – 12:00 AM" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Sunset Orchard",
    image: "/images/drink1.png",
    title: "A Burst of Fruity Elegance",
    description:
      "Infused with vibrant flavors of kiwi, orange, cherry, and grape, the Sunset Orchard is a dazzling fruit cocktail that brings together sweetness and tang in perfect harmony—ideal for a sunset toast in Bali or a stylish soirée in Jakarta.",
  },
  {
    id: 2,
    name: "Amber Flame",
    image: "/images/drink4.png",
    title: "Bold, Smooth, and Timeless",
    description:
      "An elegant blend with a warm amber hue—Amber Flame delivers rich notes with a silky finish, perfect for sophisticated evenings.",
  },
  {
    id: 3,
    name: "Fruit Symphony",
    image: "/images/drink3.png",
    title: "A Vibrant Medley of Freshness",
    description:
      "Overflowing with juicy kiwi, crisp apples, sweet blueberries, and citrusy notes—this lively blend is a celebration in every sip.",
  },
  {
    id: 4,
    name: "Citrus Glow",
    image: "/images/drink4.png",
    title: "Zesty, Bright, Effortlessly Cool",
    description:
      "A radiant blend of orange, bubbles, and a hint of mint—Citrus Glow delivers a sparkling burst that's as uplifting as it is refreshing.",
  },
];

export {
  allCocktails,
  cocktailLists,
  featureLists,
  goodLists,
  mockTailLists,
  navLinks,
  openingHours,
  socials,
  storeInfo,
};
