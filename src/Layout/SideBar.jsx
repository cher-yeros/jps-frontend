import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const menus = [
    { label: "Dashboard", link: "dashboard", icon: "bi-grid-fill" },
    { label: "Blog", title: true },

    { label: "Posts", link: "blog/posts", icon: "bi-grid-fill" },
    { label: "Categories", link: "blog/category", icon: "bi-grid-fill" },

    { label: "Subscription and Users", title: true },

    { label: "Partners", link: "partners", icon: "bi-people-fill" },

    {
      label: "Payments",
      link: "payments",
      icon: "bi-person-workspace",
    },
    {
      label: "Feedbacks",
      link: "feedbacks",
      icon: "bi-person-workspace",
    },

    { label: "Services and Gallery", title: true },

    {
      label: "Service Categories",
      link: "service-category",
      icon: "bi-person-workspace",
    },
    {
      label: "Services",
      link: "services",
      icon: "bi-person-workspace",
    },
    {
      label: "Gallery Categories",
      link: "gallery-category",
      icon: "bi-person-workspace",
    },
    {
      label: "Gallery",
      link: "gallery",
      icon: "bi-person-workspace",
    },

    { label: "Online Bible Study", title: true },

    {
      label: "Bible Study Sessions",
      link: "prophetic-school-sessions",
      icon: "bi-journal-bookmark",
    },

    {
      label: "Bible Study Members",
      link: "prophetic-school-members",
      icon: "bi-card-checklist",
    },

    { label: "Vistors", title: true },

    // {
    //   label: "Vistors Prayer Schedule",
    //   link: "visitors-schedules",
    //   icon: "bi-journal-bookmark",
    // },

    {
      label: "Vistors ",
      link: "visitors-applications",
      icon: "bi-card-checklist",
    },
  ];

  return (
    <aside
      id="sidebar"
      className="sidebar"
      style={{
        background: "#2f2f59",
      }}
    >
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-heading">Pages</li>

        {menus?.map((menu) =>
          menu?.title ? (
            <li class="nav-heading">{menu.label}</li>
          ) : !menu.subMenus ? (
            <li className="nav-item" key={menu.label}>
              <NavLink
                // className="nav-link collapsed"
                className={({ isActive, isPending }) =>
                  isActive ? "nav-link collapsed active" : "nav-link collapsed"
                }
                to={menu.link}
                style={{ backgroundColor: "#2f2f59", color: "white" }}
              >
                <i className={"bi " + menu.icon}></i>
                <span>{menu.label}</span>
              </NavLink>
            </li>
          ) : (
            <li className="nav-item" key={menu.label}>
              <a
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>{menu.label}</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="components-nav"
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
              >
                {menu.subMenus.map((subMenu) => (
                  <li key={subMenu.label}>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending ? " pending" : isActive ? " active" : " "
                      }
                      to={menu.link + subMenu.link}
                    >
                      <i className="bi bi-circle"></i>
                      <span>{subMenu.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          )
        )}
      </ul>
    </aside>
  );
}
