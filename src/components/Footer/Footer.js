import React from "react";
import "./footer.css";
import Instagram from "../../assets/logo3.png";
import Linkedin from "../../assets/logo2.png";
import Twitter from "../../assets/logo1.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="logo__container">
        <img src={Twitter} />
        <img src={Linkedin} />
        <img src={Instagram} />
      </div>
    </div>
  );
};

export default Footer;
