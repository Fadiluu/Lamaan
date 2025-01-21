import React from 'react'
import './Hero.css'
import Navbar from '../../assets/Navbar/Navbar'

function Hero() {
  return (
    <div className='hero text--white' id='Home'>
      <div className="section grid">
        <div>
          <div className="container nav--div">
            <Navbar></Navbar>
          </div>
        </div>
        <div className="hero__content--div container text--center grid titles--content">
          <div className='grid elements--icon'>
            {/* <h1 className='text--red'>Lamaan General<br></br>Trading L.L.C</h1> */}
            <h1 className="text--red">
    <span class="line1">Lamaan General</span><br/>
    <span class="line2">Trading L.L.C</span>
</h1>

            <p>Your trusted partner since 1994</p>
          </div>
          <div className="hero__card--div grid elements--icon">
            <div className="hero__card br15 bg--black">
              <h4>25+</h4>
              <p>Employees</p>
            </div>
            <div className="hero__card br15 bg--black">
              <h4>30+</h4>
              <p>Year of Expertise</p>
            </div>
            <div className="hero__card br15 bg--black">
              <h4>1000+</h4>
              <p>Customers</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero