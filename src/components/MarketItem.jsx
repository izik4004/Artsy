import React from 'react'
import { useNavigate } from "react-router-dom";

const MarketItem = ({image, name, price, id}) => {
  const navigate = useNavigate();
  return (
    <div   onClick={() =>
      navigate(`/products/${id}`)
    }
    className='p-2 lg:shadow-md cursor-pointer lg:rounded-md flex flex-col justify-between'>
        <img src={image} alt="" className='h-[200px]' />
        <span className='flex justify-between lg:flex-col'>
        <h4 className='py-2'>{name}</h4>
        <h3 className='py-2'>{price}</h3>
        </span>
    </div>
  )
}

export default MarketItem