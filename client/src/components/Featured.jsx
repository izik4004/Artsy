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
       <div class="lg:w-1/2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-84">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image} alt="" />
      </div>
      <div class=" lg:hidden absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="lg:hidden absolute inset-3 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="lg:hidden mb-3 py-8 text-3xl font-bold  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{title}</h1>
        <div className="border p-4 rounded-full ">
            <BsArrowRight size={24}  className="text-white"/>
          </div>
        
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
