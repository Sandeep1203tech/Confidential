import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const AboutCIVIL = () => {
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
         Civil Engineering
        </h1>
        <p className="primary-text">
        Civil Engineering is a branch of engineering that deals with the design, construction, and maintenance of the built environment, including infrastructure such as roads, bridges, buildings, water and sewage systems, and other public works.
        </p>
        <p className="primary-text">
        <span className="Tag"> So, let's Construct the world !</span>
        </p>
        <div className="about-buttons-container">
          <a href = "/EE" className="secondary-button">View</a>
          
        </div>
      </div>
    </div>
  );
};

export default AboutCIVIL;