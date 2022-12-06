import React from "react";
import {BsArrowRight} from "react-icons/bs"
import Featured from "./Featured";
import { features } from "../data/data";

const FeaturedProduct = () => {
  const { feature1, feature2, feature3 } = features;
  return (
    <section className="flex container mx-auto flex-col gap-10 py-10">
        <h2 className="text-3xl">Featured Products</h2>
      <Featured>
        <img src={feature1.image} alt="" />
        <div className="flex flex-col justify-between">
          <h3 className="text-3xl font-semibold">{feature1.title}</h3>
          <p className="text-xl">{feature1.subtitle}</p>
          <div className="flex justify-between items-center">
            <div>eeee</div>
            <span>64 major creators</span>
            <div className="border p-4 rounded-full">
            <BsArrowRight size={24}/>
            </div>
          </div>
        </div>
      </Featured>
      <Featured>
        <img src={feature2.image} alt="" className="order-2" />
        <div className="flex flex-col justify-between">
          <h3>{feature2.title}</h3>
          <p className="">{feature2.subtitle}</p>
          <div>mmemme</div>
        </div>
      </Featured>
      <Featured className="">
        <img src={feature3.image} alt="" />
        <div className="flex flex-col justify-between">
          <h3>{feature3.title}</h3>
          <p>{feature3.subtitle}</p>
          <div>mmemme</div>
        </div>
      </Featured>
    </section>
  );
};

export default FeaturedProduct;
