import React, { useState } from 'react'
import './Brands.css'

function Brands() {
  
  const brands = [
    {
      imgSrc: '/Images/clever.jpeg',
      altText: 'Clever Trading L.L.C',
      title: 'Clever Trading L.L.C',
      desc: 'Operating from the UAE, Clever is a leading supplier of stationery and electrical products, providing innovative and reliable solutions to customers. Known for its quality and efficiency, Clever serves as a go-to brand for businesses and households alike.'
    },
    {
      imgSrc: '/Images/Desert.jpeg',
      altText: 'Desert Palace Trading',
      title: 'Desert Palace Trading',
      desc: ' Located in the UAE, Desert Palace is a trusted source for LED lights and decorative pieces, combining energy efficiency with aesthetic appeal. Dedicated to quality and customer satisfaction, Desert Palace delivers lighting solutions and decorations that stand out.'
    },
    {
      imgSrc: '/Images/garden.jpeg',
      altText: 'Garden Gate Trading',
      title: 'Garden Gate Trading',
      desc: 'Based in the UAE, Garden Gate focuses on household goods, offering a diverse range of premium-quality products designed to elevate everyday living. With a commitment to customer satisfaction, Garden Gate ensures dependable service and a wide selection of items for every home.'
    },
    {
      imgSrc: '/Images/Mashahir.jpeg',
      altText: 'Rokn Al Mashahir Gen L.L.C',
      title: 'Rokn Al Mashahir',
      desc: 'Situated in the UAE, Mashahir specializes in LED lights and decorations, offering cutting-edge lighting solutions and stylish decorative items. Renowned for its creativity and energy-efficient products, Mashahir enhances homes and events with elegance and innovation.'
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState({
    title: brands[0].title,
    desc: brands[0].desc,
  });

  const [fade, setFade] = useState(false);
  const handleBrandClick = (brand) => {
    if (selectedBrand.title === brand.title) return;
    setFade(true); // Trigger fade-out
    setTimeout(() => {
      setSelectedBrand({ title: brand.title, desc: brand.desc });
      setFade(false); // Trigger fade-in
    }, 300); // Duration matches the CSS transition
  };



  return (
    <div className='section' id='Brands'>
      <div></div>
      <div className="grid titles--content">
        <div className="brands__first--div">
          <div className="brands__first__title--div grid titles--content" >
            <div className='grid titles--content'>
              <h4>Our Branches</h4>
              <div>
                <h1 className='text--red'>02</h1>
                <hr></hr>
              </div>
            </div>
            <div id='b' className={`brands__name__desc--div grid inside--card ${fade ? 'fade' : ''}`}>
              <h2>{selectedBrand.title}</h2>
              <p>{selectedBrand.desc}</p>
            </div>
          </div>
        </div>
        <div className="brands__second--div text--center grid inside--card">
             {brands.map((brand, index) => (
            <div key={index} className="brands__image--div grid elements--icon" onClick={() => handleBrandClick(brand)
              }>
              <img loading='lazy' src={brand.imgSrc} alt={brand.altText} className="br15" />
              <h4 className={selectedBrand.title === brand.title ? 'text--red' : ''}>{brand.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands