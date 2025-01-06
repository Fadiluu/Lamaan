import React from 'react'
import './Hero.css'
import Navbar from '../../assets/Navbar/Navbar'

function Hero() {
  return (
    <div className='hero text--white'>
      <div className="section grid">
        <div>
          <div className="container nav--div">
            <Navbar></Navbar>
          </div>
        </div>
        <div className="hero__content--div container text--center grid titles--content">
          <div className='grid elements--icon'>
            <h1>Lamaan General<br></br>Trading L.L.C</h1>
            <p>Your trusted partner since 1994</p>
          </div>
          <div className="hero__socials--div flex elements--icon ">
            <div>
              <img src="/Images/Icons/winsta.png" alt="" />
            </div>
            <div>
              <img src="/Images/Icons/wwatsapp.png" alt="" />
            </div>
            <div>
              <img src="/Images/Icons/wlinkdein.png" alt="" />
            </div>
          </div>
          <div className="hero__card--div flex flex--wrap elements--icon">
            <div className="hero__card br15">
              <h4>50+</h4>
              <p>Employees</p>
            </div>
            <div className="hero__card br15">
              <h4>50+</h4>
              <p>year of experience</p>
            </div>
            <div className="hero__card br15">
              <h4>50+</h4>
              <p>Customers</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero