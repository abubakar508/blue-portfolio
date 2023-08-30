import React, {useState, useEffect}from "react";
import "./About.css";
import { GiSkills } from "react-icons/gi";

export const About = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 25) {
        setCount(count + 1);
      }
    }, 40); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [count]);


  const [count1, setCount1] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < 16) {
        setCount1(count1 + 1);
      }
    }, 40); // Change the interval time as needed

    return () => clearInterval(interval1);
  }, [count1]);


  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const interval2 = setInterval(() => {
      if (count2 < 4) {
        setCount2(count1 + 1);
      }
    }, 10); // Change the interval time as needed

    return () => clearInterval(interval2);
  }, 
  );


  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval3 = setInterval(() => {
      if (count3 < 4) {
        setCount3(count1 + 1);
      }
    }, 10); 

    return () => clearInterval(interval3);
  }, );



  return (
    <div>
      <section className="about">
        <h1 className="title">About <span>.</span></h1>
        <div className="about-header">
          <h2>
            Progress is only <span>Captivating</span> <br /> when seen in
            action.
          </h2>
          <div className="small-1">
            <small>
              8 years ago, Curiosity aroused on how websites are built and how
              design is managed in website, including eneabling interactivity in
              websites. And throught that curiosity, my passion for website
              development had delved deeper into understanding the crucial steps
              of it.
            </small>
          </div>

          <div className="exp">
            <div className="exp-section">
              <h1>0{count2}+</h1>
              <div className="add-text-abt">
                <small>Years of experience</small>
              </div>
            </div>
            <div className="exp-section">
              <h1>0{count1}+</h1>
              <div className="add-text-abt">
                {" "}
                <small>Satisfied Clients</small>
              </div>
            </div>
            <div className="exp-section">
              <h1>0{count}+</h1>
              <div className="add-text-abt">
                {" "}
                <small>Finished projects</small>
              </div>
            </div>
            <div className="exp-section">
              <h1>0{count3}</h1>
              <div className="add-text-abt">
                <small>Unfinished Projects</small>
              </div>
            </div>
            <GiSkills className="skill-icon" />
          </div>
        </div>
      </section>
    </div>
  );
};
