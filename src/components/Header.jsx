import { useState, useEffect } from "react";
// import { header } from "../data";
import { NavLink } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { nav } from "../data/data";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="">
      <div className="z-10 bg-white shadow-md w-full fixed top-0 left-0">
        <div className="container mx-auto flex items-center justify-between bg-white py-6 md:px-10 ">
          {/* nav toggle on mobile view */}
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl  cursor-pointer lg:hidden"
          >
            {open ? (
              <MdClose className="text-3xl " />
            ) : (
              <FcMenu className="text-3xl" />
            )}
          </div>
          {/* end of toggle */}

          <div className="font-bold text-2xl cursor-pointer">ARSTY.</div>

          <div>
            <ul
              className={`container mx-auto md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px]"
              }`}
            >
              {nav.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                  <NavLink
                    to={link.href}
                    key={link}
                    className="text-gray-800 hover:text-gray-400  duration-500"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <div className="lg:hidden cursor-pointer text-white shadow-lg rounded-full p-4 float-right bg-blue ">
                <FiMessageSquare size={30} />
              </div>
            </ul>
          </div>
          <div className="flex justify-between lg:gap-6 gap-4 align-middle cursor-pointer">
            <BiSearch size={18} />
            <HiOutlineShoppingCart size={18} />
            <IoMdNotificationsOutline size={18} className="hidden lg:block" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
