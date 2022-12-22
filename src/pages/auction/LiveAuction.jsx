import React from "react";
import image from "../../assets/auction2.png";
import { FaArrowRight } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";

const LiveAuction = () => {
  return (
    <section className="mt-[180px] container mx-auto">
      <div className="lg:flex border">
        <div className="relative">
          <img src={image} alt="" className="h=[700px]" />
        </div>
        <div className="lg:flex-start lg:border-l-2">
          <div className="px-4">
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
            <span className="pt-4">Creator: jkkljlk</span>
            <div className="flex gap-6 py-2">
              <div className="flex items-center">
                <input
                  type="email"
                  name=""
                  className="border rounded-xl py-1 px-4"
                  placeholder="Place a bid..."
                />
                <BsSuitHeart size={18} color="red" className="-ml-8" />
              </div>
              <div className="flex border rounded-full p-2 justify-items-center">
                <BsSuitHeart size={18} color="red" />
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
