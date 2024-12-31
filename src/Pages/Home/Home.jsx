import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Brands from '../../Components/Brands/Brands'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <>
        <Hero></Hero>
        <div className='container'>
          <Brands></Brands>
          <About></About>
          <Contact></Contact>
        </div>
        <Footer></Footer>
    </>
  )
}

export default Home