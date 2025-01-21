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
                <li><a href="#About">About us</a></li>
                <li><a href="#Brands">Our Branches</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            <div className='action_btn flex align--center elements--icon'>
                <img src="./Images/Icons/wringer.png" alt="" />
                <p className='text--red'>+971 50 3594060</p>
            </div>
            <div className="toggle_btn" onClick={toggleMenu}>
                <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
        </div>

        <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
                <li><a href="#About">About us</a></li>
                <li><a href="#Brands">Our Branches</a></li>
                <li><a href="#Contact">Contact</a></li>
            <li className='pointer flex elements--icon'>
                <img src="/Images/Icons/wringer.png" alt="" />
                <p className='text--red'>+971 50 3594060</p>
            </li>
        </div>
    </header>

    
  )
}

export default Navbar