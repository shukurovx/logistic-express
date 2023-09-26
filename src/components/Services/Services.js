import React from "react";
import "./Services.css";

import Header from "../Header/Header";
import Transports from "../Transports/Transports";
import Footer from "../Footer/Footer";

export default function Services() {
  return (
    <>
      <Header />
      <div class="hdr-dv">
        <div class="hdr-img">
          <div class="aboutss">
            <h2 class="about-lx"> Our Services</h2>
            <p class="hm-bt">Home / Our Services</p>
          </div>
        </div>
      </div>
      <Transports ind={6} />
      <Footer />
    </>
  );
}
