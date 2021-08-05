import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faInstagram,
  faLinkedin,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="social-container">
      <span>Social Media</span>
      <a
        href="https://www.facebook.com/jacky.koo.92"
        className="social-icons"
      />
      <FontAwesomeIcon icon={faFacebook} size="3x" />
      <a
        href="https://www.linkedin.com/in/jacky-koo/"
        className="social-icons"
      />
      <FontAwesomeIcon icon={faLinkedin} size="3x" />

      <a href="https://www.instagram.com/ahdoy888/" className="social-icons" />
      <FontAwesomeIcon icon={faInstagram} size="3x" />
    </div>
  );
};

export default Footer;
