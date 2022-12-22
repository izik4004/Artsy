import React from 'react';
import {nav} from "../data/data"

const MobileNav = () => {
  return (
  <div className=' w-full h-full'>
    <ul className='h-1/2 flex flex-col justify-center
    px-6 gap-y-8'>
      {nav.map((item, index) => {
        const {href, name} = item
        return <li key={index}>
          <a className="link text-black text-xl" href={href}>{name}</a>
        </li>
      })}
      </ul></div>
  )
};

export default MobileNav;
