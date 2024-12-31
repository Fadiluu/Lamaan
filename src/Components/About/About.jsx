import React from 'react'
import './About.css'

function About() {
  return (
    <div className='section'>
      <div className="grid inside--card">
        <div className="about__stroy--div grid titles--content">
          <div className="about__story__content--div grid titles--content">
            <h4>Our  Story</h4>
            <div className="grid inside--card">
              <h2>Your Trusted Partner in Global Trade Since 1994</h2>
              <p>Lamaan General Trading, established in 1994, has been a trusted name in the export industry for three decades. Specializing in the distribution of high-quality household goods, electrical items, stationery, and lighting products, we have earned a reputation for reliability, efficiency, and excellence. Our business extends across the GCC and African regions, where we have built strong partnerships and a wide network, enabling us to meet the dynamic needs of our customers. At Lamaan General Trading, we pride ourselves on delivering top-notch products and exceptional service, ensuring customer satisfaction at every step.</p>
            </div>
          </div>
          <div className="about__story__image--div">
        
            <div className="frame">
              <div className="overlap-group">
                <div className="div" />
                  <div className="image-removebg-wrapper">
                    <img className="image-removebg br15" alt="Image removebg" src='./Images/ci2.png'/>
                  </div>
                  <div className="image-wrapper">
                    <img className="image br15" alt="Image" src='./Images/contactimage.png' />
                  </div>
                  <div className="img-wrapper">
                    <img className="img br15" alt="Image" src='./Images/contact.jpg' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about__mission__vision--div grid titles--content">
          <div className="about__mission--div grid inside--card" >
            <h4 className='text--center'>Our Mission</h4>
            <p>To be a leading exporter, delivering unparalleled value and quality to our customers through innovation, sustainable practices, and timely solutions. We strive to foster enduring relationships with our clients and partners, contributing to the prosperity of the communities we serve.</p>
          </div>
          <div className="about__vision--div grid inside--card">
            <h4 className='text--center'>Our Vision</h4>
            <p>To be globally recognized as a benchmark for excellence in the trading industry, expanding our reach while upholding our values of integrity, innovation, and commitment. We aim to be the preferred choice for clients in the GCC and African markets, setting new standards in quality and operational efficiency.</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About