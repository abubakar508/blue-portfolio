import React, { useState } from "react";
import "./Header.css";
import { SiFacebook } from "react-icons/si";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaGooglePlus } from "react-icons/fa";
import {
  SiInstagram,
  SiTwitter,
  SiLinkedin,
  SiPinterest,
} from "react-icons/si";
import { Link } from "react-router-dom";

export const Header = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      <div className="header">
        <img src={require("../../Assets/HeaderLeft.png")} alt="" />
        <div className="portfolio-name">
          <h2>
            Abisma{" "}
            <small className="small">
              Ismail
              <em>
                .<br />
              </em>
            </small>
          </h2>
        </div>

        <div className="header-icons">
          <FaGooglePlus
            className="header-icon"
            title="Mail"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {hovered && (
            <div
              className="dropdown-content"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="dc-1"><Link><SiGmail/>abubakarismail508@gmail.com</Link></div>
              <dic className="dc-1"><Link><SiGmail/>imabubakar508@gmail.com</Link></dic>
              <div className="dc-1"><Link><SiGmail/>abubakarabisma@gmail.com</Link></div>
            </div>
          )}
          <SiFacebook className="header-icon" title="Facebook" />
          <SiGithub className="header-icon" title="Github" />
          <SiInstagram className="header-icon" title="Instagram" />
          <SiTwitter className="header-icon" title="Twitter(X)" />
          <SiLinkedin className="header-icon" title="LinkedIn" />
          <SiPinterest className="header-icon" title="Pinterest" />
        </div>
        <div className="time">
          <h2>
            <small>The Time is</small>{" "}
            <small className="small-time">
              {new Date().toLocaleTimeString()}
            </small>
          </h2>
        </div>
      </div>
    </div>
  );
};
