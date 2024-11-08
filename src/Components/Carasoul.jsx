'use client'
import "../CSS/Carasoul.css";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaLongArrowAltLeft ,FaLongArrowAltRight} from "react-icons/fa";
//Data
const items = [
  {
    bg_color: "#000000",
    image: "/5.jpg", // Path to image in public folder
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

const Card = (props) => {
  //Carausel Frame
  return (
    <>
      <div className={`outerFrame ${props.isActive ? "active" : ""}`}>
        <div
          className="potrait"
          style={{
            backgroundColor: props.bg_color,
          }}
        >
          <img src={props.image}></img>
        </div>
        <div className="Introduction">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <button className="read"> Read More</button>
        </div>
      </div>
    </>
  );
};

//Carausel Pagination
const Dot = (props) => {
  return <span className={`dot ${props.position ? "active" : ""}`}></span>;
};

const Carasoul = () => {
  const [moveClass, setMoveClass] = useState(""); //next and prev
  const [carouselItems, setCarouselItems] = useState(items);
  const [currentSlide, setCurrentSlide] = useState(0); //current Slide number

  useEffect(() => {
    document.documentElement.style.setProperty("--num", carouselItems.length);
  }, [carouselItems]);

  useEffect(() => {
    //Change the Slides After 5s
    const interval = setInterval(
      () => {
        setMoveClass("prev");
        setCurrentSlide((currentSlide + 1) % carouselItems.length);
      },

      5000
    );

    return () => clearInterval(interval);
  }, []);

  const handleAnimationEnd = () => {
    if (moveClass === "prev") {
      shiftNext([...carouselItems]);
    } else if (moveClass === "next") {
      shiftPrev([...carouselItems]);
    }
    setMoveClass("");
  };

  const shiftPrev = (copy) => {
    //to get the slide into the loop if pressed prev
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy) => {
    //to get the slide into the loop if pressed next
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  };

  return (
    <>
      <div className="carouselwrapper module-wrapper">
        <center className="CarasoulDescription">
          <h4>FEATURES RESTARUNT</h4>
        </center>

        <ul
          onAnimationEnd={handleAnimationEnd}
          className={`${moveClass} carousel`}
        >
          {carouselItems.map((t, index) => (
            <Card
              key={t.title + index}
              text={t.text}
              title={t.title}
              image={t.image}
              bg_color={t.bg_color}
              isActive={index === currentSlide}
            />
          ))}
        </ul>

        <div className="ui">
          <span
            onClick={() => setMoveClass("next")}
            
          >
           <FaLongArrowAltLeft/>
          </span>

          <div className="dots-container">
            {carouselItems.map((z, index) => (
              <Dot key={index} position={z.Id === currentSlide} />
            ))}
          </div>

          <span
            onClick={() => setMoveClass("prev")}
           
          >
            <FaLongArrowAltRight/>
          </span>
        </div>
      </div>
    </>
  );
};

export default Carasoul;
