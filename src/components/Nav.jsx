import React from 'react'
import {nav} from "../data/data"

const Nav = () => {
  return (
    <div className='flex justify-between my-14 bg-red-500 container mx-auto'>
        <div>ARTSY.</div>
        <div className='flex gap-16 justify-between'>
        {nav.map((item, index) => (
            <div key={index}>{item.name}</div>
        ))}
        </div>
        <div></div>
    </div>
  )
}

export default Nav