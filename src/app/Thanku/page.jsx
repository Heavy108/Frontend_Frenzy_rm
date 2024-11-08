import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import style from "@/css/ThankYouPage.module.css";

function ThankYouPage() {
  return (
    <>
    <Navbar/>
    <div className={style.ThankYouContainer}>
      <img src="/thanku.svg" alt="Thank You" className={style.ThankYouImage} />
      <h2>Thank you for your order!</h2>
      <p>Your delicious meal is on its way.</p>
    </div>

    <Footer/>
    </>
  );

}

export default ThankYouPage;
