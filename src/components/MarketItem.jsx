import React from 'react'
import image from "../assets/item1.png"

const MarketItem = ({image, name, price}) => {
  return (
    <div className='p-2 lg:shadow-md lg:rounded-md flex flex-col justify-between'>
        <img src={image} alt="" className='h-[200px]' />
        <span className='flex justify-between lg:flex-col'>
        <h4 className='py-2'>{name}</h4>
        <h3 className='py-2'>{price}</h3>
        </span>
    </div>
  )
}

export default MarketItem