import style from "@/css/ThreeCardFrame.module.css";
import Link from "next/link";

function ThreeCardFrame(props) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December",
    ];
    const monthName = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${monthName} ${day}, ${year}`;
  };

  const handleReadMoreClick = () => {
    // Get existing cart data from localStorage
    const existingCart = JSON.parse(localStorage.getItem("foodCart")) || [];

    // Create a new cart item from props
    const newCartItem = {
      food_name: props.food_name,
      food_price: props.food_price,
      image_url: props.image_url, // Save the image URL if needed
    };

    // Add new item to the cart
    const updatedCart = [...existingCart, newCartItem];

    // Save the updated cart to localStorage
    localStorage.setItem("foodCart", JSON.stringify(updatedCart));

    // Show an alert confirming the addition
    alert(`${props.food_name} has been added to your cart!`);
  };

  return (
    <div className={style.InfoCard_Container}>
      <img src={props.image_url} alt={props.food_name} />
      <div className={style.Card_Introduction}>
        <div className={style.Card_Tags}>
          <li className={style.Tags}>{props.restaurant_name}</li>
          <li>{formatDate(new Date())}</li>
        </div>
        <div>
          <h2>{props.food_name}</h2>
          <p>{props.food_description}</p>
          <p><strong>Price:</strong> ${props.food_price}</p>
        </div>
        <div className={style.buttonAlignment}>
          <button onClick={handleReadMoreClick}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ThreeCardFrame;
