"use client";
import style from "@/css/Newsletter.module.css";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
// import Modal from "./Modal";

function NewsLetter() {
  const initialState = {
    email: "",
    username: "",
  };

  const [user, setUser] = useState(initialState);
  const [showModal, setShowModal] = useState({ show: false, message: "" });

  const closeModal = () => {
    setShowModal({ show: false, message: "" });
  };

  const onSubscribe = () => {
    if (user.email && user.username) {
      setShowModal({ show: true, message: "Thank you for subscribing!" });
      setUser(initialState); // Clear input fields
    } else {
      setShowModal({ show: true, message: "Please enter both name and email." });
    }
  };

  return (
    <>
      {showModal.show && (
        <Modal closeModal={closeModal} message={showModal.message} />
      )}
      <div className={style.Newsletter_outerFrame}>
        <div className={style.Subscribe_Section}>
          <h2>Subscribe to Newsletter</h2>
          <p>Subscribe to our email & to get exciting offers & Deals</p>

          <label htmlFor="Name" className={style.label}>
            Name
          </label>
          <div className={style.input_container}>
            <FaUser className={style.icon} />
            <input
              placeholder="Enter your Name"
              className={style.input_field}
              id="username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              value={user.username}
            />
          </div>

          <label htmlFor="email" className={style.label}>
            Email Address
          </label>
          <div className={style.input_container}>
            <MdEmail className={style.icon} />
            <input
              placeholder="Enter Email"
              id="email"
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className={style.input_field}
            />
          </div>

          <button
            className={style.Subscribe_button}
            onClick={onSubscribe}
          >
            Subscribe
          </button>
        </div>

        <div className={style.Newsletter_image}>
          <img src="/Newsletter.svg" alt="Newsletter image" />
        </div>
      </div>

      <div className={style.horizontal_line}>
        <span className={style.Subscribe_message}>
          Would you like us to report on something specific? <b>Let Us Know!</b>
        </span>
      </div>
    </>
  );
}

export default NewsLetter;
