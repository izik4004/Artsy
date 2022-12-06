import React from "react";
import { nav } from "../data/data";
import {BiSearch} from "react-icons/bi"
import {HiOutlineShoppingCart} from "react-icons/hi"
import {IoMdNotificationsOutline} from "react-icons/io"

const Nav = () => {
  return (
    <div className="flex justify-between py-6 items-center container mx-auto">
      <div className="flex text-2xl font-semibold">ARTSY.</div>
      <div className="flex gap-16 justify-between">
        {nav.map((item, index) => (
          <div key={index} className="cursor-pointer">{item.name}</div>
        ))}
      </div>
      <div className="flex justify-between gap-6 align-middle cursor-pointer">
        <BiSearch size={18}/>
        <HiOutlineShoppingCart size={18}/>
        <IoMdNotificationsOutline size={18}/>
      </div>
    </div>
  );
};

export default Nav;
