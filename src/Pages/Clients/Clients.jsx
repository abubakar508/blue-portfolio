import React, { useState, useEffect } from 'react';
import "./Clients.css";
import photo1 from "../../Assets/me.png";
import photo2 from "../../Assets/hala-removebg-preview.png";
import photo3 from "../../Assets/QB.png"
import photo4 from "../../Assets/SR.png"
import photo5 from "../../Assets/DC.png"
import photo6 from "../../Assets/GPS.png"

export const Clients = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Abu Quweis',
      photo: photo1,
      text: 'I had an amazing experience working with this company. Their services exceeded my expectations!'
    },
    {
      id: 2,
      name: 'Abu-Bakr',
      photo: photo2,
      text: 'The team was very professional and attentive to my project requirements. I highly recommend them.'
    },
    {
      id: 3,
      name: 'The Qalb Bossom Team',
      photo: photo3,
      text: 'The team displayed a high level of professionalism and delivered a meticulously crafted design for our project. We look forward to maintaining our collaboration with them in the future.'
    },
    {
      id: 4,
      name: 'Survival Refillers',
      photo: photo4,
      text: 'Exhibiting a remarkable level of professionalism, the team demonstrated keen attentiveness to the specific requirements of my project. Their commitment to understanding and addressing my needs was truly impressive. Based on my experience, I have no hesitation in offering my strong recommendation for their services. Their ability to cater to project demands with such professionalism sets them apart. In my view, they are a top choice for anyone seeking dedicated and attentive teamwork.'
    },
    {
      id: 5,
      name: 'DAUB Customs',
      photo: photo5,
      text: 'Working with Abisma was a game-changer for our marketing campaigns. Their creative brilliance and attention to detail brought our brand to life in ways we had not imagined. The ads they designed not only captured our message perfectly but also resonated with our target audience, resulting in a significant increase in engagement and conversions.'
    },
    {
      id: 6,
      name: 'GO PAY Sales & Marketing Team',
      photo: photo6,
      text: 'We got a breathtaking UI that has been built by this team. The Solution to greater UI/UX designs is hidden by the team.'
    },
  ];
  
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[currentTestimonialIndex];

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [currentTestimonialIndex, testimonials]);
  
  return (
    <div>
      <div className="client-abisma">
      <div className="testimonial-slider">
        <div className="testimonial">
          <h1>What <span> Satisfied</span> Clients Say<span>.</span></h1>
          <div className="testimonial-content">
            <img src={currentTestimonial.photo} alt={currentTestimonial.name} className="testimonial-photo" />
            <p className="testimonial-text">{currentTestimonial.name}</p></div>
            <div className="p">
            <small className="testimonial-name">{currentTestimonial.text}</small>
            
          </div>
        </div>
      </div>
      <div className="dots-container">
        {testimonials.map((testimonial, index) => (
          <span id={testimonials.id}
            key={testimonial.id}
            className={`dot ${currentTestimonialIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentTestimonialIndex(index)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};
