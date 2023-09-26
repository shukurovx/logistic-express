import React from "react";
import "./About.css";
import Header from "../Header/Header";
import OurCompanyBlock from "../OurCompanyBlock/OurCompanyBlock";
import GetQuote from "../GetQuote/GetQuote";
import TeamMembers from "../TeamMembers/TeamMembers";
import Testimonials from "../Testimonials/Testimonials";
import TuristBlog from "../TuristBlog/TuristBlog";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      <Header />
      <div class="hdr-dv">
        <div class="hdr-img">
          <div class="aboutss">
            <h2 class="about-lx"> About Us</h2>
            <p class="hm-bt">Home / About</p>
          </div>
        </div>
      </div>
      <OurCompanyBlock />
      <GetQuote />
      <TeamMembers />
      <Testimonials />
      <TuristBlog />
      <Footer />
    </>
  );
}
