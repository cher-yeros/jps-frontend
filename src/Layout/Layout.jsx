import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout() {
  const { t } = useTranslation();
  const { currentUser } = useSelector((state) => state.auth);

  return currentUser?.role === "admin" ? (
    <>
      <Header />
      <SideBar />

      <main id="main" className="main">
        <section
          className="section dashboard"
          style={{ height: "calc(100vh - 8rem)", padding: 0 }}
        >
          <Outlet />
        </section>
      </main>
    </>
  ) : (
    <Navigate to={"/login"} replace />
  );
}
