import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("About")}</h2>
          <p>{t("About Us")}</p>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>{t("About Body 1")}</p>

            <ul>
              <li>
                <i className="ri-check-double-line"></i>
                {t("Worship Services")}
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                {t("Bible Studies")}
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                {t("Community Outreach")}
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                {t("Youth Programs")}
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                {t("Counseling and Support")}
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              <b>{t("Our Mission")}</b> <br />
              {t("Our Mission Body")}
              <b>{t("Our Vision")}</b> <br />
              {t("Our Vision Body")}
              <br /> <br />
              <b> {t("What We Believe")}</b>
              <br />
              {t("What We Believe Body")}
            </p>
            <a href="#" className="btn-learn-more">
              {t("Learn More")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
