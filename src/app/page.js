
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar";
import Carasoul from "@/Components/Carasoul";
import Mag_Section from "@/Components/MagCluster";
import Magazine from "@/Components/Magazine_Frame_1";
// import {Data ,Data2} from "@/JS/Data";
const carouselData = [
  {
    bg_color: "#ffe5b4",
    image: "/1.jpg", // Path to image in public folder
    title: "Double Cheeseburger Special",
    text: "Enjoy a juicy double cheeseburger with fresh lettuce, tomatoes, and a side of crispy fries. Limited-time offer!",
    address: "/deals/double-cheeseburger-special",
  },
  {
    bg_color: "#ffcccb",
    image: "/2.jpg",
    title: "Family Pizza Deal",
    text: "Get two large pizzas with your choice of toppings for the price of one. Perfect for a family meal!",
    address: "/deals/family-pizza-deal",
  },
  {
    bg_color: "#e0ffff",
    image: "/3.jpg",
    title: "Pasta Delight Combo",
    text: "Choose any two pasta dishes and get a free garlic bread. A perfect Italian treat for pasta lovers!",
    address: "/deals/pasta-delight-combo",
  },
];
const Data = [
  { thumbnail: "/1.jpg", Heading: "Heading" },
  { thumbnail: "/2.jpg", Heading: "Heading" },
  { thumbnail: "/3.jpg", Heading: "Heading" },
  { thumbnail: "/4.jpg", Heading: "Heading" },
  { thumbnail: "/5.jpg", Heading: "Heading" },

  { thumbnail: "/6.jpg", Heading: "Heading" },
  { thumbnail: "/7.jpg", Heading: "Heading" },
  { thumbnail: "/8.jpg", Heading: "Heading" },
  { thumbnail: "/1.jpg", Heading: "Heading" },
  { thumbnail: "/3.jpg", Heading: "Heading" },
  { thumbnail: "/4.jpg", Heading: "Heading" },
  { thumbnail: "/8.jpg", Heading: "Heading" },
  { thumbnail: "/1.jpg", Heading: "Heading" },
  { thumbnail: "/1.jpg", Heading: "Heading" },
  { thumbnail: "/1.jpg", Heading: "Heading" },

  { thumbnail: "/1.jpg", Heading: "Heading" },
  { thumbnail: "/1.jpg", Heading: "Heading" },
  { thumbnail: "/1.jpg", Heading: "Heading" },
  { thumbnail: "/1.jpg", Heading: "Heading" },
];

// Render Carousel with sample data


export default function Home() {
  return (
    <>
   <Navbar/>
   
   <Carasoul items={carouselData} />;
   <Mag_Section  Data={Data} MagazinesPerPage={9}/>
   
   </>

  );
}
