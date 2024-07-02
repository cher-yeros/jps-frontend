import React from "react";
import { useTranslation } from "react-i18next";

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h3>{t("Call To Prayer")}</h3>
          <p>{t("Call To Prayer Body")} </p>
          <a className="cta-btn" href="tel:0912345678">
            {t("Call To Prayer")}
          </a>
        </div>
      </div>
    </section>
  );
}
