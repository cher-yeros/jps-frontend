import React from "react";
import { useTranslation } from "react-i18next";

export default function WhyUs() {
  const { t } = useTranslation();

  return (
    <section id="why-us" class="why-us section-bg">
      <div class="container-fluid" data-aos="fade-up">
        <div class="row">
          <div
            class="col-lg-5 align-items-stretch video-box"
            style={{ backgroundImage: "url('assets/img/thumb-1.jpg')" }}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <a
              href="https://www.youtube.com/watch?v=16q9REoIH9E "
              class="venobox play-btn mb-4"
              data-vbtype="video"
              data-autoplay="true"
            ></a>
          </div>

          <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
            <div class="content">
              <h3>
                {t("In")}
                <strong> {t("JPS Ministry")}</strong>
              </h3>
              <p>{t("In JPS Ministry Body")}</p>
            </div>

            <div class="accordion-list">
              <ul>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    class="collapse"
                    data-bs-target="#accordion-list-1"
                  >
                    <span>01</span> {t("Worship Services 1")}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-1"
                    class="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>{t("Worship Services Body")}</p>
                  </div>
                </li>

                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-2"
                    class="collapsed"
                  >
                    <span>02</span> {t("Prayer and Fasting")}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-2"
                    class="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>{t("Prayer and Fasting Body")}</p>
                  </div>
                </li>

                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                    class="collapsed"
                  >
                    <span>03</span> {t("Preaching Gospel")}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-3"
                    class="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>{t("Preaching Gospel Body")}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
