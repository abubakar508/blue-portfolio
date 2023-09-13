import React, { useState } from "react";
import "./Services.css";
import { BsFillPenFill } from "react-icons/bs";
import { SiInkscape, SiHiveBlockchain, SiQuickbooks } from "react-icons/si";
import { MdDesktopWindows } from "react-icons/md";
import { GiFountainPen } from "react-icons/gi";
import {Link} from "react-router-dom"

export const Services = () => {
  //hover 0
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  //hover1
  const [hovered1, setHovered1] = useState(false);

  const handleMouseEnter1 = () => {
    setHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setHovered1(false);
  };
  //hover2
  const [hovered2, setHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
  };
  //hover3
  const [hovered3, setHovered3] = useState(false);

  const handleMouseEnter3 = () => {
    setHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setHovered3(false);
  };
  //hover4
  const [hovered4, setHovered4] = useState(false);

  const handleMouseEnter4 = () => {
    setHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setHovered4(false);
  };
  //hover5
  const [hovered5, setHovered5] = useState(false);

  const handleMouseEnter5 = () => {
    setHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setHovered5(false);
  };

  return (
    <div>
      <div className="services">
        <div className="empty-serv-div"></div>
        <div className="services-header">
          <h1>
            My Services<span>.</span>
          </h1>

          <div className="serv-cont">
            <small>
              Offering services is the best way of connecting with the desires
              of a client. In, with the density of great offerings, We focus in
              making our clients satisfied. Book your space now.
            </small>
          </div>
        </div>

        <div className="service-container">
          <Link to="/Design"><div
            className="service-image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {hovered && (
              <div className="service-details">
                <h3>
                  <BsFillPenFill className="service-icon-image" />
                  Design<span>.</span>
                </h3>
                <small>Transform your ideas into great designs</small>
              </div>
            )}
            <img src={require("../../Assets/Work1.png")} alt="design" />
          </div></Link>
          <div
            className="service-image"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            {hovered1 && (
              <div className="service-details">
                <h3>
                  <SiInkscape className="service-icon-image" />
                  Branding<span>.</span>
                </h3>
                <small>Be unique through our hands on branding</small>
              </div>
            )}
            <img src={require("../../Assets/Work2.jpg")} alt="Branding" />
          </div>
          <div
            className="service-image"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            {hovered2 && (
              <div className="service-details">
                <h3>
                  <MdDesktopWindows className="service-icon-image" />
                  Development<span>.</span>
                </h3>
                <small>Why not do it digitally through our expertise?</small>
              </div>
            )}
            <img src={require("../../Assets/work3.jpg")} alt="" />
          </div>
          <div
            className="service-image"
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
          >
            {hovered3 && (
              <div className="service-details">
                <h3>
                  <GiFountainPen className="service-icon-image" />
                  Scriptwriting<span>.</span>
                </h3>
                <small>
                  Convert your ideas into a captivating piece of art
                </small>
              </div>
            )}
            <img src={require("../../Assets/work4.jpg")} alt="" />
          </div>
          <div
            className="service-image"
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
          >
            {hovered4 && (
              <div className="service-details">
                <h3>
                  <SiHiveBlockchain className="service-icon-image" />
                  Blockchain<span>.</span>
                </h3>
                <small>Dive into WEB3 through Blockchain technology</small>
              </div>
            )}
            <img src={require("../../Assets/work5.jpg")} alt="" />
          </div>
          <div
            className="service-image"
            onMouseEnter={handleMouseEnter5}
            onMouseLeave={handleMouseLeave5}
          >
            {hovered5 && (
              <div className="service-details">
                <h3>
                  <SiQuickbooks className="service-icon-image" />
                  Finance<span>.</span>
                </h3>
                <small>Make Accounting & Finance easy</small>
              </div>
            )}
            <img src={require("../../Assets/work6.jpg")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
