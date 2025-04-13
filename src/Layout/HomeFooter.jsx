import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { navbars } from "./HomeNavbar";

export default function HomeFooter() {
  const { t } = useTranslation();

  return (
    <footer id="home-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>{t("JPS Ministry")}</h3>
                <p className="pb-3">
                  <em style={{ textTransform: "capitalize" }}>
                    {" "}
                    {t("JPS Footer Body")}.
                  </em>
                </p>

                <br />
                <p>
                  {t("Rwanda St, Addis Ababa, Addis Ababa, Ethiopia")}
                  <br />
                  <br />
                  <strong>{t("Phone")}:</strong> +251 93 953 3535
                  <br />
                  <strong>{t("Email")}:</strong> prohenok@gmail.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  {/* <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a> */}
                  <a
                    href="https://t.me/jpstv"
                    target="_blank"
                    rel={"noreferrer"}
                    className="telegram"
                  >
                    <i className="bx bxl-telegram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100044143164244"
                    target="_blank"
                    rel={"noreferrer"}
                    className="facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/prophethenok/"
                    target="_blank"
                    rel={"noreferrer"}
                    className="instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@prophethenokgirmajpstvworl8083"
                    target="_blank"
                    rel={"noreferrer"}
                    className="youtube"
                  >
                    <i className="bx bxl-youtube"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@prophethenokgirma"
                    target="_blank"
                    rel={"noreferrer"}
                    className="tiktok"
                  >
                    <i className="bx bxl-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>{t("Useful Links")}</h4>
              <ul>
                {navbars.map((navbar) => (
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to={navbar.link}>{t(navbar.label)}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 footer-newsletter">
              {/* <h4>{t("Our Newsletter")}</h4> */}
              {/* <p>{t("Subscribe to our newsletter")}</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form> */}

              <div className="map-container">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1353.6219058660758!2d38.77786257782149!3d8.98980386489865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a3d2937c23%3A0x687e663b2e3f88e0!2sJps%20international%20church!5e0!3m2!1sen!2set!4v1721668835484!5m2!1sen!2set"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>JPS Ministry</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
