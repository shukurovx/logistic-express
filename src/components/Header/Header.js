import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { faFacebookF, faGooglePlusG, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  let [isClicked, setIsClicked] = useState(false);
  let showCloseBurger = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div className="header-info-blog">
        <div className="header-info">
          <div className="conMail">
            <div className="contact-div">
              <p className="phone-txt"> Phone: +99 (0) 101 0000 888 </p>
            </div>
            <div className="mail-div">
              <p className="mail-txt"> Email: noreply@yourdomain.com </p>
            </div>
          </div>

          <div className="contact-icon">
            <div className="icon-div">
            <FontAwesomeIcon icon={faTwitter } style={{ color: "#7b8693" }}/>
            </div>
            <div className="icon-div">
            <FontAwesomeIcon icon={faFacebookF } style={{ color: "#7b8693" }}/>
            </div>
            <div className="icon-div">
            <FontAwesomeIcon icon={faLinkedinIn } style={{ color: "#7b8693" }}/>
            </div>
            <div className="icon-div">
            <FontAwesomeIcon icon={faGooglePlusG } style={{ color: "#7b8693" }}/>
            </div>
          </div>
        </div>
      </div>

      <div className="hr-div" />

      <div className="header">
        <div className="header-block">
          <div className="express-logo1">
            <img src={require("../../projectImg/logo.png.webp")} alt="" />
          </div>
          <nav className="nav">
            <Link to={"/"} className="header-main home">
              Home
            </Link>

            <Link to={"/about"} className="header-main about">
              About
            </Link>

            <Link to={"/services"} className="header-main services">
              Services
            </Link>

            <Link to={"/contact"} className="header-main contact">
              Contact
            </Link>

            <div className="get-a-qoue">
              <button className="but1"> GET A QOUE</button>
            </div>
          </nav>
          <div className="burgerMenu">
            <button onClick={() => showCloseBurger()} className="burgerMenuButton">MENU</button>
            <div className="navButtons" style={{ display: isClicked ? "flex" : "none" }}>
              <Link to={"/"} className="header-main burgerLinks">
                Home
              </Link>

              <Link to={"/about"} className="header-main burgerLinks">
                About
              </Link>

              <Link to={"/services"} className="header-main burgerLinks">
                Services
              </Link>

              <Link to={"/contact"} className="header-main burgerLinks">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
