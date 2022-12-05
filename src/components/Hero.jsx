import React from "react";
import { hero } from "../data/data";

const Hero = () => {
  return (
    <section>
      {hero.map((item, index) => (
        <div>
          <h1>{item.title}</h1>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </section>
  );
};

export default Hero;
