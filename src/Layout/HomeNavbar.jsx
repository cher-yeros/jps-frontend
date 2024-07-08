/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutFinished } from "../redux/slices/authSlice";
export default function HomeNavbar() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [navbarOpened, setNavbarOpened] = useState(false);

  const { currentUser } = useSelector((state) => state.auth);

  const navbars = [
    {
      label: "Home",
      link: "/#",
      navigated: true,
    },
    {
      label: "JPS TV",
      link: "http://localhost:3000#services",
    },
    {
      label: "About Us",
      link: "#about",
    },

    {
      label: "Testimonials",
      link: "#testimonials",
    },
    {
      label: "Contact",
      link: "#contact",
    },
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
    {
      label: "Bible Study",
      link: "/bible-study",
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

  const logout = () => {
    dispatch(logoutFinished());
    navigate("/");
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link to={"/"}>JPS Ministry</Link>
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
                  <Link className="nav-link scrollto" to={navbar.link}>
                    {navbar?.label}
                  </Link>
                ) : (
                  <a className="nav-link scrollto" href={navbar.link}>
                    {navbar?.label}
                  </a>
                )}
              </li>
            ))}

            <li className="dropdown">
              <a href="#">
                <span>Language</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">English</a>
                </li>

                <li>
                  <a href="#">አማርኛ</a>
                </li>
                <li>
                  <a href="#">Afaan Oromoo</a>
                </li>
                <li>
                  <a href="#">ትግርኛ</a>
                </li>
              </ul>
            </li>

            <li>
              <Link className="getstarted scrollto" to={"/give"}>
                {t("Give")}
              </Link>
            </li>
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
