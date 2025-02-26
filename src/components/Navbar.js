import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { TbBrandTiktok } from "react-icons/tb"; // TikTok icon
import { FaInstagram } from "react-icons/fa"; // Instagram icon
import "../styles/Navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="navbar">
        {/* Logo on the left */}
        <Navbar.Brand href="/">
          <img
            src="https://img1.wsimg.com/isteam/ip/580f33cb-6e0f-477d-9bc8-c9a1bedb0d35/Blue%20Logo.jpg/:/rs=w:246,h:200,cg:true,m/cr=w:246,h:200/qt=q:95"
            alt="Logo"
            width="70"
            height="70"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Text links next to the logo */}
        <Nav className="navbar-links">
          <Nav.Link href="/#about">About</Nav.Link>
          <Nav.Link href="/#projects">Projects</Nav.Link>
          <Nav.Link href="/#services">Services</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/#contact">Contact Us</Nav.Link>
        </Nav>

        {/* Icons on the far right */}
        <Nav className="navbar-icons">
          <Nav.Link href="mailto:mirajhaq@hotmail.com">
            <EmailRoundedIcon style={{ fontSize: 20 }} />
          </Nav.Link>
          <Nav.Link href="https://www.tiktok.com/@yourusername" target="_blank">
            <TbBrandTiktok style={{ fontSize: 20 }} />
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/yourusername" target="_blank">
            <FaInstagram style={{ fontSize: 20 }} />
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;