import React from "react";
import "./Header.css";
import HeaderImage from "../../assets/ian.jpeg";
import SocialIcons from "./SocialIcons";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Hello, I 'm Ian Madhara</h3>
        <p>
          I'm an AI/ML engineer
          <span>Please </span>
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <SocialIcons />
      </div>
    </header>
  );
}

export default Header;
