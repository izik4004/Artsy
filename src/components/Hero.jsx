import React from "react";
import { hero } from "../data/data";

const Hero = () => {
  const { title, subtitle } = hero;
  return (
    <div className="flex flex-col items-center">
      <h1>{title}</h1>
      <p className="">{subtitle}</p>
    </div>
  );
};

export default Hero;
