import React, { useState } from 'react'
import './Navbar.css'


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <header>
        <div className="navbar">
            <div className="logo grid"><a href="#"><h4 className='text--red'>Lamaan General Trading</h4></a></div>
            <ul className="links">
                <li><a href="hero">Home</a></li>
                <li><a href="contact">Contact us</a></li>
                <li><a href="braches">Our Branches</a></li>
                <li><a href="about">About us</a></li>
            </ul>
            <a href="#" className="action_btn">Get Started</a>
            <div className="toggle_btn" onClick={toggleMenu}>
                <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
        </div>

        <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
            <li><a href="hero">Home</a></li>
            <li><a href="contact">Contact us</a></li>
            <li><a href="braches">Our Branches</a></li>
            <li><a href="about">About us</a></li>
            <li> <a href="" className="action_btn">Get Started</a></li>
        </div>
    </header>

    
  )
}

export default Navbar