import React, { useEffect } from "react";
import "swiper/css";
import Swiper, { Autoplay, Pagination } from "swiper";

export default function Testimonials() {
  useEffect(() => {
    const swiper = new Swiper(".testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 2,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <section id="testimonials" class="testimonials section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Testimony</h2>
          <p>Testimony</p>
        </div>

        <div
          class="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <div style={{ height: "14rem" }}>
                    <iframe
                      title="testimony 1"
                      width={"100%"}
                      height={"100%"}
                      src="https://www.youtube.com/embed/IEz5q0Z8HLI"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3>Sara Alemayehu</h3>
                  <h4>Testimony</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>I found
                    a true sense of belonging at JPS Ministry. The warmth and
                    support of this community have strengthened my faith and
                    brought joy to my life. I'm grateful for the friendships and
                    spiritual growth I've experienced here.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <div style={{ height: "14rem" }}>
                    <iframe
                      title="testimony 1"
                      width={"100%"}
                      height={"100%"}
                      src="https://www.youtube.com/embed/IEz5q0Z8HLI"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3>Solomon Tiruneh</h3>
                  <h4>Testimony</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Joining JPS Ministry has been a life-changing experience.
                    The inspiring sermons and meaningful worship have deepened
                    my relationship with God. This church is more than a place
                    of worship; it's a family that uplifts and encourages one
                    another.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <div style={{ height: "14rem" }}>
                    <iframe
                      title="testimony 1"
                      width={"100%"}
                      height={"100%"}
                      src="https://www.youtube.com/embed/IEz5q0Z8HLI"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3>Keyra A/kadir</h3>
                  <h4>Testimony</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    At JPS Ministry, I discovered a place where I can serve
                    others and grow spiritually. The church's commitment to
                    outreach and its vibrant community have made a significant
                    impact on my life. I feel truly blessed to be part of this
                    congregation.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            {/* <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-4.jpg"
                    class="testimonial-img"
                    alt=""
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore
                    illum veniam.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div> */}
            {/* <!-- End testimonial item --> */}

            {/* <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-5.jpg"
                    class="testimonial-img"
                    alt=""
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure
                    aliqua veniam tempor noster veniam enim culpa labore duis
                    sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                    fore nisi cillum quid.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div> */}
            {/* <!-- End testimonial item --> */}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
