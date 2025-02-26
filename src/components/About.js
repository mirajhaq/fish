import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/About.css";

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div id="about-us">
      <div className="section-header">
        <span className="section-title">/ about us</span>
      </div>
      <div className="about-content">
        <div className="about-description">
          <p>
            This is a placeholder text for the About Us section. You can replace
            this with your actual content later. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <p>
            More placeholder text goes here. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          {/* Add the "Read More" button */}
          <button className="read-more-button" onClick={() => navigate("/about-details")}>
            Read More
          </button>
        </div>
        <div className="about-image">
          <img
            alt="About"
            src="https://img1.wsimg.com/isteam/ip/580f33cb-6e0f-477d-9bc8-c9a1bedb0d35/Marine%20Tank%20Blue%20Logo.jpg/:/rs=w:892,h:500,cg:true,m/cr=w:892,h:500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;