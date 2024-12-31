import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='section'>
      <div className="footer__first--div">
        <div className="line"></div>
        <h2>Lamaan General Trading L.L.C.</h2>
        <div className="line"></div>
      </div>
      <div className="footer__second--div">
        <p>Privacy Policy</p>
        <div className="footer__socials--div">
          <img src="/Images/Icons/insta.png" alt="" />
          <img src="/Images/Icons/watsapp.png" alt="" />
          <img src="/Images/Icons/fb.png" alt="" />
        </div>
        <div className="line-v"></div>
        <p>Terms and conditions</p>
      </div>
      <div className="footer__end">
        <h4>Copyright © 2024 Lamaan General Trading.</h4>
      </div>
    </div>
  )
}

export default Footer