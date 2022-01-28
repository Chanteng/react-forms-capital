import React, { useState } from "react";
import Logo from "../images/Logo.jpg";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo" smooth={true} duration={2000}>
        <img src={Logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={1000} >Home</Link>
        </li>
        <li>
          <Link to="product" smooth={true} duration={1000}>Product & Services</Link>
        </li>
        <li>
          <Link to="corperate" smooth={true} duration={1000}>Corporate Finance</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000}>Contact Us</Link>
        </li>
        <li>
          <Link to="download" smooth={true} duration={1000}>Download</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
