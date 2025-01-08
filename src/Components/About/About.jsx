import React from 'react'
import './About.css'

function About() {
  return (
    <div className='section' id='About'>
      <div className=" grid inside--card">
        <div className="about__stroy--div grid titles--content">
          <div className="about__story__content--div grid titles--content">
            <h4>Our  Story</h4>
            <div className="grid inside--card">
              <h2 className='text--red'>Your Trusted Partner in Global Trade Since 1994</h2>
              <p>Lamaan General Trading, established in 1994, has been a trusted name in the export industry for three decades. Specializing in the distribution of high-quality household goods, electrical items, stationery, and lighting products, we have earned a reputation for reliability, efficiency, and excellence. Our business extends across the GCC and African regions, where we have built strong partnerships and a wide network, enabling us to meet the dynamic needs of our customers. At Lamaan General Trading, we pride ourselves on delivering top-notch products and exceptional service, ensuring customer satisfaction at every step.</p>
            </div>
          </div>
          <div className="about__story__image--div">
            <ul class="frame-parent">
              <li>
                <div class="frame-child br15"></div>
              </li>
              <li><img class="frame-item br15" alt=""  src='./Images/Contact/Mashahir.jpeg'/></li>
              <li><img class="frame-inner br15" alt="" src='./Images/Contact/Lamaan.jpeg'/></li>
              <li><img class="frame-item br15" alt=""  src='./Images/Contact/Desert.jpeg'/></li>
            </ul>
          </div>
        </div>
        <div className="about__mission__vision--div grid inside--card">
          <div className="about__mission--div grid inside--card bg--grey p24 br15" >
            <h4 className='text--center'>Our Mission</h4>
            <p>To be a leading exporter, delivering unparalleled value and quality to our customers through innovation, sustainable practices, and timely solutions. We strive to foster enduring relationships with our clients and partners, contributing to the prosperity of the communities we serve.</p>
          </div>
          <div className="about__vision--div grid inside--card bg--grey p24 br15">
            <h4 className='text--center'>Our Vision</h4>
            <p>To be globally recognized as a benchmark for excellence in the trading industry, expanding our reach while upholding our values of integrity, innovation, and commitment. We aim to be the preferred choice for clients in the GCC and African markets, setting new standards in quality and operational efficiency.</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About