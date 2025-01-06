import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='section'>
      <contact className="grid titles--content">
        <div className="contact__left--div grid titles--content">
          <h1 className='text--red'>Get In Touch With Us</h1>
          <div className='grid inside--card'>
            <p>We’re here to help! Whether you have a question, need assistance, or want to explore partnership opportunities, feel free to reach out to us. We look forward to connecting with you.</p>
            <div className="contact__image--div">
              <img className="br15" src="./Images/contact.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="contact__right--div br15 bg--grey p24">
          <div className='grid titles--content'>
            <div className="contact__email--div grid elements--icon">
              <div className="contact__email__title--div flex align--center elements--icon">
                <img src="/Images/Icons/email.png" alt="" />
                <h4>Email</h4>
              </div>
              <div className="contact__email__content--div ">
                <p>General  queries: laman@example.com</p>
                <p>Job queries: laman@job.com</p>
              </div>
            </div>
            <div className="contact__address--div grid elements--icon">
              <div className="contact__address__title--div flex align--center elements--icon">
                <img src="/Images/Icons/loc.png" alt="" />
                <h4>Office Address</h4>
              </div>
              <div className="contact__address__content--div">
                <p>United Arab Emirates</p>
                <p>Duabai, Sabkha </p>
                <p>Building name/ Street no</p>
              </div>
            </div>
            <div className="contact__phone--div grid elements--icon">
              <div className="contact__phone__title--div flex align--center elements--icon">
                <img src="/Images/Icons/phone.png" alt="" />
                <h4>Phone</h4>
              </div>
              <div className="contact__phone__content--div ">
                <p>Phone 1: +971 04 32312312</p>
                <p>Phone 2: +971 04 32312312</p>
              </div>
            </div>
            <div className="contact__socials--div grid elements--icon">
              <div className="contact__browser__title--div flex align--center elements--icon">
                <img src="/Images/Icons/browser.png" alt="" />
                <h4>Socials</h4>
              </div>
              <div className="contact__socials__content--div flex flex--wrap elements--icon">
                <div className="contact__socials--inner--div flex elements--icon">
                  <img src="/Images/Icons/insta.png" alt="" />
                  <p>laman_trading</p>
                </div>
                <div className="contact__socials--inner--div flex elements--icon">
                  <img src="/Images/Icons/fb.png" alt="" />
                  <p>lamaan trading L.L.C</p>
                </div>
                <div className="contact__socials--inner--div flex elements--icon ">
                  <img src="/Images/Icons/watsapp.png" alt="" />
                  <p>+971 54 34343434</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </contact>
    </div>
  )
}

export default Contact