import React from "react";
import { useTranslation } from "react-i18next";

export default function Team() {
  const { t } = useTranslation();

  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("Leaders")}</h2>
          <p>{t("Pastors and Leaders")}</p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="member" data-aos="zoom-in" data-aos-delay="100">
              <img src="assets/img/pastor/1.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>{t("Prophet Henock")}</h4>
                  <span>{t("Churchs Visionary and Founder")}</span>
                </div>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
            <div className="member" data-aos="zoom-in" data-aos-delay="200">
              <img src="assets/img/pastor/2.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Pastor</span>
                </div>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.2s">
            <div className="member" data-aos="zoom-in" data-aos-delay="300">
              <img src="assets/img/pastor/1.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Prophet Henock</h4>
                  <span>
                    {" "}
                    <span>Pastor</span>
                  </span>
                </div>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.3s">
            <div className="member" data-aos="zoom-in" data-aos-delay="400">
              <img src="assets/img/pastor/2.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Amanda Jepson</h4>
                  <span>Pastor</span>
                </div>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
