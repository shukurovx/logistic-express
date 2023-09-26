import React from "react";
import "./TeamMembers.css";

export default function TeamMembers() {
  return (
    <div className="team-members-div">
      <div className="mmb-container">
        <div className="cmn-div">
          <div className="members-blog1">
            <p className="members-txt">Our Team Members</p>
          </div>

          <div className="members-blog2">
            <h1 className="mmb">What We Can Do For You</h1>
          </div>
        </div>
        <div className="members-img">
          <div className="mmbrs-img">
            <img
              className="team-img"
              src={require("../../projectImg/Kolin.png")}
              alt=""
            />
            <div className="team-caption">
              <h3 className="kolin">Manchervan Kolin </h3>
              <p className="agent"> Health agent</p>
            </div>
          </div>

          <div className="mmbrs-img">
            <img
              className="team-img"
              src={require("../../projectImg/Kolin2.png")}
              alt=""
            />
            <div className="team-caption">
              <h3 className="kolin">Manchervan Kolin </h3>
              <p className="agent"> Health agent</p>
            </div>
          </div>

          <div className="mmbrs-img">
            <img
              className="team-img"
              src={require("../../projectImg/Kolin3.png")}
              alt=""
            />
            <div className="team-caption">
              <h3 className="kolin">Manchervan Kolin </h3>
              <p className="agent"> Health agent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
