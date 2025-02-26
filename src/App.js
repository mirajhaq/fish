import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Fishtank from "./components/Fishtank";
import About from "./components/About";
import AboutDetails from "./components/AboutDetails";
import Projects from "./components/Projects";
import Shop from "./components/Shop"; // Import Shop component
import ShopDetails from "./components/ShopDetails"; // Import ShopDetails component
import Services from "./components/Services"; // Import ShopDetails component
import Contact from "./components/Contact"; // Import ShopDetails component


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Fishtank />
        <Routes>
          <Route path="/" element={<>
            <About />
            <Projects />
            <Shop />
            <Services />
            <Contact />
          </>} />
          <Route path="/about-details" element={<AboutDetails />} />
          <Route path="/shop-details" element={<ShopDetails />} /> {/* Add route for ShopDetails */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;