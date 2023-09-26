import React from "react";
import "./Transports.css";
import TransportItem from "../TransportItem/TransportItem";

export default function Transports({ ind }) {
  let transportArray = [
    {
      img: require("../../projectImg/cargo.png"),
      title: "Land",
    },
    {
      img: require("../../projectImg/tanker.png"),
      title: "Ship",
    },
    {
      img: require("../../projectImg/airplane.png"),
      title: "Air",
    },
    {
      img: require("../../projectImg/airplane.png"),
      title: "Air",
    },
    {
      img: require("../../projectImg/cargo.png"),
      title: "Land",
    },
    {
      img: require("../../projectImg/tanker.png"),
      title: "Ship",
    },
  ];
  return (
    <>
      <div className="services-area">
        <div className="services-main">
          <div className="services-blg">
            <p className="services-txt">Our Services</p>
          </div>

          <div className="services-blg2">
            <h1 className="blog3">What We Can Do For You</h1>
          </div>
        </div>

        <div className="transport-container">
          {transportArray.slice(0, ind).map((item, index) => {
            return <TransportItem key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}
