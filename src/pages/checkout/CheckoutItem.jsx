import React from 'react'
import image from "../../assets/marketplace.png"
import {RiSubtractFill} from "react-icons/ri"
import {AiOutlinePlus} from "react-icons/ai"

const CheckoutItem = () => {
  return (
    <div className='flex justify-between border-t border-b py-6'>
        <div className='gap-10 flex'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='flex flex-col justify-between'>
                <h4>Philomena 22</h4>
                <h5>clarrrr</h5>
                <h5>size: 200hh</h5>
                <p className="flex gap-4 py-6 items-center">
              <RiSubtractFill className="text-2xl cursor-pointer" />
              <span className="text-xl">1</span>
              <AiOutlinePlus className="text-xl cursor-pointer" />
            </p>
            </div>
        </div>
        <div className='flex justify-between flex-col items-center'>
            <span>x</span>
            <h4>$39.50</h4>
        </div>
    </div>
  )
}

export default CheckoutItem