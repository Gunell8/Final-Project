import React from 'react'
import logo from "../../../assests/images/62f7950839fad2082789a0be_artgram (1).svg"
import "./style.scss"
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown } from "antd";
export const Header = () => {


  return (
    <header>
        <div className='container'>
         <div className="nav">
       <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
              <li>

            <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item key="0">
                            <NavLink to={"/blog"}>Blog</NavLink>
                          </Menu.Item>
                          <Menu.Item key="1">
                            <NavLink to={"/event"}>
                              Event
                            </NavLink>
                          </Menu.Item>
                          <Menu.Item key="2">
                            <NavLink to={"/projects"}>
                              Projects
                            </NavLink>
                          </Menu.Item>
                          <Menu.Item key="3">
                            <NavLink to={"/gallery"}>
                              Gallery
                            </NavLink>
                          </Menu.Item>
                        </Menu>
                      }
                      trigger={["hover"]}
                    >
                      <NavLink
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                        to={"/"}
                      >
                        Pages <span className="menu-arrow"></span>
                      </NavLink>
                    </Dropdown>
              </li>
            <li><NavLink to="/shop">Products</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/wishlist">Wishlist</NavLink></li>
          
          </ul>
          <div className="card-count">
            Cart  <div className="count">0</div>
           
          </div>
        </nav>
       </div>
    </div>
      </header>
      
  )
}
