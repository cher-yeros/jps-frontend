/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutFinished } from "../redux/slices/authSlice";
export default function HomeNavbar() {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [navbarOpened, setNavbarOpened] = useState(false);

  const { currentUser } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   console.log({ navbarOpened });
  // }, [navbarOpened]);

  const logout = () => {
    dispatch(logoutFinished());
    navigate("/");
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);

    setNavbarOpened(false);
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link to={"/"}>{t("JPS TV")}</Link>
        </h1>

        {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

        <nav
          id="navbar"
          className={`navbar ${navbarOpened ? "navbar-mobile" : ""}`}
        >
          <ul>
            {navbars?.map((navbar) => (
              <li key={navbar.label}>
                {navbar?.navigated ? (
                  <Link
                    className="nav-link scrollto"
                    to={navbar.link}
                    onClick={() => setNavbarOpened(false)}
                  >
                    {t(navbar?.label)}
                  </Link>
                ) : (
                  <a
                    className="nav-link scrollto"
                    href={navbar.link}
                    onClick={() => setNavbarOpened(false)}
                  >
                    {t(navbar?.label)}
                  </a>
                )}
              </li>
            ))}

            <li className="dropdown">
              <a href="#">
                <span>{t("Language")}</span>{" "}
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#" onClick={() => changeLanguage("en")}>
                    English
                  </a>
                </li>

                <li>
                  <a href="#" onClick={() => changeLanguage("am")}>
                    አማርኛ
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => changeLanguage("or")}>
                    Afaan Oromoo
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => changeLanguage("ti")}>
                    ትግርኛ
                  </a>
                </li>
              </ul>
            </li>

            {currentUser?.id ? null : (
              <Link
                className="nav-link scrollto"
                to={"/login"}
                onClick={() => setNavbarOpened(false)}
              >
                {t("Login")}
              </Link>
            )}

            <li>
              <Link
                className="getstarted scrollto"
                to={"/give"}
                onClick={() => setNavbarOpened(false)}
              >
                {t("Give")}
              </Link>
            </li>

            {currentUser?.id && (
              <li className="dropdown">
                <a href="#">
                  <Avatar></Avatar>
                  <span>
                    {currentUser?.first_name +
                      " " +
                      currentUser?.last_name[0] +
                      "."}
                  </span>
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <Link to="#" onClick={() => setNavbarOpened(false)}>
                      My Profile
                    </Link>
                  </li>

                  <li>
                    <a href="#" className="btn" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
          <i
            className={` ${
              navbarOpened ? "bi bi-x" : "bi bi-list"
            } mobile-nav-toggle`}
            // className={"bi mobile-nav-toggle bi-list"}
            onClick={() => {
              setNavbarOpened(!navbarOpened);
              // if (document.getElementById("navbar").has)
              //   document
              //     .getElementById("navbar")
              //     .classList.add("navbar-mobile");
            }}
          ></i>
        </nav>
      </div>
    </header>
  );
}
export const navbars = [
  {
    label: "Home",
    link: "/#",
    navigated: true,
  },
  {
    label: "JPS TV",
    link: "/services",
    navigated: true,
  },
  {
    label: "About Us",
    link: "#about",
  },

  // {
  //   label: "Testimonials",
  //   link: "#testimonials",
  // },
  // {
  //   label: "Contact",
  //   link: "#contact",
  // },
  {
    label: "Gallery",
    link: "/gallery",
    navigated: true,
  },
  {
    label: "Programs",
    link: "/programs",
    navigated: true,
  },
  // {
  //   label: "Bible Study",
  //   link: "/bible-study",
  //   navigated: true,
  // },
  {
    label: "Prayer Request",
    link: "/prayer-request",
    navigated: true,
  },
  {
    label: "Partnership",
    link: "/partnership",
    navigated: true,
  },
  {
    label: "Visitors",
    link: "/visitors",
    navigated: true,
  },
];
