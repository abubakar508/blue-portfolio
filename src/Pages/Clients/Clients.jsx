import React, {useState, useEffect} from "react";
import "./Clients.css"
import {GrArchlinux} from "react-icons/gr"
import client1 from "../../Assets/hala-removebg-preview.png"
import client2 from "../../Assets/me.png"
import client3 from "../../Assets/me.png"
import client4 from "../../Assets/me.png"
import client5 from "../../Assets/me.png"

export const Clients = () => {
  const images = [
    {
      img: client1,
      name: "Abu-Bakr",
      spec: "Customer",
    },
    {
      img: client2,
      name: "Haroun",
      spec: "customer"
    },
    {
      img: client3,
      name: "Bishar",
      spec: "Associate",
    },
  
    {
      img: client4,
      name: "Abu Quweis",
      spec: "Business Partner"
    },
    {
      img: client5,
      name: "Ashfaq",
      spec: "Employee"
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); 
    // Cahnges after 3 sec.

    return () => {
      clearInterval(intervalId);
    };
  },
  )


  return (
   <div>
    <button className="prev" onClick={prevSlide}>
      <GrArchlinux/>
      </button>
      <div className="client">
        <div className="client-img">
      <img
        src={images[currentIndex].img}
        alt={`Slide ${currentIndex}.`}
      />
      </div>
      <div className="client-say"></div>
      
      </div>
      <button className="next" onClick={nextSlide}>
        <GrArchlinux/>
      </button>
   </div>
  );
};
