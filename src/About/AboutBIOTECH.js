import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const AboutBIOTECH = () => {
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
         Biotechnology Engineering
        </h1>
        <p className="primary-text">
        Biotechnology Engineering is a branch of engineering that deals with the application of biological science and engineering principles for the production of various products, such as medicines, vaccines, and biofuels.
        </p>
        <p className="primary-text">
        <span className="Tag"> So, let's Clone the world !</span>
        </p>
        <div className="about-buttons-container">
          <a href = "/EE" className="secondary-button">View</a>
          
        </div>
      </div>
    </div>
  );
};

export default AboutBIOTECH;