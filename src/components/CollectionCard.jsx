import React from 'react'
import {BsSuitHeart} from "react-icons/bs"
import image1 from "../assets/Collection1.png"
const CollectionCard = () => {
  return (
    <div className='border flex flex-col p-4 w-1/3'>
        <div className='flex justify-end'>
        <BsSuitHeart />
        </div>
        <div className='py-2 '>
        <img src={image1} alt="" className=''/>
        </div>
        <div className='flex justify-between'>
            <h5>Sassy</h5>
            <span>3.20</span>
        </div>
    </div>
  )
}

export default CollectionCard