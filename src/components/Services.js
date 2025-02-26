import React from "react";
import "../styles/Services.css";

const services = [
  { id: 1, title: "Initial Concept & Design", description: "This is service one.", img: "https://img1.wsimg.com/isteam/stock/25675/:/cr=t:0%25,l:10%25,w:80%25,h:100%25/rs=w:365,h:365,cg:true" },
  { id: 2, title: "Installation", description: "This is service two.", img: "https://img1.wsimg.com/isteam/ip/580f33cb-6e0f-477d-9bc8-c9a1bedb0d35/aquarium-installers-1080x570.jpg/:/cr=t:0%25,l:23.61%25,w:52.78%25,h:100%25/rs=w:365,h:365,cg:true" },
  { id: 3, title: "Ongoing Maintenance", description: "This is service three.", img: "https://img1.wsimg.com/isteam/ip/580f33cb-6e0f-477d-9bc8-c9a1bedb0d35/IMG_0082.jpg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:365,h:365,cg:true" },
];

const Services = () => {
  return (
    <div id="services">
      <div className="section-header">
        <span className="section-title">/ services</span>
      </div>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-box">
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
