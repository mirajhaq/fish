import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Projects.css";

const projects = [
  {
    id: "gordon-ramsay-tank",
    img: "/assets/g_closeup.jpg",
    title: "Gordon Ramsay Tank",
  },
  {
    id: "estate-agent-tank",
    img: "https://img1.wsimg.com/isteam/ip/580f33cb-6e0f-477d-9bc8-c9a1bedb0d35/Office%20Tank%20no%20Sand.jpg/:/cr=t:0%25,l:14.4%25,w:71.21%25,h:100%25/rs=w:365,h:365,cg=true",
    title: "Estate Agent Tank",
  },
  {
    id: "dentist-tank",
    img: "https://img1.wsimg.com/isteam/ip/580f33cb-6e0f-477d-9bc8-c9a1bedb0d35/Dentist%20tank.jpg/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:365,h:365,cg:true",
    title: "Dentist Tank",
  },
  {
    id: "home-tank",
    img: "https://img1.wsimg.com/isteam/ip/580f33cb-6e0f-477d-9bc8-c9a1bedb0d35/House%20Tank%20Finish.jpg/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:365,h:365,cg:true",
    title: "Home Tank",
  },
  {
    id: "zen-garden-tank",
    img: "/assets/zen_tank.jpg",
    title: "Zen Garden Tank",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 420; // Adjust to match box width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">🪼 Projects</span>
      </div>

      <div className="projects-wrapper">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button className="scroll-btn left" onClick={() => scroll("left")}>
            ❮
          </button>
        )}

        {/* Scrollable container */}
        <div
          className="projects-container"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {projects.map((project, index) => (
            <div
              className="project-box"
              key={index}
              onClick={() => navigate(`/projects/${project.id}`)} // Navigate to project details
            >
              <img src={project.img} alt={project.title} />
              <h3 className="project-title">{project.title}</h3>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button className="scroll-btn right" onClick={() => scroll("right")}>
            ❯
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
