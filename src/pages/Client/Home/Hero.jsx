import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();

  const { currentUser } = useSelector((state) => state.auth);

  return (
    <section id="hero">
      <div
        id="heroCarousel"
        data-bs-interval="5000"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">
          {/* <!-- Slide 1 --> */}
          <div
            className="carousel-item active"
            style={{ backgroundImage: "url(assets/img/hero/hero-0.jpg)" }}
          >
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  {t("Welcome to JPS Ministry")}
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  {t("Hero Description")}
                </p>
                {currentUser ? (
                  <a
                    href={"#about"}
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    {t("Get Started")}
                  </a>
                ) : (
                  <Link
                    to={"/login"}
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    {t("Join Us")}
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* <!-- hero 2 --> */}
          <div
            className="carousel-item"
            style={{ backgroundImage: "url(assets/img/hero/hero-4.jpg)" }}
          >
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  {t("Embrace Hope and Love")}
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  {t("Embrace Hope and Love Body")}
                </p>
                <a
                  href="#about"
                  className="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  {t("Read More")}
                </a>
              </div>
            </div>
          </div>

          {/* <!-- hero 3 --> */}
          <div
            className="carousel-item"
            style={{ backgroundImage: "url(assets/img/hero/hero-5.jpg)" }}
          >
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  {t("Experience Faith Together")}
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  {t("Experience Faith Together Body")}
                </p>
                <a
                  href="#about"
                  className="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  {t("Read More")}
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          className="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </section>
  );
}
