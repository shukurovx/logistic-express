import React from "react";
import "./Contact.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Iframe from 'react-iframe';

export default function Contact() {
  return (
    <>
      <Header />
      <div class="hdr-dv">
        <div class="hdr-img">
          <div class="aboutss">
            <h2 class="about-lx"> Contact Us</h2>
            <p class="hm-bt">Home / Contact Us</p>
          </div>
        </div>
      </div>

      <div class="contact-section">
        <div class="mp-cntnt">
          <div class="mapouter">
            <div class="gmap_canvas">
              <Iframe
                url="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                id={"gmap_canvas"}
                frameborder={0}
                scrolling="no"
                className="ifrm"
              />
            </div>
          </div>
        </div>

        <div class="map-dv-cl">
          <div class="contact-form-section">
            <div class="aside-left">
              <div class="touch-dv">
                <h2 class="contact-title1">Get in Touch</h2>
              </div>
              <div class="col-text-msg">
                <textarea
                  class="form-control"
                  name="message"
                  id="message"
                  cols="30"
                  rows="9"
                  placeholder="Enter message"
                ></textarea>
              </div>
              <div class="col-sm-dv">
                <div class="col-sm-6">
                  <input
                    class="contact-inp"
                    type="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="col-sm-6">
                  <input class="contact-inp" type="email" placeholder="Email" />
                </div>
              </div>
              <div class="col-last">
                <input
                  class="contact-last-inp"
                  type="text"
                  placeholder="Enter Subject"
                />
              </div>
              <div class="send-form-but">
                <button class="contact-form-send-bt"> S E N D </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
