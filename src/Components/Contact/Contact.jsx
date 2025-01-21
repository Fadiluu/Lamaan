import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='section grid titles--content' id='Contact'>
            <h2 className='text--red'>Get In Touch With Us</h2>
      <contact className="contact--div grid titles--content">
        <div className="contact__left--div grid titles--content">
          <div className='grid titles--content'>
            <p>We’re here to help! Whether you have a question, need assistance, want to explore partnership opportunities, or simply wish to learn more about what we offer, don’t hesitate to reach out. We’re always ready to listen and look forward to connecting with you.</p>
            <div className="contact__image--mobile contact__image--div">
              <img loading='lazy' className="br15" src="./Images/Lamaan.jpeg" alt="" />
            </div>
            <div className='contact__icons--div grid titles--content br15 bg--grey p24'>
            <div className="contact__email--div grid elements--icon">
              <div className="contact__email__title--div flex align--center elements--icon">
                <img loading='lazy' src="/Images/Icons/email.png" alt="" />
                <h4>Email</h4>
              </div>
              <div className="contact__email__content--div grid elements--icon">
                <p>lamaandubai@yahoo.com</p>
                <p>info@lamaandubai.ae</p>
              </div>
            </div>
            <div className="contact__address--div grid elements--icon">
              <div className="contact__address__title--div flex align--center elements--icon">
                <img loading='lazy' src="/Images/Icons/loc.png" alt="" />
                <h4>Office Address</h4>
              </div>
              <div className="contact__address__content--div grid elements--icon">
                <p>United Arab Emirates</p>
                <p>Dubai, Sabkha </p>
                <p>Al Dallal Building / Shop No.11</p>
              </div>
            </div>
            <div className="contact__phone--div grid elements--icon">
              <div className="contact__phone__title--div flex align--center elements--icon">
                <img loading='lazy' src="/Images/Icons/phone.png" alt="" />
                <h4>Phone</h4>
              </div>
              <div className="contact__phone__content--div grid elements--icon ">
                <p>Phone 1: +971 50 3594060</p>
                <p>Phone 2: +971 50 5749527</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="contact__right--div">
        <div className="contact__image--desktop contact__image--div">
              <img loading='lazy' className="br15" src="./Images/Lamaan.jpeg" alt="" />
            </div>
        </div>
      </contact>
    </div>
  )
}

export default Contact