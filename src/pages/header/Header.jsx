import React from "react";
import "./Header.css";
import HeaderImage from "../../assets/header.jpg";
import SocialIcons from "./SocialIcons";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Ian Madhara</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          nesciunt eius eaque, cumque iste praesentium quidem optio suscipit
          delectus qui dolore eum recusandae consectetur officiis ut sapiente
          possimus repudiandae cupiditate.
        </p>
        <div className="header__cta">
          <a href="#contact">Let's Talk</a>
          <a href="#portfolio">My Work</a>
        </div>
        <SocialIcons />
      </div>
    </header>
  );
}

export default Header;
