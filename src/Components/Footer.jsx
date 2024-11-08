import style from "@/css/Footer.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <>
      <div className={style.Footer}>
        <h1>Foodify</h1>
        <ul className={style.list}>
          <li>Company</li>
          <li>About Us</li>
          <li>Our Menu</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Gift Cards</li>
          <li>Press</li>
        </ul>

        <ul className={style.list}>
          <li>Support</li>
          <li>Help Center</li>
          <li>Order Tracking</li>
          <li>FAQs</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
        
        <ul className={style.list}>
          <li>Contact</li>
          <li>
            Foodify HQ, 123 Gourmet Street, Flavor Town, FT 56789
          </li>
          <li className={style.icons}>
            <MdEmail /> support@foodify.com
          </li>
          <li className={style.icons}>
            <FaPhoneAlt /> +1 (800) 123-4567
          </li>
        </ul>
        
        <ul className={style.list}>
          <li className={style.icons}>
            <IoLogoYoutube /> <FaFacebookF /> <IoLogoInstagram /> <FaLinkedinIn />
          </li>
          <li>Copyright © 2024 Foodify, Inc.</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
