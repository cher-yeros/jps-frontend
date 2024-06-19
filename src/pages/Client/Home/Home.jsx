import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Counts from "./Counts";
import WhyUs from "./WhyUs";
import Services from "./Services";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Contact from "./Contact";
import HomeFooter from "../../../Layout/HomeFooter";

export default function Home() {
  return (
    <>
      <Hero />

      <main id="home-main">
        <AboutUs />
        {/* <Counts /> */}
        <WhyUs />
        {/* <Services /> */}
        <Testimonials />
        <CallToAction />
        <Portfolio />
        <Team />
        {/* <Pricing /> */}
        <FAQ />
        <Contact />
      </main>

      <HomeFooter />
    </>
  );
}
