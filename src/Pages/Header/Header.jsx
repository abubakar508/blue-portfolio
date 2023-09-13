import React from "react";
import "./Header.css";
import { SiFacebook } from "react-icons/si";
import { SiGithub,  } from "react-icons/si";
import { FaGooglePlus } from "react-icons/fa";
import {
  SiInstagram,
  SiTwitter,
  SiLinkedin,
  SiPinterest,
} from "react-icons/si";
import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <div>
      <div className="header">
        <img src={require("../../Assets/HeaderLeft.png")} alt="" />
        <div className="portfolio-name">
          <h2>
            Abu-Bakr{" "}
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
          />
          <Link to="https://www.google.com" target="_blank" rel="noopener noreferrer" ><SiFacebook className="header-icon" title="Facebook" /></Link>
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
