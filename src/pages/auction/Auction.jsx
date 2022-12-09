import React from 'react'
import AuctionItem from '../../components/AuctionItem'

const Auction = () => {
  return (
    <section className='container mx-auto'>
    <div>
        <h4>Here’s an overview of products actively on auction, explore!</h4>
    </div>
    <div>
      <AuctionItem/>
    </div>
    </section>
  )
}

export default Auction