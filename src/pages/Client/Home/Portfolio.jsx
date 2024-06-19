import React from "react";

export default function Portfolio() {
  return (
    <section id="services" class="portfolio">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li data-filter=".filter-app">Worship</li>
              <li data-filter=".filter-card">Preaching</li>
              <li data-filter=".filter-web">Teaching</li>
              <li data-filter=".filter-web">Deliverance</li>
              <li data-filter=".filter-web">Prayer</li>
              <li data-filter=".filter-web">Healing</li>
              <li data-filter=".filter-web">Desciplineship</li>
            </ul>
          </div>
        </div>

        <div
          class="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[...Array(9).keys()].map((n) => (
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <iframe
                title="testimony 1"
                width={"100%"}
                height={"100%"}
                src="https://www.youtube.com/embed/cpjZyWTwUSs"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <a
                  href="assets/img/portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="App 1"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                >
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
