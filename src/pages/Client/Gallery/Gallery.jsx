import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { t } from "i18next";
import Isotope from "isotope-layout";
import React, { useEffect, useRef, useState } from "react";
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

  const isotopeInstance = useRef(null);
  const gridElement = useRef(null);

  const [activeFilter, setActiveFilter] = useState(".category-worship");

  useEffect(() => {
    // Initialize Isotope
    isotopeInstance.current = new Isotope(gridElement.current, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    // Cleanup on unmount
    // return () => {
    //   isotopeInstance.current.destroy();
    // };
  }, [activeFilter]);

  useEffect(() => {
    if (isotopeInstance.current) {
      isotopeInstance?.current?.arrange({ filter: activeFilter });
      isotopeInstance?.current?.on("arrangeComplete", function () {
        window.AOS && window.AOS.refresh(); // Refresh AOS if it's available
      });
    }
  }, [activeFilter]);

  const filterItems = (filter) => {
    // isotopeInstance.current.arrange({ filter });
    // console.log(filter);
    setActiveFilter(filter);
  };

  const dataFilters = [
    // {
    //   className: "filter-active",
    //   dataFilter: "*",
    //   label: "All",
    //   category: "*",
    // },
    {
      className: "",
      dataFilter: ".category-worship",
      label: "Worship",
      category: "category-worship",
    },
    {
      className: "",
      dataFilter: ".category-preaching",
      label: "Preaching",
      category: "category-preaching",
    },
    {
      className: "",
      dataFilter: ".category-teaching",
      label: "Teaching",
      category: "category-teaching",
    },
    {
      className: "",
      dataFilter: ".category-deliverance",
      label: "Deliverance",
      category: "category-deliverance",
    },
    {
      className: "",
      dataFilter: ".category-prayer",
      label: "Prayer",
      category: "category-prayer",
    },
    {
      className: "",
      dataFilter: ".category-healing",
      label: "Healing",
      category: "category-healing",
    },
    {
      className: "",
      dataFilter: ".category-discipleship",
      label: "Discipleship",
      category: "category-discipleship",
    },
  ];

  return (
    <main className="home-main">
      {/* <!-- Page Title --> */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <div className="section-title mt-4">
                  <h2>{t("Gallery")}</h2>
                  <p>{t("Check our Gallery")}</p>
                </div>
                <p className="mb-0">{t("Gallery Body")}</p>
                {/* <a href="contact.html" className="cta-btn">
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
      <section id="gallery" className="gallery section portfolio">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            {dataFilters.map((filter) => (
              <li
                key={filter.label}
                className={
                  activeFilter === filter.dataFilter && "filter-active"
                }
                onClick={() => filterItems(filter.dataFilter)}
              >
                {filter.label}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="container-fluid"
          data-aos="fade-up"
          data-aos-delay="100"
          ref={gridElement}
        >
          <div className="row gy-4 justify-content-center">
            {[...Array(44).keys()].map((n) => (
              <div
                className={
                  "col-xl-3 col-lg-4 col-md-6 " +
                  dataFilters[Math.floor(Math.random() * dataFilters.length)]
                    .category
                }
              >
                <div className="gallery-item h-100">
                  <img
                    src={`assets/img/gallery/gallery (${n + 1}).jpg`}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={`assets/img/gallery/gallery (${n + 1}).jpg`}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    {/* <a href="gallery-single.html" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- /Gallery Section --> */}
    </main>
  );
}
