import React from "react";
import { hero } from "../data/data";

const Hero = () => {
  const { title, subtitle } = hero;
  return (
    <div className="flex flex-col  py-4 items-center mt-[120px] container mx-auto ">
      <h1 className="container lg:text-[80px] text-[30px] font-semibold text-center">{title}</h1>
      <p className="text-xl hidden lg:block text-justify w-2/3">{subtitle}</p>
    </div>
  );
};

export default Hero;
