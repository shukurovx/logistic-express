import React from "react";
import "./OurCompanyBlock.css";

export default function OurCompanyBlock() {
  return (
    <div className="our-company">
      <div className="company-div">
        <div className="cmp-div">
          <div className="our-company-info">
            <div className="section-title">
              <div className="cmpny-div">
                <span className="our-company-title">About Our Company</span>
              </div>
              <h2 className="company-h2">
                Safe Logistic & Transport Solutions That Saves Our Valuable
                Time!
              </h2>
            </div>
            <p className="comp-info1">
              Brook presents your services with flexible, convenient and cdpose
              layouts. You can select your favorite layouts & elements for cular
              ts with unlimited ustomization possibilities. Pixel-perfect
              replication of the designers is intended.
            </p>
            <p className="comp-info2">
              Brook presents your services with flexible, convefnient and chient
              anipurpose layouts. You can select your favorite layouts.
            </p>
            <div className="company-but">
              <button className="more-about">MORE ABOUT US</button>
            </div>
          </div>
          <div className="our-company-img">
            <img
              className="engineers-img"
              src={require("../../projectImg/ourCompany.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
