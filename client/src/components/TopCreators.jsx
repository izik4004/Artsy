import React from "react";
import { topCreators } from "../data/data";
import FadingImage from "./FadingImage";

const TopCreators = () => {
  const { title, subtitle, specialty, image } = topCreators;
  return (
    <section className="bg-[#E2E2E2] lg:py-20 py-4  relative">
      <div className="container mx-auto flex justify-between ">
        <h2 className="lg:w-1/3 w-1/2 lg:text-4xl font-semibold tracking-wider">
          {title}
        </h2>
        <ul className="flex md:text-xs lg:block">
          {specialty.map((item, index) => (
            <li className="flex flex-col py-2 lg:text-2xl md:text-sm" key={index}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <p className="container mb-6 lg:pr-20 mx-auto lg:py-14 text-sm lg:text-xl tracking-wider lg:leading-9">
        {subtitle}
      </p>
      <FadingImage/>
     
    </section>
  );
};

export default TopCreators;
