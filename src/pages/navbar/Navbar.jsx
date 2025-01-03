import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.jpg";
import menuItems from "./menu";
import { IoIosColorPalette } from "react-icons/io";

function Navbar() {
  return (
    <nav>
      <div className="container nav__container">
        <a href="">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {menuItems.map((menu) => (
            <li key={menu.id}>
              <a href={menu.link}>{menu.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon">
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
