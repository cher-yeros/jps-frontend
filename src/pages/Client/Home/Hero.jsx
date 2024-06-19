import React from "react";

export default function Hero() {
  return (
    <section id="hero">
      <div
        id="heroCarousel"
        data-bs-interval="5000"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">
          {/* <!-- Slide 1 --> */}
          <div
            class="carousel-item active"
            style={{ backgroundImage: "url(assets/img/hero/hero-0.jpg)" }}
          >
            <div class="carousel-container">
              <div class="container">
                <h2 class="animate__animated animate__fadeInDown">
                  Welcome to <span>JPS Ministry</span>
                </h2>
                <p class="animate__animated animate__fadeInUp">
                  Join us in worship, fellowship, and service. At Our Community
                  Church, we celebrate faith and family, offering a place to
                  grow spiritually and connect deeply with others. Everyone is
                  welcome here.
                </p>
                <a
                  href="#about"
                  class="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* <!-- hero 2 --> */}
          <div
            class="carousel-item"
            style={{ backgroundImage: "url(assets/img/hero/hero-4.jpg)" }}
          >
            <div class="carousel-container">
              <div class="container">
                <h2 class="animate__animated animate__fadeInDown">
                  Embrace Hope and Love
                </h2>
                <p class="animate__animated animate__fadeInUp">
                  Discover a sanctuary of peace and inspiration at Hope Church.
                  Our vibrant community invites you to experience God's love,
                  participate in meaningful worship, and engage in
                  transformative service.
                </p>
                <a
                  href="#about"
                  class="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* <!-- hero 3 --> */}
          <div
            class="carousel-item"
            style={{ backgroundImage: "url(assets/img/hero/hero-5.jpg)" }}
          >
            <div class="carousel-container">
              <div class="container">
                <h2 class="animate__animated animate__fadeInDown">
                  Experience Faith Together
                </h2>
                <p class="animate__animated animate__fadeInUp">
                  Faith Church is a warm, inclusive place where you can deepen
                  your relationship with God. Join us for uplifting services,
                  supportive small groups, and a variety of community outreach
                  programs.
                </p>
                <a
                  href="#about"
                  class="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          class="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </section>
  );
}
