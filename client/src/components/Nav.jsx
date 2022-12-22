import React from "react";
import { NavLink } from "react-router-dom";
import { nav } from "../data/data";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";

const Nav = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  //   let activeClassName = "underline";
  return (
    <div className="flex justify-between py-6 items-center container mx-auto">
      <div className="flex text-2xl font-semibold">ARTSY.</div>
      <div className="flex gap-16 justify-between">
        {nav.map((item, index) => (
          <NavLink
            to={item.href}
            key={index}
            className="cursor-pointer"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="flex justify-between gap-6 align-middle cursor-pointer">
        <BiSearch size={18} />
        <HiOutlineShoppingCart size={18} />
        <IoMdNotificationsOutline size={18} />
      </div>
    </div>
  );
};

export default Nav;
