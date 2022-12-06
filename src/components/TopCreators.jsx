import React from "react";
import { topCreators } from "../data/data";

const TopCreators = () => {
  const { title, subtitle, specialty, image } = topCreators;
  return (
    <section className="bg-[#E2E2E2] py-20 relative">
      <div className="container mx-auto flex justify-between">
        <h2 className="w-1/3 text-4xl font-semibold tracking-wider">{title}</h2>
        <div className="">
          {specialty.map((item, index) => (
            <div className="flex flex-col py-2 text-2xl">{item.name}</div>
          ))}
        </div>
      </div>
      <p className="container mb-6 pr-20 mx-auto py-14 text-xl tracking-wider leading-9">
        {subtitle}
      </p>
      <img
        src={image}
        alt=""
        className="absolute top-32 left-1/2 right-0 w-1/3"
      />
    </section>
  );
};

export default TopCreators;
