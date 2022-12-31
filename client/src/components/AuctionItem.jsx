import React from 'react'
import {BsSuitHeart} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';

const AuctionItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className=' lg:w-1/3'>
       <div className="border rounded-lg flex flex-col py-4">
      <div className="flex justify-end px-4 ">
        <BsSuitHeart />
      </div>
      <div className="py-2 ">
        <img src={props.image} alt="" className="" />
      </div>
      <div className="flex justify-between">
        <h3 className='text-2xl px-4 font-bold py-2'>{props.name}</h3>
      </div>
    </div>
    <div>
      <p className='flex gap-4 py-4'>
        <span>Creator:</span>
        <span>{props.creator}</span>
      </p>
      <p className='flex gap-4 py-2'>
        <span>Date:</span>
        <span>{props.date}</span>
      </p>
      <p className='flex gap-4 py-4'>
        <span>Highest bid:</span>
        <span>{props.highestbid}</span>
      </p>
    </div>
    <div className='flex justify-between bg-gray-100 p-4'>
      <div className='flex flex-col gap-2 text-md'>
        <span>Current bid</span>
        <span>{props.currentbid}</span>
      </div>
      <button className='bg-blue px-12 text-white' onClick={() => navigate(`/livebid/${props.id}`)}>Place bid</button>
    </div>
    </div>
  )
}

export default AuctionItem