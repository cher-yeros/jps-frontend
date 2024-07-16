import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { GET_BLOGS } from "../../../graphql/blog";
import { useQuery } from "@apollo/client";
import { Skeleton } from "@mui/material";

export default function Blog() {
  const { t } = useTranslation();

  const { data, loading, refetch } = useQuery(GET_BLOGS);

  return (
    <main id="home-main">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <div className="section-title mt-4">
                  <h2>{t("Programs")}</h2>
                  <p>{t("Check our Programs")}</p>
                </div>
                <p className="mb-0">{t("Programs Body")}</p>
                {/* <a href="contact.html" className="cta-btn">
                  Available for Hire
                  <br />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="gallery"
        className="section gallery news-grid grid"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="container">
          <div className="row">
            {loading ? (
              <Skeleton height={"30rem"} />
            ) : (
              data?.blogs.map((blog) => (
                <div className="col-md-4" key={blog.id}>
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img
                        src={blog?.image}
                        alt=""
                        className="img-b img-fluid"
                      />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <a href="#" className="category-b">
                            {t(blog?.title)}
                          </a>
                        </div>
                        <div className="card-title-b">
                          <h2 className="title-2">
                            <Link
                              to={
                                "/programs/" +
                                blog?.title?.toLowerCase()?.replaceAll(" ", "-")
                              }
                              state={{ blog: blog }}
                            >
                              {t(blog?.title)}
                            </Link>
                          </h2>
                        </div>
                        <div className="card-date">
                          <span className="date-b">
                            {new Date(blog?.createdAt).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="row">
            <div className="col-sm-12">
              <nav className="pagination-a">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1">
                      <span className="bi bi-chevron-left"></span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item next">
                    <a className="page-link" href="#">
                      <span className="bi bi-chevron-right"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Blog Grid--> */}
    </main>
  );
}
