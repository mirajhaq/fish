import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation back
import "../styles/AboutDetails.css"; // Create this CSS file for styling

const AboutDetails = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div id="about-details">
      <div className="section-header">
        <span className="section-title">/ about us - details</span>
      </div>
      <div className="about-details-content">
        <p>
          This is the detailed About Us page. Here, you can add more information
          about your team, mission, vision, or anything else you'd like to share.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        {/* Add a "Back" button to return to the main About page */}
        <button className="back-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AboutDetails;