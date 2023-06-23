import React from 'react'
import logo from "../../../assests/images/62f7950839fad2082789a0be_artgram (1).svg"
import "./style.scss"
import { NavLink } from 'react-router-dom'
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
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/event">Event</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/shop">Products</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
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
