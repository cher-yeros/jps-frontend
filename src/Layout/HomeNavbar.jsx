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
      link: "#hero",
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
      link: "#",
    },
    {
      label: "Blog",
      link: "#",
    },
    {
      label: "Bible Study",
      link: "#",
    },
    {
      label: "Partnership",
      link: "#",
    },
  ];

  const logout = () => {
    dispatch(logoutFinished());
    navigate("/");
  };

  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          <a href="#">JPS Ministry</a>
        </h1>

        {/* <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

        <nav id="navbar" class="navbar">
          <ul>
            {navbars?.map((navbar) => (
              <li>
                <a class="nav-link scrollto" href={navbar.link}>
                  {navbar?.label}
                </a>
              </li>
            ))}

            <li class="dropdown">
              <a href="#">
                <span>Language</span> <i class="bi bi-chevron-down"></i>
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
              <a class="getstarted scrollto" href="#">
                Donate
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
