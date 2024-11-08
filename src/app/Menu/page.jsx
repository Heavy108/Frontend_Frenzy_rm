// 'use client'
// import "../global.css";
import MagCard from "@/Components/Mag_Intro_Card";
import Navbar from "@/Components/Navbar";
import Mag_Section from "@/Components/MagCluster";
import Footer from "@/Components/Footer";
const Data =[
  {
    "food_name": "Margherita Pizza",
    "food_price": 8.99,
    "food_description": "Classic Margherita with tomato sauce, mozzarella, and fresh basil.",
    "restaurant_name": "Pizza Haven",
    "image_url": "1.jpg"
  },
  {
    "food_name": "Spaghetti Carbonara",
    "food_price": 12.50,
    "food_description": "Spaghetti with creamy sauce, pancetta, and Parmesan cheese.",
    "restaurant_name": "Italiano Bistro",
    "image_url": "2.jpg"
  },
  {
    "food_name": "Beef Burger",
    "food_price": 10.00,
    "food_description": "Juicy beef patty with lettuce, tomato, cheese, and special sauce.",
    "restaurant_name": "Burger Joint",
    "image_url": "3.jpg"
  },
  {
    "food_name": "Chicken Caesar Salad",
    "food_price": 9.00,
    "food_description": "Grilled chicken with romaine lettuce, croutons, and Caesar dressing.",
    "restaurant_name": "Healthy Bites",
    "image_url": "4.jpg"
  },
  {
    "food_name": "Pad Thai",
    "food_price": 11.00,
    "food_description": "Thai stir-fried noodles with shrimp, tofu, peanuts, and bean sprouts.",
    "restaurant_name": "Thai Palace",
    "image_url": "5.jpg"
  },
  {
    "food_name": "Sushi Platter",
    "food_price": 20.00,
    "food_description": "Assortment of fresh sushi rolls and nigiri with wasabi and soy sauce.",
    "restaurant_name": "Sushi World",
    "image_url": "6.jpg"
  },
  {
    "food_name": "Vegan Buddha Bowl",
    "food_price": 10.50,
    "food_description": "Healthy bowl with quinoa, chickpeas, avocado, and mixed greens.",
    "restaurant_name": "Green Eatery",
    "image_url": "7.jpg"
  },
  {
    "food_name": "Tacos al Pastor",
    "food_price": 8.00,
    "food_description": "Mexican-style tacos with marinated pork, pineapple, and cilantro.",
    "restaurant_name": "Mexicana Grill",
    "image_url": "8.jpg"
  },
  {
    "food_name": "Butter Chicken",
    "food_price": 13.00,
    "food_description": "Tender chicken in a creamy, spiced tomato sauce with naan bread.",
    "restaurant_name": "Taste of India",
    "image_url": "9.jpg"
  },
  {
    "food_name": "Chocolate Lava Cake",
    "food_price": 6.50,
    "food_description": "Warm chocolate cake with a gooey chocolate center, served with vanilla ice cream.",
    "restaurant_name": "Sweet Delights",
    "image_url": "10.jpg"
  }
]



function Byte() {
  // const data = await fetchData();

  const Title = "Menu";
  const Image = "/Menu.avif";
  const Description =
    "< Byte Description > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
  return (
    <>
      <Navbar />
      <MagCard title={Title} image={Image} Info={Description} />
      <Mag_Section Data={Data} MagazinesPerPage={3} />

      <Footer />
    </>
  );
}
export default Byte;
