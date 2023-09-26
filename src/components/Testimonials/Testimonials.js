import React from "react";
import "./Testimonials.css";
export default function Testimonials() {
  return (
    <div className="testimonial-area">
      <div className="testi-img">
        <div className="testimonial-cont">
          <div className="tst-blg">
            <div className="testi-txt">
              <div className="tst-title">
                <span className="testi-ttl">Clients Testimonials</span>
              </div>
              <h2 className="hello-tst">What Our Clients Say!</h2>
            </div>
            <div className="testimonial-caption">
              <div className="testimonial-cap">
                <p className="testimonial-cap-txt">
                  Srem ipsum adolor dfsit amet, consecturer adipiscing elit, sed
                  lox beuismod tempor incci didunt ut labore et dolore magna
                  aliqua. Quis cipscum suspendisse ultrices gravida. Risus
                  commodo vivercra maecenas accumsan lac.
                </p>
              </div>
              <div className="testimonial-founder">
                <div className="tst-founder-img">
                  <img
                    className="founder-img"
                    src={require("../../projectImg/founder.png")}
                    alt=""
                  />
                </div>
                <div className="founder-text">
                  <span className="fndr">Jhaon Smith</span>
                  <p className="dgsnr"> Creative designer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testi-form">
            <div className="testimonial-form">
              <h3 className="listening">Always Listening, Always Understanding.</h3>
              <input className="testi-input" type="text" placeholder="Incoterms" />
              <button className="testi-btn" name="submit">
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
