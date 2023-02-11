import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/MECH.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const AboutMECH = () => {
  return (
    <div className="about-section-container">
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}
      <div className="about-section-image-container MECHimg">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">
         Mechanical Engineering
        </h1>
        <p className="primary-text">
        Mechanical Engineering is a branch of engineering that deals with the design, development, and maintenance of mechanical systems and devices. It involves the study of mechanics, thermodynamics, materials science, and control systems.
        </p>
        <p className="primary-text">
        <span className="Tag"> So, let's Mechanize the world !</span>
        </p>
        <div className="about-buttons-container">
          <a href = "/EE" className="secondary-button">View</a>
          
        </div>
      </div>
    </div>
  );
};

export default AboutMECH;