import React from "react";
import "./Navbar.css";
import {
  SiHomeassistant,
  SiPrivateinternetaccess,
  SiCkeditor4,
} from "react-icons/si";
import {GiBlackHandShield} from "react-icons/gi"
import { RiBuilding2Fill } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";

export const Navbar = () => {
  return (
    <div>
      <div className="navdiv">
        <img src={require("../Assets/NavUnderlay.png")} alt="" />
        <nav className="navbar">
          <div className="icons">
            <Link to="/" className="nav-icon-l">
              <SiHomeassistant className="nav-icon-t" title="Home" id="Home" />
            </Link>
            <Link to="/About" className="nav-icon-l">
              <SiPrivateinternetaccess className="nav-icon" title="About" />
            </Link>
            <Link to="/Skills" className="nav-icon-l">
              <SiCkeditor4 className="nav-icon" title="Skills" />
            </Link>
            <Link to="/Services" className="nav-icon-l">
              <MdManageAccounts className="nav-icon-b" title="Services" />
            </Link>
            <Link to="/Clients" className="nav-icon-l">
              <GiBlackHandShield className="nav-icon" title="Client Testimonials" />
            </Link>
            <Link to="/Contact" className="nav-icon-l">
              <LuPhoneCall className="nav-icon-b" title="Contact" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
