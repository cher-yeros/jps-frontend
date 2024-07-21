/* eslint-disable jsx-a11y/anchor-is-valid */
import Isotope from "isotope-layout";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { GET_SERVICES_FOR_USERS } from "../../../graphql/services";
import { useQuery } from "@apollo/client";

export default function Portfolio() {
  const { t } = useTranslation();

  const isotopeInstance = useRef(null);
  const gridElement = useRef(null);

  const [activeFilter, setActiveFilter] = useState("*");

  const { data, loading } = useQuery(GET_SERVICES_FOR_USERS);

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
    <section id="services" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              {data?.serviceCategoryForUsers?.map((category) => (
                <li
                  key={category.id}
                  className={
                    activeFilter ===
                      "." + category?.title?.toLowerCase().replace(" ", "_") &&
                    "filter-active"
                  }
                  onClick={() =>
                    filterItems(
                      "." + category?.title?.toLowerCase().replace(" ", "_")
                    )
                  }
                >
                  {t(category.title)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
          ref={gridElement}
        >
          {data?.serviceCategoryForUsers?.map((category) =>
            category?.services?.map((service) => (
              <div
                key={service?.id}
                className={
                  "col-lg-4 col-md-6 portfolio-item filter-app " +
                  category?.title?.toLowerCase().replaceAll(" ", "_")
                }
                style={{ height: "14rem" }}
              >
                <iframe
                  title="testimony 1"
                  width={"100%"}
                  height={"100%"}
                  src={
                    "https://www.youtube.com/embed/" +
                    getYouTubeID(service?.youtube_link)
                  }
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* <div className="portfolio-info">
                  <h4>{category.title}</h4>
                  <p>App</p>
                  <a
                    href="#"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div> */}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function getYouTubeID(url) {
  var regExp =
    /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=|youtu.be\/|\/embed\/)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return null;
  }
}
