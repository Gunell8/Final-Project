import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assests/images/62f7950839fad2082789a0be_artgram (1).svg";
export const Navbar = () => {
  return (
    <div className="admin-navbar">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <nav>
        <ul>
          <li className="nav-menu">
            <NavLink to={"/admin"}>
              <div className="icon">
                <i className="fa-solid fa-gauge"></i>
              </div>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-menu">
            <Link to={"/admin/gallery-list"}>
              <div className="icon">
              <i className="fa-solid fa-photo-film"></i>
                            </div>
              Galeries
            </Link>
          </li>
          <li className="nav-menu">
            <Link to={"/admin/add-gallery"}>
              <div className="icon">
              <i className="fa-solid fa-folder-plus"></i>
                            </div>
              Add Galeries
            </Link>
          </li>
          <li className="nav-menu">
            <Link to={"/admin/users-list"}>
              <div className="icon">
              <i class="fa-solid fa-users"></i>              </div>
              Users
            </Link>
          </li>
          <li className="nav-menu">
            <Link to={"/admin/users-list"}>
              <div className="icon">
              <i className="fa-solid fa-user-plus"></i>
                            </div>
              Add Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
