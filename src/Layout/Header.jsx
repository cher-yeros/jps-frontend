/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { controlSidebar } from "../redux/slices/systemSlice";
import { Avatar, Chip } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logoutFinished } from "../redux/slices/authSlice";

export default function Header() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { sidebar } = useSelector((state) => state.system);
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    openCloseSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebar]);

  const sidebarController = () => {
    dispatch(controlSidebar());
  };

  function openCloseSidebar() {
    if (sidebar) {
      document.body.classList.remove("toggle-sidebar");
    } else {
      document.body.classList.add("toggle-sidebar");
    }
  }

  return (
    <header
      id="header"
      className="header fixed-top d-flex align-items-center"
      style={{ background: "#2f2f59", color: "white" }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/admin" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span
            className="d-none d-lg-block pl-4"
            style={{ color: "white", marginLeft: "1.8rem" }}
          >
            {t("JPS TV")}
          </span>
        </Link>
        <i
          style={{ color: "white" }}
          className="bi bi-list toggle-sidebar-btn"
          onClick={sidebarController}
        ></i>
      </div>

      <div
        className="pagetitle"
        style={{
          marginBottom: "0",
          fontSize: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "10px",
          paddingLeft: "15px",
          color: "white",
        }}
      >
        <h1 style={{ color: "inherit" }}>{t("Dashboard")}</h1>
        <nav style={{ lineHeight: 1 }}>
          <ol className="breadcrumb">
            {pathname?.split("/").map(
              (path) =>
                path && (
                  <li
                    className="breadcrumb-item active"
                    style={{ textTransform: "capitalize" }}
                  >
                    {path.replaceAll("-", " ")}
                  </li>
                )
            )}
          </ol>
        </nav>
      </div>
      {/* <div className="search-bar">
        <form
          className="search-form d-flex align-items-center"
          method="POST"
          action="#"
        >
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
          />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div> */}

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle" href="#">
              <i className="bi bi-search"></i>
            </a>
          </li>

          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              {/* <img
                src="assets/img/profile-img.jpg"
                alt="Profile"
                className="rounded-circle"
              /> */}
              <Avatar></Avatar>
              <span
                className="d-none d-md-block dropdown-toggle ps-2"
                style={{ color: "white" }}
              >
                {currentUser?.first_name + " " + currentUser.last_name}
              </span>{" "}
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>
                  {" "}
                  {currentUser?.first_name + " " + currentUser.last_name}
                </h6>
                <span>
                  <Chip color="success" label={t(currentUser?.role)} />
                </span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i className="bi bi-person"></i>
                  <span>{t("My Profile")}</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  onClick={() => {
                    dispatch(logoutFinished());
                    navigate("/");
                  }}
                >
                  <i className="bi bi-box-arrow-right"></i>
                  <span>{t("Sign Out")}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
