import React from 'react'
import './Hero.css'
import Navbar from '../../assets/Navbar/Navbar'

function Hero() {
  return (
    <div>
      <div className="section">
        <div>
          <div className="container">
            <Navbar></Navbar>
          </div>
        </div>
        <div className="hero__content--div">
          <h1>Lamaan General Trading L.L.C</h1>
          <h4>Your trusted partner since 1994</h4>
          <div className="hero__card--div">
            <div className="hero__card">
              <h4>50+</h4>
              <p>Employees</p>
            </div>
            <div className="hero__card">
              <h4>50+</h4>
              <p>Employees</p>
            </div>
            <div className="hero__card">
              <h4>50+</h4>
              <p>Employees</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero