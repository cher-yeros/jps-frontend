import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { t } from "i18next";
import Isotope from "isotope-layout";
import React, { useEffect, useRef, useState } from "react";
import { GET_GALLERY_FOR_USERS } from "../../../graphql/gallery";
import { useQuery } from "@apollo/client";
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

  const [activeFilter, setActiveFilter] = useState("*");

  const { data, loading } = useQuery(GET_GALLERY_FOR_USERS);

  useEffect(() => {
    // Initialize Isotope
    isotopeInstance.current = new Isotope(gridElement.current, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    // Cleanup on unmount
    return () => {
      isotopeInstance.current.destroy();
    };
  }, [activeFilter]);

  useEffect(() => {
    if (isotopeInstance.current) {
      isotopeInstance.current.arrange({ filter: activeFilter });
      isotopeInstance.current.on("arrangeComplete", function () {
        window.AOS && window.AOS.refresh(); // Refresh AOS if it's available
      });
    }
  }, [activeFilter]);

  const filterItems = (filter) => {
    // isotopeInstance.current.arrange({ filter });

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
            {data?.galleryCategoryForUsers?.map((category) => (
              <li
                key={category.title}
                className={
                  activeFilter ===
                    "." + category?.title?.toLowerCase().replaceAll(" ", "_") &&
                  "filter-active"
                }
                onClick={() =>
                  filterItems(
                    "." + category?.title?.toLowerCase().replaceAll(" ", "_")
                  )
                }
              >
                {category.title}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
          ref={gridElement}
        >
          {/* <div className="row gy-4 justify-content-center row portfolio-container"> */}
          {data?.galleryCategoryForUsers.map((category) =>
            category?.galleries?.map((gallery) =>
              JSON.parse(gallery?.images || {})?.map((image) => (
                <div
                  key={image}
                  className={
                    "col-lg-3 col-md-6 portfolio-item filter-app " +
                    category?.title?.toLowerCase().replaceAll(" ", "_")
                  }
                >
                  <div className="gallery-item h-100">
                    <img
                      src={image}
                      className="img-fluid"
                      alt=""
                      style={{ width: "100%" }}
                    />
                    <div className="gallery-links d-flex align-items-center justify-content-center">
                      <a
                        href={image}
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
              ))
            )
          )}
        </div>
        {/* </div> */}
      </section>
      {/* <!-- /Gallery Section --> */}
    </main>
  );
}
