import React from "react";
import "./TransportItem.css";

export default function TransportItem(props) {
  console.log("props:", props)
  let {img, title} = props.item;
  return (
    <div className="transport-div">
      <div className="transport1">
        <div className="transport-icon">
          <img className="cargo" src={img} alt="" />
        </div>
        <div className="cat-cap">
          <h5 className="cap1">{title} Transport</h5>
          <p className="cap-txt">
            The sea freight service has grown conside rably in recent years. We
            spend timetting to know your processes to.
          </p>
        </div>
      </div>
    </div>
  );
}
