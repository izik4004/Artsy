import React from 'react'
import image from "../assets/item1.png"

const MarketItem = () => {
  return (
    <div className=' p-2 shadow-md rounded-md flex flex-col justify-between'>
        <img src={image} alt="" className='h-[200px]' />
        <h4 className='py-2'>PHILOMENA '20</h4>
        <h3 className='py-2'>$3.90</h3>
    </div>
  )
}

export default MarketItem