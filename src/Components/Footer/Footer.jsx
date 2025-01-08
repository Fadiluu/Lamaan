import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className='footer__section grid g2'>
        <div className="footer__first--div">
          <div className="line"></div>
          <h2>Lamaan General Trading L.L.C.</h2>
          <div className="line"></div>
        </div>
        <div className="footer__second--div p24 ">
          <p>Privacy Policy</p>
          {/* <div className="footer__socials--div flex ">
            <img src="/Images/Icons/insta.png" alt="" />
            <img src="/Images/Icons/watsapp.png" alt="" />
            <img src="/Images/Icons/fb.png" alt="" />
          </div> */}
          <div className="footer__menu--div flex ">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Brands">Branches</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Contact">Contact</a></li>
          </div>
          <div className="line-v"></div>
          <p>Terms & conditions</p>
        </div>
      </div>
        <div className="footer__end--div bg--black text--center text--white p24">
          <h4>Copyright © 2024 Lamaan General Trading.</h4>
        </div>
    </footer>
  )
}

export default Footer