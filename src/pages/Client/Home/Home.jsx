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
