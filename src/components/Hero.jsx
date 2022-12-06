import React from "react";
import { hero } from "../data/data";

const Hero = () => {
  const { title, subtitle } = hero;
  return (
    <div className="flex flex-col py-4 items-center container mx-auto ">
      <h1 className="text-[80px]  font-semibold text-center">{title}</h1>
      <p className=" text-[24px] leading-10 text-justify">{subtitle}</p>
    </div>
  );
};

export default Hero;
