import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar";
import Carasoul from "@/Components/Carasoul";
const carouselData = [
  {
    bg_color: "#ffefd5",
    image: "/1.jpg", // Path to image in public folder
    title: "Spaghetti Carbonara",
    text: "A delicious blend of creamy sauce with crispy bacon and parmesan cheese.",
    address: "/dishes/spaghetti-carbonara",
  },
  {
    bg_color: "#ffe4b5",
    image: "/2.jpg",
    title: "Grilled Salmon",
    text: "Perfectly grilled salmon fillet served with a lemon butter sauce.",
    address: "/dishes/grilled-salmon",
  },
  {
    bg_color: "#ffe4c4",
    image: "/3.jpg",
    title: "Caesar Salad",
    text: "Fresh romaine lettuce, croutons, and parmesan dressed in Caesar sauce.",
    address: "/dishes/caesar-salad",
  },
];

// Render Carousel with sample data


export default function Home() {
  return (
    <>
   <Navbar/>
   
   <Carasoul items={carouselData} />;
   </>

  );
}
