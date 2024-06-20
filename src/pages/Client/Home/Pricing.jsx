import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Pricing</h2>
          <p>Our Competing Prices</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="box" data-aos="zoom-in" data-aos-delay="100">
              <h3>Free</h3>
              <h4>
                $0<span>per month</span>
              </h4>
              <ul>
                <li>
                  <i className="bx bx-check"></i> Quam adipiscing vitae proin
                </li>
                <li>
                  <i className="bx bx-check"></i> Nec feugiat nisl pretium
                </li>
                <li>
                  <i className="bx bx-check"></i> Nulla at volutpat diam uteera
                </li>
                <li className="na">
                  <i className="bx bx-x"></i>
                  <span>Pharetra massa massa ultricies</span>
                </li>
                <li className="na">
                  <i className="bx bx-x"></i>
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
              </ul>
              <a href="#" className="get-started-btn">
                Get Started
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="box featured"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3>Business</h3>
              <h4>
                $29<span>per month</span>
              </h4>
              <ul>
                <li>
                  <i className="bx bx-check"></i> Quam adipiscing vitae proin
                </li>
                <li>
                  <i className="bx bx-check"></i> Nec feugiat nisl pretium
                </li>
                <li>
                  <i className="bx bx-check"></i> Nulla at volutpat diam uteera
                </li>
                <li>
                  <i className="bx bx-check"></i> Pharetra massa massa ultricies
                </li>
                <li>
                  <i className="bx bx-check"></i> Massa ultricies mi quis
                  hendrerit
                </li>
              </ul>
              <a href="#" className="get-started-btn">
                Get Started
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="box" data-aos="zoom-in" data-aos-delay="100">
              <h3>Developer</h3>
              <h4>
                $49<span>per month</span>
              </h4>
              <ul>
                <li>
                  <i className="bx bx-check"></i> Quam adipiscing vitae proin
                </li>
                <li>
                  <i className="bx bx-check"></i> Nec feugiat nisl pretium
                </li>
                <li>
                  <i className="bx bx-check"></i> Nulla at volutpat diam uteera
                </li>
                <li>
                  <i className="bx bx-check"></i> Pharetra massa massa ultricies
                </li>
                <li>
                  <i className="bx bx-check"></i> Massa ultricies mi quis
                  hendrerit
                </li>
              </ul>
              <a href="#" className="get-started-btn">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
