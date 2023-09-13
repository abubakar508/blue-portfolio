import React, { useState } from "react";
import "./Design.css";
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Design = () => {
  const [showModal, setShowModal] = useState(false);
  const modal = () => {
    setShowModal(true);
  };
 
  const noModal = () => {
    setShowModal(false);
  };

  const [showModal1, setShowModal1] = useState(false);
  const modal1 = () => {
    setShowModal1(true);
  };
  const noModal1 = () => {
    setShowModal1(false);
  };

  const [showModal2, setShowModal2] = useState(false);
  const modal2 = () => {
    setShowModal2(true);
  };
  const noModal2 = () => {
    setShowModal2(false);
  };

  const [showModal3, setShowModal3] = useState(false);
  const modal3 = () => {
    setShowModal3(true);
  };
  const noModal3 = () => {
    setShowModal3(false);
  };

  const [showModal4, setShowModal4] = useState(false);
  const modal4 = () => {
    setShowModal4(true);
  };
  const noModal4 = () => {
    setShowModal4(false);
  };

  const [showModal5, setShowModal5] = useState(false);
  const modal5 = () => {
    setShowModal5(true);
  };
  const noModal5 = () => {
    setShowModal5(false);
  };
  const [showModal6, setShowModal6] = useState(false);
  const modal6 = () => {
    setShowModal6(true);
  };
  const noModal6 = () => {
    setShowModal6(false);
  };

  const [showModal7, setShowModal7] = useState(false);
  const modal7 = () => {
    setShowModal7(true);
  };
  const noModal7 = () => {
    setShowModal7(false);
  };
  return (
    <div>
      <div className="design">
        <Link to="/Services">
          <AiFillCaretLeft className="design-icon" />
        </Link>
        <div className="design-images">
          <div className="design-image" onClick={modal}>
            <img src={require("../../../Assets/SR.png")} alt="" />
          </div>
          <div className="design-image" onClick={modal1}>
            <img src={require("../../../Assets/hb.png")} alt="" />
          </div>
          <div className="design-image" onClick={modal2}>
            <img src={require("../../../Assets/QB.png")} alt="" />
          </div>
          <div className="design-image" onClick={modal3}>
            <img src={require("../../../Assets/DC.png")} alt="" />
          </div>
          <div className="design-image" onClick={modal4}>
            <img src={require("../../../Assets/XD.png")} alt="" />
          </div>
          <div className="design-image" onClick={modal5}>
            <img src={require("../../../Assets/UIC.png")} alt="" />
          </div>
          <div className="design-image" onClick={modal6}>
            <img src={require("../../../Assets/GPS.png")} alt="" />
          </div>
          <div className="design-image" onClick={modal7}>
            <img src={require("../../../Assets/NK.png")} alt="" />
          </div>
        </div>
        {showModal && (
          <div className="design-modal">
            <div className="image-modal">
              <button onClick={noModal}>X Close</button>
              <img src={require("../../../Assets/SR.png")} alt="" />
            </div>
          </div>
        )}

        {showModal1 && (
          <div className="design-modal">
            <div className="image-modal">
              <button onClick={noModal1}>X Close</button>
              <img src={require("../../../Assets/hb.png")} alt="" />
            </div>
          </div>
        )}

        {showModal2 && (
          <div className="design-modal">
            <div className="image-modal">
              <button onClick={noModal2}>X Close</button>
              <img src={require("../../../Assets/QB.png")} alt="" />
            </div>
          </div>
        )}

        {showModal3 && (
          <div className="design-modal">
            <div className="image-modal">
              <button onClick={noModal3}>X Close</button>
              <img src={require("../../../Assets/DC.png")} alt="" />
            </div>
          </div>
        )}

        {showModal4 && (
          <div className="design-modal">
            <div className="image-modal">
              <button onClick={noModal4}>X Close</button>
              <img src={require("../../../Assets/XD.png")} alt="" />
            </div>
          </div>
        )}

        {showModal5 && (
          <div className="design-modal">
            <div className="image-modal">
              <button onClick={noModal5}>X Close</button>
              <img src={require("../../../Assets/UIC.png")} alt="" />
            </div>
          </div>
        )}

        {showModal6 && (
          <div className="design-modal">
            <div className="image-modal">
              <button onClick={noModal6}>X Close</button>
              <img src={require("../../../Assets/GPS.png")} alt="" />
            </div>
          </div>
        )}

        {showModal7 && (
          <div className="design-modal">
            <div className="image-modal">
              <button onClick={noModal7}>X Close</button>
              <img src={require("../../../Assets/NK.png")} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
