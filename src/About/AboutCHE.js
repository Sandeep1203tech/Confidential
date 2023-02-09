import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const AboutCHE = () => {
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
         Chemical Engineering
        </h1>
        <p className="primary-text">
        Chemical Engineering is a branch of engineering that deals with the design, development, and operation of chemical processes for the production of various products, such as fuels, medicines, plastics, and food.
        </p>
        <p className="primary-text">
        <span className="Tag"> So, let's Equilibrize the world !</span>
        </p>
        <div className="about-buttons-container">
          <a href = "/EE" className="secondary-button">View</a>
          
        </div>
      </div>
    </div>
  );
};

export default AboutCHE;