import React from "react";
import socials from "./socials";

const SocialIcons = () => {
  return (
    <div className="header__socials">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
