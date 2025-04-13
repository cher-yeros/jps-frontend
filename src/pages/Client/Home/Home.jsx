import React from "react";
import HomeFooter from "../../../Layout/HomeFooter";
import AboutUs from "./AboutUs";
import CallToAction from "./CallToAction";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";

export default function Home() {
  return (
    <>
      <Hero />

      <main id="home-main">
        <AboutUs />
        {/* <Counts /> */}
        <WhyUs />
        {/* <Services /> */}
        {/* <Testimonials /> */}
        <CallToAction />
        <div className="container mt-5">
          <div className="row">
            <div className="col-xs-12">
              <div className="d-flex justify-content-center">
                <a
                  href="https://t.me/jpstv"
                  target="_blank"
                  rel="noreferrer"
                  className="getstarted submit-btn"
                  style={{ color: "white" }}
                >
                  Join our telegram channel
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <Portfolio /> */}
        <Team />
        {/* <Pricing /> */}
        <FAQ />
        {/* <div className="contact">
          <form class="php-email-form"> */}{" "}
        {/* </form>{" "}
        </div> */}
        <Contact />
      </main>

      <HomeFooter />
    </>
  );
}
