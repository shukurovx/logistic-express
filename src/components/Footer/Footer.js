import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGlobe, faHeart} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-txt">
          <div className="txt-div">
            <h2 className="txt">
              We Understand The Importance Approaching Each Work!
            </h2>
          </div>
          <div className="txt-num">
            <h2 className="number"> + 1 212-683-9756</h2>
          </div>
        </div>
      </div>
      <div className="hr" />
      <div className="footer2">
        <div className="footer-title">
          <div className="footer-title-1">
            <h4 className="footer-heading">COMPANY</h4>
            <Link className="footer-link" to={'/about'} >
              <p className="list-items">About us</p>
            </Link>
            <Link className="footer-link" >
              <p className="list-items">Company</p>
            </Link>

            <Link className="footer-link" >
              <p className="list-items">Press & Blog</p>
            </Link>

            <Link className="footer-link">
              <p className="list-items">Policy</p>
            </Link>
          </div>

          <div className="footer-title-2">
            <h4 className="footer-heading">OPEN HOUR</h4>
            <div className="footer-link" >
              <p className="list-items"> Monday 11am-7pm </p>
            </div>

            <div className="footer-link" >
              <p className="list-items">Tuesday-Friday 11am-8pm</p>
            </div>

            <div className="footer-link" >
              <p className="list-items"> Saturday 10am-6pm</p>
            </div>

            <div className="footer-link" >
              <p className="list-items"> Sunday 11am-6pm</p>
            </div>
          </div>

          <div className="footer-title-3">
            <h4 className="footer-heading"> RESOURCES</h4>

            <div className="footer-link" >
              <p className="list-items"> Home Insurance </p>
            </div>

            <div className="footer-link" >
              <p className="list-items">Travel Insurance</p>
            </div>

            <div className="footer-link" >
              <p className="list-items"> Car Insurance</p>
            </div>

            <div className="footer-link" >
              <p className="list-items"> Business Insurance</p>
            </div>

            <div className="footer-link" >
              <p className="list-items"> Heal Insurance</p>
            </div>
          </div>

          <div className="footer-title-4">
            <img
              className="express-logo2"
              src={require("../../projectImg/logo.png.webp")}
              alt=""
            />
            <p className="footer-text">
              {" "}
              GThe trade war currently ensuing between the US and nations around
              the globe, most fiercely with.
            </p>
            <div className="icons-dv">
              <div className="icons11" href="#">
                <div className="icons-tg" >
                  <FontAwesomeIcon icon={faFacebookF } style={{ color: "#868c98",fontSize: 20 }}/>
                </div>
              </div>

              <div className="icons" href="#">
                <div className="icons-tg">
                <FontAwesomeIcon icon={faTwitter } style={{ color: "#868c98",fontSize: 20 }}/>
                </div>
              </div>

              <div className="icons" href="#">
                <div className="icons-tg" >
                <FontAwesomeIcon icon={faGlobe } style={{ color: "#868c98",fontSize: 20 }}/>
                </div>
              </div>

              <div className="icons" href="#">
                <div className="icons-tg" >
                <FontAwesomeIcon icon={faInstagram } style={{ color: "#868c98",fontSize: 20 }}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info-div">
          <p className="info1">
            Copyright ©2023 All rights reserved | This template is made with{" "}
            <FontAwesomeIcon icon={faHeart} style={{ color: "#f15f22" }} />{" "}
            by
            <span className="colorlib">Colorlib</span>
          </p>
        </div>
      </div>
    </div>
  );
}
