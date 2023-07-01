import React, { useState } from "react";
import logo from "../../../assests/images/62f7950839fad2082789a0be_artgram (1).svg";
import "./style.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { userData } from "../../../redux/slice/usersDataSlice";
export const Header = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(false);
  const [menu, setMenu] = useState(false);
  const users = useSelector((state) => state.users);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  const handleLogout = async () => {
    const response = await axios
      .create({
        withCredentials: true,
      })
      .post("http://localhost:8080/logout")
      .then((res) => {
        if (res.status === 200) {
          dispatch(userData({}));
          navigate("/login");
          setUser(false);
        }
      });
  };
  return (
    <header>
      <div className="container">
        <div className="nav">
          <nav>
            {
              console.log(counter.value)
            }
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <ul className={menu ? "active-menu" : null}>
              <li>
                <NavLink to="">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="0">
                        <NavLink to={"/blog"}>Blog</NavLink>
                      </Menu.Item>
                      <Menu.Item key="1">
                        <NavLink to={"/event"}>Event</NavLink>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <NavLink to={"/projects"}>Projects</NavLink>
                      </Menu.Item>
                      <Menu.Item key="3">
                        <NavLink to={"/gallery"}>Gallery</NavLink>
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <NavLink
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    to={"/pages"}
                  >
                    Pages <span className="menu-arrow"></span>
                  </NavLink>
                </Dropdown>
              </li>
              <li>
                <NavLink to="/shop">Products</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/wishlist">Wishlist</NavLink>
              </li>
              {users?.user?.isAdmin == true ? (
                  <li>
                    <NavLink to={"/admin/"}>
                      Admin Panel
                    </NavLink>
                  </li>
                ) : null}
            </ul>
            <div className="settings-profil">
            <div className="user-setting">
              {users?.user?.firstName == undefined ? (
                <div onClick={() => setUser(!user)} className="user">
                  <i className="fa-solid fa-user"></i>
                </div>
              ) : (
                <div onClick={() => setUser(!user)} className="user">
                  <img src={users?.user?.image} alt="" />
                </div>
              )}

              {user && (
                <div className="user-profile">
                  {users?.user?.firstName == undefined ? (
                    <ul>
                      <li>
                        <NavLink to={"/login"}>
                          LOGIN
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/register"}>
                          SIGN UP
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        </NavLink>
                      </li>
                    </ul>
                  ) : (
                    <div className="profile">
                      <h4>
                        {`${users.user.firstName} ${users.user.lastName}`}
                      </h4>
                      <NavLink to={"/user-profile/"}>
                      Profile <i className="fa-regular fa-id-card"></i>
                    </NavLink>
                      <div className="btn">
                        <button onClick={() => handleLogout()}>
                          LOGOUT
                          <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
                <div onClick={() => setMenu(!menu)} className="menu-item">
              <div className="menu">
                {menu ? (
                  <i className="fa-solid fa-x"></i>
                ) : (
                  <i className="fa-solid fa-bars"></i>
                )}
              </div>
            </div>
            <div className="card-count" onClick={() => navigate('/cart')}>
              Cart <div className="count">{counter.value}</div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
