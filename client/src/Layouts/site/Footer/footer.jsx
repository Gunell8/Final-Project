import React from 'react'
import logo from "../../../assests/images/62f7950839fad2082789a0be_artgram (1).svg"
import "./style.scss"
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <div className="footer">
               <div className='container'>
           <footer>
                <div className="foot-left">
                    <img src={logo} alt="" />
                    <div className="inp"> 
                    <label htmlFor="">Subscribe to the newsletter and stay in the know.</label>
                    <input type="text" placeholder='Email address' />
                        <button>Submit</button>
                        </div>
                    <div className="link">
                        <p>Designed by </p><Link to="https://www.webestica.com/">Webestica,</Link>
                        <p> Powered by </p><Link to="https://webflow.com/">Webflow</Link>
                    </div>
                </div>
                <div className="foot-right">
                    <h5>Useful links</h5>
                    <div className="a">
                        <ul>
                            <li><Link to="">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/event">Event</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <ul>
                            <li><Link>FAQs</Link></li>
                            <li><Link>Privacy Policy</Link></li>
                            <li><Link>Style Guide</Link></li>
                            <li><Link>Instructions</Link></li>
                            <li><Link>Licenses</Link></li>
                        </ul>

                    </div>
                </div>
                <div className="foot-last">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-solid fa-basketball"></i>
                </div>
            </footer>
           </div>
        </div>
    )
}