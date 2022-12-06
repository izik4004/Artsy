import React from 'react'
import {topCreators} from "../data/data"

const TopCreators = () => {
    const {title, subtitle, specialty, image } = topCreators
  return (
    <>
    <section className='bg-[#E2E2E2] py-20 relative'>
        <div className='container mx-auto flex justify-between'>
            <div className='w-1/3 text-4xl font-semibold '>{title}</div>
            <div className=''>
            {specialty.map((item, index) => (
                <div className='flex flex-col py-2 text-2xl'>{item.name}</div>
            ))}
            </div>
            
        </div>
        <p className='container mx-auto py-10 text-xl tracking-wider leading-9'>{subtitle}</p>
       
    </section>
    <div className=' -mt-40 left-80 z-10 bottom-4'>
            <img src={image} alt=""  />
        </div>
    
    </>
  )
}

export default TopCreators