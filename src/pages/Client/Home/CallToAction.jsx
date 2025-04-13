import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h3>{t("Call To Prayer")}</h3>
          <p>{t("Call To Prayer Body")} </p>
          <Link className="cta-btn" to={"/prayer-request"}>
            {t("Call To Prayer")}
          </Link>
        </div>
      </div>
    </section>
  );
}
