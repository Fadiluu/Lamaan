import React from 'react'
import './Brands.css'

function Brands() {
  return (
    <div className='section'>
      <div className="grid titles--content">
        <div className="brands__first--div">
          <div className="brands__first__title--div grid titles--content">
            <div className='grid titles--content'>
              <h4>Our Services</h4>
              <div>
                <h1 className='text--red'>02</h1>
                <hr></hr>
              </div>
            </div>
            <div className='brands__name__desc--div grid inside--card'>
              <h2>Clever Trading L.L.C</h2>
              <p>With branches across the GCC and Africa, Lamaan General Trading ensures efficient distribution and exceptional customer service. Each location is committed to meeting the unique needs of its market, delivering high-quality products and fostering strong partnerships.</p>
            </div>
          </div>
        </div>
        <div className="brands__second--div text--center grid inside--card">
            <div className="brands__image--div grid elements--icon">
              <img src="/Images/Test.jpg" alt="" className='br15' />
              <h4>Desert Palace Trading</h4>
            </div>
            <div className="brands__image--div grid elements--icon">
              <img src="/Images/Test.jpg" alt="" className='br15'/>
              <h4>Clever Trading L.L.C</h4>
            </div>
            <div className="brands__image--div grid">
              <img src="/Images/Test.jpg" alt="" className='br15'/>
              <h4>Garden Gate Trading</h4>
            </div>
            <div className="brands__image--div grid elements--icon">
              <img src="/Images/Test.jpg" alt="" className='br15'/>
              <h4>Rokn Al Mashahir Gen L.L.C</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Brands