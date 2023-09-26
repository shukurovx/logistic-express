import React from "react";
import "./TuristBlog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";

export default function TuristBlog() {
  return (
    <div className="home-blog-area">

        <div className="turist-blog-main">
            <div className="turist-blog1">
                <p className="news-txt">
                    Our Recent News
                </p>
            </div>

            <div className="turist-blog2">
                <h1 className="blog2">
                    Turist Blog
                </h1>
            </div>
        </div>

        <div className="blog-images">
            <div className="forklift-div">
                <img className="forklift" src={require("../../projectImg/forklift.png")}alt="" />

                <div className="blog-caption">

                    <div className="date-div">
                        <div className="cpt-div">
                            <span className="day">27</span>
                            <p className="month">SEP</p>
                        </div>
                    </div>

                    <div className="blog-cap">
                        <div className="blg-2">
                            <FontAwesomeIcon icon={faUser} style={{ color: "#717b9b",fontSize:12  }}/>  
                            <span className="name-blg"> Jessica Temphers</span>
                            <FontAwesomeIcon icon={faMessage} style={{ color: "#717b9b",fontSize:10 }}/>  
                            <span className="num-blg">12</span>
                            <p className="blg-txt" href=""> Here's what you should know before</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ship-div">
                <img className="ship" src={require("../../projectImg/ship.png")} alt="" />

                <div className="blog-caption">
                    <div className="date-div">
                        <div className="cpt-div">
                            <span className="day">27</span>
                            <p className="month">SEP</p>
                        </div>
                    </div>
                    <div className="blog-cap">
                        <div className="blg-2">
                            <FontAwesomeIcon icon={faUser} style={{ color: "#717b9b",fontSize:12  }}/> 
                            <span className="name-blg"> Jessica Temphers</span>
                            <FontAwesomeIcon icon={faMessage} style={{ color: "#717b9b",fontSize:10 }}/>  
                            <span className="num-blg">12</span>
                            <p className="blg-txt" href=""> Here's what you should know before</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="containers-div">
                <img className="containers" src={require("../../projectImg/containers.png")} alt="" />
                <div className="blog-caption">
                    <div className="date-div">
                        <div className="cpt-div">
                            <span className="day">27</span>
                            <p className="month">SEP</p>
                        </div>
                    </div>
                    <div className="blog-cap">
                        <div className="blg-2">
                            <FontAwesomeIcon icon={faUser} style={{ color: "#717b9b",fontSize:12  }}/> 
                            <span className="name-blg"> Jessica Temphers</span>
                            <FontAwesomeIcon icon={faMessage} style={{ color: "#717b9b",fontSize:10 }}/>
                            <span className="num-blg">12</span>
                            <p className="blg-txt" href=""> Here's what you should know before</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}