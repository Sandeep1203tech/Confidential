import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
// import Navbar from "./Navbar";
// import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Kehndi Hundi Si
          </h1>
          <p className="primary-text">
            Mujhe Khud nahi pata mai kya bana raha hoon but kuch toh banaunga he!
          </p>
          <button className="secondary-button">
            Loading... 
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
