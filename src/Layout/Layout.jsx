import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import SideBar from "./SideBar";
import { useTranslation } from "react-i18next";

export default function Layout() {
  const { t } = useTranslation();

  return (
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
  );
}
