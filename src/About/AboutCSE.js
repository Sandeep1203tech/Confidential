import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/CSE.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const AboutCSE = () => {
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
         Computer Science Engineering
        </h1>
        <p className="primary-text">
        Computer Science Engineering is a branch of engineering that deals with the design, development, and maintenance of computer software and hardware systems.
        </p>
        <p className="primary-text">
        <span className="Tag"> So, let's Code the world !</span>
        </p>
        <div className="about-buttons-container">
          <a href = "/EE" className="secondary-button">View</a>
          
        </div>
      </div>
    </div>
  );
};

export default AboutCSE;