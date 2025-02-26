import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Shop.css";

const Shop = () => {
  const navigate = useNavigate();

  // Sample shop items
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
  ];

  return (
    <div id="shop">
      <div className="section-header">
        <span className="section-title">/ shop</span>
      </div>
      <div className="shop-container">
        {shopItems.map((item) => (
          <div key={item.id} className="shop-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <button className="see-all-button" onClick={() => navigate("/shop-details")}>
        See All
      </button>
    </div>
  );
};

export default Shop;