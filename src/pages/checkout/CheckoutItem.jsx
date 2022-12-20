import React from 'react'
import image from "../../assets/marketplace.png"
import {RiSubtractFill} from "react-icons/ri"
import {AiOutlinePlus} from "react-icons/ai"
import {ImCancelCircle} from "react-icons/im"

const CheckoutItem = ({CartItem}) => {
  console.log(CartItem)
  return (
    <>
{CartItem && CartItem.map((item, index) => (
  <div className='flex justify-between border-t border-b py-6'  key={index}>
  <div className='lg:gap-10 gap-4 flex'>
      <div className=''>
          <img src={item.image} alt="" />
      </div>
      <div className='flex flex-col justify-between '>
          <h4>{item.name}</h4>
          <h5>category: {item.category}</h5>
          <h5 className='hidden lg:block'>price: {item.price}</h5>
          <p className="flex lg:gap-4 gap-2  items-center">
        <RiSubtractFill className="text-2xl cursor-pointer" />
        <span className="text-xl">1</span>
        <AiOutlinePlus className="text-xl cursor-pointer" />
      </p>
      </div>
  </div>
  <div className='flex justify-between flex-col items-center'>
      <ImCancelCircle size={24}/>
      <h4>$39.50</h4>
  </div>
</div>
))}
  
    </>
  )
}

export default CheckoutItem