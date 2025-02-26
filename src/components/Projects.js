import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/ projects</span>
      </div>
      <div className="projects-container">
        <div className="project-box">
          <img
            src="https://img1.wsimg.com/isteam/stock/25675/:/cr=t:0%25,l:10%25,w:80%25,h:100%25/rs=w:365,h:365,cg:true" // Example vertical image
            alt="Project 1"
          />
        </div>
        <div className="project-box">
          <img
            src="https://img1.wsimg.com/isteam/ip/580f33cb-6e0f-477d-9bc8-c9a1bedb0d35/aquarium-installers-1080x570.jpg/:/cr=t:0%25,l:23.61%25,w:52.78%25,h:100%25/rs=w:365,h:365,cg:true" // Example horizontal image
            alt="Project 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;


