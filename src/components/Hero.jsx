import React from "react";
import { hero } from "../data/data";

const Hero = () => {
  const { title, subtitle } = hero;
  return (
    <div className="flex flex-col  py-4 items-center container mx-auto ">
      <h1 className="lg:text-[80px] md:text-[32px] font-semibold text-center">{title}</h1>
      <p className="text-xl text-justify w-2/3">{subtitle}</p>
    </div>
  );
};

export default Hero;
