import React from "react";
import { nav } from "../data/data";
import {BiSearch} from "react-icons/bi"
import {HiOutlineShoppingCart} from "react-icons/hi"
import {IoMdNotificationsOutline} from "react-icons/io"

const Nav = () => {
  return (
    <div className="flex justify-between items-center my-10 bg-red-500 container mx-auto">
      <div>ARTSY.</div>
      <div className="flex gap-16 justify-between">
        {nav.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
      <div className="flex justify-between gap-6 align-middle">
        <BiSearch size={24}/>
        <HiOutlineShoppingCart size={24}/>
        <IoMdNotificationsOutline size={24}/>
      </div>
    </div>
  );
};

export default Nav;
