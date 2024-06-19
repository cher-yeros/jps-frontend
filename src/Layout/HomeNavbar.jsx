/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutFinished } from "../redux/slices/authSlice";
export default function HomeNavbar() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.auth);

  const navbars = [
    {
      label: "Home",
      link: "/#",
      navigated: true,
    },
    {
      label: "Services",
      link: "#services",
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
      label: "Blog",
      link: "/blog",
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
  ];

  const logout = () => {
    dispatch(logoutFinished());
    navigate("/");
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="#">JPS Ministry</a>
        </h1>

        {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

        <nav id="navbar" className="navbar">
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
              <Link className="getstarted scrollto" to={"/partnership"}>
                Give
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
