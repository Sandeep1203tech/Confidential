import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">
         Electrical Engineering
        </h1>
        <p className="primary-text">
        Electrical engineering is a field of engineering that deals with the design, development, and maintenance of electrical systems and their components, including power generation and distribution, electric motors, and electronic devices.
        </p>
        <p className="primary-text">
        <span className="Tag"> So, let's Power the world !</span>
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">View</button>
          
        </div>
      </div>
    </div>
  );
};

export default About;