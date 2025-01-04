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
        <h3>&#x1F44B; Hi, I 'm Ian </h3>
        <p>
          I'm a Software and ML/ML engineer with a Master's degree in AI,
          focusing on building intelligenet systems
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
