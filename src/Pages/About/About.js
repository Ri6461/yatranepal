import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page" style={{ paddingTop: '110px' }}>
      <div className="container">
        <div className="about-header">
           <h1>About Yatra Nepal</h1>
        </div>
        
        <div className="about-content">
            <div className="about-text">
                <h2>Our Mission</h2>
                <p>
                    Yatra Nepal is a final year project dedicated to promoting tourism in Nepal. 
                    Our goal is to provide a seamless and informative platform for travelers to explore 
                    and book tour packages across the country.
                </p>
                <p>
                    We believe in sustainable tourism and showcasing the authentic beauty of Nepal's 
                    diverse landscapes and cultures.
                </p>
            </div>
             <div className="about-image">
                <div className="image-placeholder"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
