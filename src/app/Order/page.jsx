"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "@/css/OrderSummary.module.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

function OrderSummary() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Load the cart items from localStorage
    const savedCart = JSON.parse(localStorage.getItem("foodCart")) || [];
    // Ensure each item has a quantity key, defaulting to 1
    const updatedCart = savedCart.map(item => ({
      ...item,
      quantity: item.quantity || 1 // Set default quantity if missing
    }));
    setCartItems(updatedCart);
    calculateTotalPrice(updatedCart);
  }, []);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.food_price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleAddMore = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1; // Increase the quantity
    setCartItems(updatedCart);
    calculateTotalPrice(updatedCart);
    localStorage.setItem("foodCart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  const handleDelete = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    calculateTotalPrice(updatedCart);
    localStorage.setItem("foodCart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  const handlePlaceOrder = () => {
    localStorage.removeItem("foodCart");
    setCartItems([]);
    setTotalPrice(0);
    router.push("/Thanku"); // Navigate to the thank-you page
  };

  return (
    <>
      <Navbar />
      <div className={style.OrderSummaryContainer}>
        <h2>Your Order Summary</h2>
        {cartItems.length === 0 ? (
          <div className={style.EmptyCart}>
            <img src="/found.svg" alt="Empty Cart" className={style.EmptyCartImage} />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className={style.CartItem}>
                  <div>
                    <h3>{item.food_name}</h3>
                    <p>Price: ${item.food_price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <div className={style.ButtonContainer}>
                      <button onClick={() => handleAddMore(index)} className={style.AddMoreButton}>Add More</button>
                      <button onClick={() => handleDelete(index)} className={style.DeleteButton}>Delete</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className={style.TotalPrice}>
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
              <button onClick={handlePlaceOrder} className={style.PlaceOrderButton}>Place Order</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default OrderSummary;
