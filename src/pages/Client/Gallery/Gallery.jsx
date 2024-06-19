import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import React, { useEffect } from "react";
export default function Gallery() {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });

    // Clean up on component unmount
    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <main class="home-main">
      {/* <!-- Page Title --> */}
      <div class="page-title" data-aos="fade">
        <div class="heading">
          <div class="container">
            <div class="row d-flex justify-content-center text-center">
              <div class="col-lg-8">
                <div className="section-title mt-4">
                  <h2>Gallery</h2>
                  <p>Check our Gallery</p>
                </div>
                <p class="mb-0">
                  Welcome to our gallery! Here, we capture the heart and soul of
                  our church community through moments of worship, fellowship,
                  and service. From joyful celebrations to heartfelt outreach,
                  these images tell the story of our faith journey together. We
                  hope they inspire and uplift you as much as they do us.
                  Explore and experience the vibrant life of JPS Church.
                </p>
                {/* <a href="contact.html" class="cta-btn">
                  Available for Hire
                  <br />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Page Title --> */}

      {/* <!-- Gallery Section --> */}
      <section id="gallery" class="gallery section">
        <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4 justify-content-center">
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="gallery-item h-100">
                <img
                  src="assets/img/gallery/gallery-1.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="gallery-links d-flex align-items-center justify-content-center">
                  <a
                    href="assets/img/gallery/gallery-1.jpg"
                    title="Gallery 1"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-arrows-angle-expand"></i>
                  </a>
                  {/* <a href="gallery-single.html" class="details-link">
                    <i class="bi bi-link-45deg"></i>
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- End Gallery Item --> */}

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="gallery-item h-100">
                <img
                  src="assets/img/gallery/gallery-2.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="gallery-links d-flex align-items-center justify-content-center">
                  <a
                    href="assets/img/gallery/gallery-2.jpg"
                    title="Gallery 2"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-arrows-angle-expand"></i>
                  </a>
                  {/* <a href="gallery-single.html" class="details-link">
                    <i class="bi bi-link-45deg"></i>
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- End Gallery Item --> */}

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="gallery-item h-100">
                <img
                  src="assets/img/gallery/gallery-3.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="gallery-links d-flex align-items-center justify-content-center">
                  <a
                    href="assets/img/gallery/gallery-3.jpg"
                    title="Gallery 3"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-arrows-angle-expand"></i>
                  </a>
                  {/* <a href="gallery-single.html" class="details-link">
                    <i class="bi bi-link-45deg"></i>
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- End Gallery Item --> */}

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="gallery-item h-100">
                <img
                  src="assets/img/gallery/gallery-4.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="gallery-links d-flex align-items-center justify-content-center">
                  <a
                    href="assets/img/gallery/gallery-4.jpg"
                    title="Gallery 4"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-arrows-angle-expand"></i>
                  </a>
                  {/* <a href="gallery-single.html" class="details-link">
                    <i class="bi bi-link-45deg"></i>
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- End Gallery Item --> */}

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="gallery-item h-100">
                <img
                  src="assets/img/gallery/gallery-5.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="gallery-links d-flex align-items-center justify-content-center">
                  <a
                    href="assets/img/gallery/gallery-5.jpg"
                    title="Gallery 5"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-arrows-angle-expand"></i>
                  </a>
                  {/* <a href="gallery-single.html" class="details-link">
                    <i class="bi bi-link-45deg"></i>
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- End Gallery Item --> */}

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="gallery-item h-100">
                <img
                  src="assets/img/gallery/gallery-6.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="gallery-links d-flex align-items-center justify-content-center">
                  <a
                    href="assets/img/gallery/gallery-6.jpg"
                    title="Gallery 6"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-arrows-angle-expand"></i>
                  </a>
                  {/* <a href="gallery-single.html" class="details-link">
                    <i class="bi bi-link-45deg"></i>
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- End Gallery Item --> */}

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="gallery-item h-100">
                <img
                  src="assets/img/gallery/gallery-7.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="gallery-links d-flex align-items-center justify-content-center">
                  <a
                    href="assets/img/gallery/gallery-7.jpg"
                    title="Gallery 7"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-arrows-angle-expand"></i>
                  </a>
                  {/* <a href="gallery-single.html" class="details-link">
                    <i class="bi bi-link-45deg"></i>
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- End Gallery Item --> */}

            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="gallery-item h-100">
                <img
                  src="assets/img/gallery/gallery-8-2.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="gallery-links d-flex align-items-center justify-content-center">
                  <a
                    href="assets/img/gallery/gallery-8-2.jpg"
                    title="Gallery 8"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-arrows-angle-expand"></i>
                  </a>
                  {/* <a href="gallery-single.html" class="details-link">
                    <i class="bi bi-link-45deg"></i>
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- End Gallery Item --> */}
          </div>
        </div>
      </section>
      {/* <!-- /Gallery Section --> */}
    </main>
  );
}
