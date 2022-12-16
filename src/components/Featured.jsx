import React from "react";
import { features } from "../data/data";
import { BsArrowRight } from "react-icons/bs";

const Featured = ({ title, subtitle, image }) => {
  const { feature1, feature2, feature3 } = features;
  return (
    <div className="md:flex lg:flex-row md:flex-col gap-10 pt-8 border-t">
      <div className="lg:w-1/2 gap-10">
        <img src={image} alt=""  className="w-full"/>
      </div>
      <div className="lg:flex lg:flex-col justify-between lg:w-1/2">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="text-xl">{subtitle}</p>
        <div className="flex justify-between items-center">
          <div class="flex -space-x-2">
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
          </div>
          <span>64 major creators</span>
          <div className="border p-4 rounded-full">
            <BsArrowRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
