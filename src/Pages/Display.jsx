import React from 'react'
import "./Display.css"

export const Display = () => {
  return (
    <div id='Home' className='display'>
      <div></div>
      <div className="home-container">

        <h1>Into the Possibilities of <br/> <span>Digital Reality.</span></h1>
        <div className="sub-title">
        <small> Affixed to comply to the modern practices of building websites,
          here, we compile the most of the best of attributed and significant
          styling and responsive designs that are top notch in the market. Get
          your idea serviced by our expertise.
        </small>
             </div>
           
            
      </div>
      <div className="display-image">
        <img src={require("../Assets/hala-removebg-preview.png")} alt="" />
      </div>
    </div>
  )
}
