'use client'
import { IoIosArrowDown } from "react-icons/io";
import style from "@/css/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

function Navbar() {
   const [active, setActive] = useState(false);

   const handleClick = () => {
       setActive(!active);
       console.log(active);
   }

  return (
    <>
      <div className={style.Nav}>
        <div className={style.list}>
          <span>
            <Image 
            src="/Logo (2).png" 
            width={40}
            height={40}
            alt="Food Website Logo"/>
          </span>
          <Link href="/"><h4>Taste Time</h4></Link>
          {/* <span> <GiHamburgerMenu/></span> */}
        </div>
        
        <div className={style.container}>
          <div className={style.list1}>
            <ul>
              <li className={style.opt}>
                <Link className={style.opt2} href="#">
                  Menu <IoIosArrowDown />
                </Link>
                <div className={style.Menu}>
                  <ul>
                    <li>
                      <Link href="/Bestsellers">Bestsellers</Link>
                    </li>
                    <li>
                      <Link href="/NewArrivals">New Arrivals</Link>
                    </li>
                    <li>
                      <Link href="/Combos">Combos</Link>
                    </li>
                    <li>
                      <Link href="/Specials">Chef's Specials</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={style.opt}>
                <Link className={style.opt2} href="#">
                  Our_Story <IoIosArrowDown />
                </Link>
                <div className={style.Menu}>
                  <ul>
                    <li>
                      <Link href="/About">About Us</Link>
                    </li>
                    <li>
                      <Link href="/Team">Our Team</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={style.opt}>
                <Link className={style.opt2} href="#">
                  Events <IoIosArrowDown />
                </Link>
                <div className={style.Menu}>
                  <ul>
                    <li>
                      <Link href="/UpcomingEvents">Upcoming Events</Link>
                    </li>
                    <li>
                      <Link href="/PastEvents">Past Events</Link>
                    </li>
                    <li>
                      <Link href="/Reservations">Reservations</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={style.opt}>
                <Link className={style.opt2} href="#">
                  Services <IoIosArrowDown />
                </Link>
                <div className={style.Menu}>
                  <ul>
                    <li>
                      <Link href="/Catering">Catering</Link>
                    </li>
                    <li>
                      <Link href="/Delivery">Delivery</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={style.opt}>
                <Link className={style.opt2} href="#">
                  Contact <IoIosArrowDown />
                </Link>
                <div className={style.Menu}>
                  <ul>
                    <li>
                      <Link href="/ContactUs">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/Careers">Careers</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className={style.list2}>
            <ul>
              <li><Link href="/Blog">Blog</Link></li>
              <li><Link href="/login">Order Online</Link></li>
              <li><Link href="/Gallery">Gallery</Link></li>
              <Link href="/AdminLogin">
                <button className={style.contact}>Login</button>
              </Link>
            </ul>
          </div>
        </div>

        <div className={style.menuIcon} onClick={handleClick}>
          <span>
            {active ? <IoMdCloseCircleOutline /> : <GiHamburgerMenu />}
          </span>
        </div>
      </div>   
       
      {active &&
        <ul className={style.sideMenu}>
          <li className={style.opt}>
            <Link className={style.opt2} href="#">
              Menu <IoIosArrowDown />
            </Link>
            <hr className={style.horizontal}/>
            <div className={style.Menu}>
              <ul>
                <li><Link href="/Bestsellers">Bestsellers</Link></li>
                <li><Link href="/NewArrivals">New Arrivals</Link></li>
                <li><Link href="/Combos">Combos</Link></li>
                <li><Link href="/Specials">Chef's Specials</Link></li>
              </ul>
            </div>
          </li>
          <li className={style.opt}>
            <Link className={style.opt2} href="#">
              Our Story <IoIosArrowDown />
            </Link>
            <hr className={style.horizontal}/>
            <div className={style.Menu}>
              <ul>
                <li><Link href="/About">About Us</Link></li>
                <li><Link href="/Team">Our Team</Link></li>
              </ul>
            </div>
          </li>
          <li className={style.opt}>
            <Link className={style.opt2} href="#">
              Events <IoIosArrowDown />
            </Link>
            <hr className={style.horizontal}/>
            <div className={style.Menu}>
              <ul>
                <li><Link href="/UpcomingEvents">Upcoming Events</Link></li>
                <li><Link href="/PastEvents">Past Events</Link></li>
                <li><Link href="/Reservations">Reservations</Link></li>
              </ul>
            </div>
          </li>
          <li className={style.opt}>
            <Link className={style.opt2} href="#">
              Services <IoIosArrowDown />
            </Link>
            <hr className={style.horizontal}/>
            <div className={style.Menu}>
              <ul>
                <li><Link href="/Catering">Catering</Link></li>
                <li><Link href="/Delivery">Delivery</Link></li>
              </ul>
            </div>
          </li>
          <li className={style.opt}>
            <Link className={style.opt2} href="#">
              Contact <IoIosArrowDown />
            </Link>
            <hr className={style.horizontal}/>
            <div className={style.Menu}>
              <ul>
                <li><Link href="/ContactUs">Contact Us</Link></li>
                <li><Link href="/Careers">Careers</Link></li>
              </ul>
            </div>
          </li>
          <li className={style.opt}><Link href="/Blog">Blog</Link></li>
          <hr className={style.horizontal}/>
          <li className={style.opt}><Link href="/login">Order Online</Link></li>
          <hr className={style.horizontal}/>
          <li className={style.opt}><Link href="/Gallery">Gallery</Link></li>
          <hr className={style.horizontal}/>
          <Link href="/AdminLogin">
            <button className={style.contact}>Login</button>
          </Link>
        </ul>
      }
    </>
  );
}

export default Navbar;
