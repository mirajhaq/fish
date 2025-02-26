import React, { useEffect } from "react"; // Import useEffect
import { useNavigate } from "react-router-dom";
import "../styles/ShopDetails.css";

const ShopDetails = () => {
  const navigate = useNavigate();

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample shop items (same as in Shop.js, but you can add more)
  const shopItems = [
    {
      id: 1,
      name: "Fish Food",
      price: "$15.99",
      image: "https://via.placeholder.com/200/FF5733",
    },
    {
      id: 2,
      name: "Aquarium Filter",
      price: "$45.99",
      image: "https://via.placeholder.com/200/33FF57",
    },
    {
      id: 3,
      name: "Tank Decor",
      price: "$25.99",
      image: "https://via.placeholder.com/200/3357FF",
    },
    {
      id: 4,
      name: "Water Heater",
      price: "$35.99",
      image: "https://via.placeholder.com/200/FFC300",
    },
    {
      id: 5,
      name: "Aquarium Light",
      price: "$55.99",
      image: "https://via.placeholder.com/200/900C3F",
    },
    {
      id: 6,
      name: "Fish Tank",
      price: "$120.99",
      image: "https://via.placeholder.com/200/DAF7A6",
    },
  ];

  return (
    <div id="shop-details">
      <div className="section-header">
        <span className="section-title">/ shop - all items</span>
      </div>
      <div className="shop-details-container">
        {shopItems.map((item) => (
          <div key={item.id} className="shop-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default ShopDetails;