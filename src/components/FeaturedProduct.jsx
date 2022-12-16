import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Featured from "./Featured";
import { features } from "../data/data";

const FeaturedProduct = () => {
  const { feature1, feature2, feature3 } = features;
  return (
    <section className="flex container mx-auto flex-col gap-10 my-28">
      <h2 className="text-3xl">Featured Products</h2>
     
     <Featured
     title={feature1.title}
     subtitle={feature1.subtitle}
     image={feature1.image}
     />
       <Featured
     title={feature2.title}
     subtitle={feature2.subtitle}
     image={feature2.image}
     />

<Featured
     title={feature3.title}
     subtitle={feature3.subtitle}
     image={feature3.image}
     />
     
    </section>
  );
};

export default FeaturedProduct;
