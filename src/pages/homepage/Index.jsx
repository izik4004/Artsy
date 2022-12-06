import React from 'react'
import FeaturedProduct from '../../components/FeaturedProduct'
import Hero from '../../components/Hero'
import UpcomingSection from '../../components/UpcomingSection'

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <FeaturedProduct/>
        <UpcomingSection/>
    </div>
  )
}

export default Homepage