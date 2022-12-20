import React from "react";
import { features } from "../data/data";
import { BsArrowRight } from "react-icons/bs";
import {FaArrowRight} from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const Featured = ({ title, subtitle, image, id }) => {
  // const navigate = useNavigate();
  const { feature1} = features;
  return (
    <div className="md:flex lg:flex-row md:flex-col gap-10  border-t lg:py-6"
    // onClick={navigate(`/products/${id}`)}
    >
      <div className="lg:w-1/2 gap-10 relative">
        <img src={image} alt=""  className="w-full"/>
        <div>
        <span className="absolute lg:hidden bottom-10">
        <h3 className="text-3xl font-semibold text-white px-4">{title}</h3>
        <div className="text-white font-extrabold float-right mt-6 border p-4 rounded-full  lg:hidden">
            <FaArrowRight size={32} />
          </div>
          </span>
        </div>
      </div>
      <div className="lg:flex lg:flex-col justify-between lg:w-1/2">
        <h3 className="hidden lg:block text-3xl font-semibold">{title}</h3>
        <p className="lg:text-xl text-sm mt-4 lg:mt-0">{subtitle}</p>
        <div className="flex justify-between items-center ">
          <div className="flex -space-x-2 items-center border-b lg:border-b-0 py-4">
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src={image}
              alt="Guy"
            />

            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src={image}
              alt="Max"
            />
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src={image}
              alt="Charles"
            />
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src={feature1.image}
              alt="Jade"
            />
              <span className="pl-10">64 major creators</span>
          </div>
        
          <div className="border p-4 rounded-full hidden lg:block">
            <BsArrowRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
