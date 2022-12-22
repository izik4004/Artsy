import React from 'react'
import image from "../../assets/marketplace.png"
import {RiSubtractFill} from "react-icons/ri"
import {AiOutlinePlus} from "react-icons/ai"
import {ImCancelCircle} from "react-icons/im"
import { CartContext } from "../../context/ShopContext";
import { useContext } from "react";
import { getProductData } from '../../data/data'

const CheckoutItem = ({id, quantity}) => {
  const cart = useContext(CartContext);
  const productData = getProductData(id);
  console.log("productdata", productData)
  return (
    <>
{/* {productData.map((item, index) => ( */}
  <div className='flex justify-between border-t border-b py-4'>
  <div className='lg:gap-10 gap-4 flex'>
      <div className=''>
          <img src={productData.image} alt="" className='h-[200px] w-[200px]'/>
      </div>
      <div className='flex flex-col justify-between '>
          <h4>{productData.name}</h4>
          <h5>category: {productData.category}</h5>
          <h5 className='hidden lg:block'>price: {productData.price}</h5>
          <p className="flex lg:gap-4 gap-2  items-center">
        <RiSubtractFill className="cursor-pointer" size={18} onClick={() => cart.decreaseCartQuantity(productData.id)}/>
        <span className="text-xl">{quantity}</span>
        <AiOutlinePlus className="cursor-pointer" size={18} onClick={() => cart.increaseCartQuantity(productData.id)}/>
      </p>
      </div>
  </div>
  <div className='flex justify-between flex-col items-center cursor-pointer'>
      <ImCancelCircle size={24} onClick={() => cart.decreaseCartQuantity(productData.id)}/>
      <h4>$39.50</h4>
  </div>
</div>
{/* ))} */}
  
    </>
  )
}

export default CheckoutItem