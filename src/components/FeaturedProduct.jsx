import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Featured from "./Featured";
import { features } from "../data/data";

const FeaturedProduct = () => {
  const { feature1, feature2, feature3 } = features;
  return (
    <section className="flex container mx-auto flex-col gap-10 my-28">
      <h2 className="text-3xl">Featured Products</h2>
      <Featured>
        <div className="w-1/2">
          <img src={feature1.image} alt="" />
        </div>
        <div className="flex flex-col justify-between w-1/2">
          <h3 className="text-3xl font-semibold">{feature1.title}</h3>
          <p className="text-xl">{feature1.subtitle}</p>
          <div className="flex justify-between items-center">
            <div class="flex -space-x-2">
              <img
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                src={feature1.image}
                alt="Guy"
              />
            
              <img
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                src={feature1.image}
                alt="Max"
              />
              <img
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                src={feature1.image}
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
      </Featured>
      <Featured>
      <div className="w-1/2 order-2">
          <img src={feature2.image} alt="" />
        </div>
        <div className="flex flex-col justify-between w-1/2">
          <h3 className="text-3xl font-semibold">{feature2.title}</h3>
          <p className="text-xl">{feature2.subtitle}</p>
          <div className="flex justify-between items-center">
            <div class="flex -space-x-2">
              <img
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                src={feature2.image}
                alt="Guy"
              />
            
              <img
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                src={feature1.image}
                alt="Max"
              />
              <img
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                src={feature1.image}
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
      </Featured>
      <Featured className="">
      <div className="w-1/2">
          <img src={feature3.image} alt="" />
        </div>
        <div className="flex flex-col justify-between w-1/2">
          <h3 className="text-3xl font-semibold">{feature3.title}</h3>
          <p className="text-xl">{feature3.subtitle}</p>
          <div className="flex justify-between items-center">
            <div className="flex -space-x-2">
              <img
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                src={feature3.image}
                alt="Guy"
              />
            
              <img
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                src={feature1.image}
                alt="Max"
              />
              <img
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                src={feature1.image}
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
      </Featured>
    </section>
  );
};

export default FeaturedProduct;
