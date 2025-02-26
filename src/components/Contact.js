import React from "react";
import "../styles/Contact.css";
import { EmailRounded } from "@mui/icons-material"; // For the email icon

const Contact = () => {
  return (
    <div id="contact">
      <div className="section-header">
        <span className="section-title">/ contact us</span>
      </div>
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Enter your message" rows="5" required />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Email Address on the Side */}
        <div className="email-sidebar">
          <EmailRounded className="email-icon" />
          <p>mirajhaq@hotmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;