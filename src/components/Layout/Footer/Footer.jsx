import React from "react";
import "./Footer.css";
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__text">
            © 2024 Copyright, All Right Reserved, Made by Ilya Yugai with <FaHeart color="red"/>
          </div>

          <div className="footer__icons">
            <FaTwitter />
            <FaFacebook color="rgba(246, 75, 75, 1)"/>
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
