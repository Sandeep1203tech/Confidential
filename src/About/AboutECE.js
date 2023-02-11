import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/ECE.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const AboutECE = () => {
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
        Electronics and Communications Engineering
        </h1>
        <p className="primary-text">
        Electronics and Communications Engineering is a branch of engineering that deals with the design, development, and maintenance of electronic systems and devices, as well as communication systems.
        </p>
        <p className="primary-text">
        <span className="Tag"> So, let's Connect the world !</span>
        </p>
        <div className="about-buttons-container">
          <a href = "/EE" className="secondary-button">View</a>
          
        </div>
      </div>
    </div>
  );
};

export default AboutECE;