import React from "react";
import image from "../../assets/auction2.png";
import { FaArrowRight } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import {RiSendPlaneFill} from "react-icons/ri"

const LiveAuction = () => {
  return (
    <section className="mt-[180px] container mx-auto">
      <div className="lg:flex border">
        <div className="relative">
          <img src={image} alt="" className="h=[700px]" />
        </div>
        <div className="lg:flex-start lg:border-l-2">
          <div className="px-6">
            <div className="flex gap-4 items-center py-2">
              <img
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                src={image}
                alt="Charles"
              />
              <div className="">
                <h3 className="text-lg">Opeyemi Thompson</h3>
                <p className="text-base py-1">$5000</p>
              </div>
            </div>
            <span className="pt-4 text-base">Creator: jkkljlk</span>
            <div className="flex gap-6 py-2">
              <div className="flex items-center">
                <input
                  type="email"
                  name=""
                  className="border rounded-xl py-1 px-4"
                  placeholder="Place a bid..."
                />
                <RiSendPlaneFill size={18} className="-ml-8 cursor-pointer" />
              </div>
              <div className="flex border rounded-full p-2 justify-items-center">
                <AiFillHeart size={18} color="red" className="cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 flex items-center gap-6">
        <h3 className="text-xl">See upcoming drops</h3>
        <span className="border p-3 rounded-full">
          <FaArrowRight size={22} />
        </span>
      </div>
    </section>
  );
};

export default LiveAuction;
