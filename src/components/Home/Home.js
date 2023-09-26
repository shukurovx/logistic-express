import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Transports from "../Transports/Transports";
import OurCompanyBlock from "../OurCompanyBlock/OurCompanyBlock";
import GetQuote from "../GetQuote/GetQuote";
import TeamMembers from "../TeamMembers/TeamMembers";
import Testimonials from "../Testimonials/Testimonials";
import TuristBlog from "../TuristBlog/TuristBlog";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <div className="header-main-dv">
        <div className="truck">
          <div className="header-text">
            <h1 className="hdr-txt">
              Safe & Reliable <span className="orn"> Logistic </span>
              Solutions!
            </h1>
            <div className="form">
              <div className="input-form">
                <form>
                  <label>
                    <input
                      className="tracking-id"
                      type="text"
                      placeholder="Your Tracking ID"
                    />
                  </label>
                </form>
              </div>
              <div className="search-form">
                <p className="search" href="./index.html">
                  TRACK & TRACE
                </p>
              </div>
            </div>
            <div className="hero-pera">
              <p className="for-ord">FOR ORDER STATUS INQUIRY</p>
            </div>
          </div>
        </div>
      </div>

      <div className="time-div">
        <div className="info-blg11">
          <div className="info-blog">
            <div className="pin-blog">
              <img className="pin" src={require("../../projectImg/operator.png")} alt="" />
            </div>
            <div className="info-caption">
              <p className="call"> Call Us Anytime</p>
              <span className="info-span">+ (123) 1800-567-8990</span>
            </div>
          </div>

          <div className="info-blog">
            <div className="pin-blog">
              <img className="pin" src={require("../../projectImg/clock.png")} alt="" />
            </div>
            <div className="info-caption">
              <p className="call"> Sunday CLOSED</p>
              <span className="info-span">Mon - Sat 8.00 - 18.00</span>
            </div>
          </div>

          <div className="info-blog">
            <div className="pin-blog">
              <img className="pin" src={require("../../projectImg/location.png")} alt="" />
            </div>
            <div className="info-caption">
              <p className="call"> Columbia, SC 29201 </p>
              <span className="info-span">USA, New York - 10620</span>
            </div>
          </div>
        </div>
      </div>

      <Transports ind={3} />
      <OurCompanyBlock />
      <GetQuote />
      <TeamMembers />
      <Testimonials />
      <TuristBlog />
      <Footer />
    </>
  );
}
