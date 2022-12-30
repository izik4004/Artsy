import React from 'react'
import Explore from '../../components/Explore'
import FeaturedProduct from '../../components/FeaturedProduct'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ImageSlider from '../../components/ImageSlider'
import Newsletter from '../../components/Newsletter'
import TopCreators from '../../components/TopCreators'
import UpcomingSection from '../../components/UpcomingSection'

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <ImageSlider/>
        <FeaturedProduct/>
        <UpcomingSection/>
        <Explore/>
        <TopCreators/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Homepage