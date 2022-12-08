import React from 'react'
import Explore from '../../components/Explore'
import FeaturedProduct from '../../components/FeaturedProduct'
import Hero from '../../components/Hero'
import Newsletter from '../../components/Newsletter'
import TopCreators from '../../components/TopCreators'
import UpcomingSection from '../../components/UpcomingSection'

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <FeaturedProduct/>
        <UpcomingSection/>
        <Explore/>
        <TopCreators/>
        <Newsletter/>
    </div>
  )
}

export default Homepage