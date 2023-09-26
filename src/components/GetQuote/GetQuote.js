import React from "react";
import "./GetQuote.css";

export default function GetQuote() {
  return (
    <div className="section-contact-form-area">
      {/* <img className="section-img" src={require("../../projectImg/section_2.jpg")} alt="" /> */}
      <div className="section-img">
        <div className="contact-from-wrapper">
          <div className="row">
            <div className="col-lg">
              <div className="section-title-mb">
                <div className="quote-dv">
                  <span className="quote-mb">Get A Quote For Free</span>
                </div>
                <h2 className="request-mb">Request A Free Quote</h2>
                <p className="favorite-layout">
                  Brook presents your services with flexible, convenient and
                  cdpose layouts. You can select your favorite layouts &
                  elements for.
                </p>
              </div>
            </div>
          </div>
          <div className="col-1">
            <div className="col-lg-1">
              <input className="col1-inp" type="text" placeholder="Name" />
            </div>

            <div className="col-lg-1">
              <input className="col1-inp" type="text" placeholder="Email" />
            </div>
          </div>
          <div className="input-form2">
            <input className="col2" type="text" placeholder="Contact Number" />
          </div>
          <div className="col-1">
            <div className="col-lg-1">
              <select className="select-box" name="select">
                <option value=""> Freight type</option>
                <option value="first"> Categories one</option>
                <option value="second"> Categories two</option>
                <option value="third"> Categories three</option>
                <option value="fourth"> Categories four</option>
              </select>
            </div>

            <div className="col-lg-1">
              <input
                className="col1-inp"
                type="text"
                placeholder="City of Departure"
              />
            </div>
          </div>

          <div className="col-1">
            <div className="col-lg-1">
              <input className="col1-inp" type="text" placeholder="Incoterms" />
            </div>

            <div className="col-lg-1">
              <input className="col1-inp" type="text" placeholder="Weight" />
            </div>
          </div>

          <div className="col-lg2">
            <div className="col-lg3">
              <input className="col-lg-ls" type="text" placeholder="Height" />
            </div>

            <div className="col-lg3">
              <input className="col-lg-ls" type="text" placeholder="Width" />
            </div>

            <div className="col-lg3">
              <input className="col-lg-ls" type="text" placeholder="Length" />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="radio-wrapper">
              <label className="label-wrp">Extra services:</label>
              <div className="select-radio">
                <div className="radio">
                  <input className="radio-1" type="radio" defaultChecked />
                  <label htmlFor="radio-1" className="radio-label">
                    {" "}
                    Freight
                  </label>
                </div>

                <div className="radio">
                  <input className="radio-1" type="radio" />
                  <label htmlFor="radio-2" className="radio-label">
                    {" "}
                    Express Delivery
                  </label>
                </div>
                <div className="radio">
                  <input className="radio-1" type="radio" />
                  <label htmlFor="radio-3" className="radio-label">
                    {" "}
                    Insurance
                  </label>
                </div>
                <div className="radio">
                  <input className="radio-1" type="radio" />
                  <label htmlFor="radio-4" className="radio-label">
                    {" "}
                    Packaging
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="submit-dv">
            <button className="submit-btn" name="submit">
              {" "}
              REQUEST A QUOTE{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
