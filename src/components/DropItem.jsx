import React from 'react'
import image from "../assets/item2.png";

const DropItem = () => {
  return (
    <div className='flex gap-10'>
         <div className="w-1/2">
          <img src={image} alt="" className='w-full h-1/2'/>
        </div>
        <div className="flex flex-col justify-between w-1/2 h-1/2">
            <button className='bg-blue py-2 px-10'>Upcoming</button>
            <span>November 21 at 11am WAT</span>
          <h3 className="text-3xl font-semibold">Eyo: Eko for Show</h3>
          <p className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis autem repudiandae, tempora ex, quis illo obcaecati esse tempore quisquam eos 
          eaque rerum sit assumenda saepe, praesentium omnis perspiciatis animi ab.</p>
          <p>
            <span>Creator:</span>
            <span>Aliyu Minal</span>
          </p>
          Get notified
        </div>
    </div>
  )
}

export default DropItem