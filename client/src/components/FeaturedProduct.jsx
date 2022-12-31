import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Featured from "./Featured";
import { features } from "../data/data";
import Featured2 from "./Featured2";


const FeaturedProduct = () => {
  const { feature1, feature2, feature3 } = features;
  return (
    <section className="flex container mx-auto flex-col gap-10 my-16">
      <h2 className="text-3xl font-semibold">Featured Products</h2>
     
     <Featured
     title={feature1.title}
     subtitle={feature1.subtitle}
     image={feature1.image}
     id={feature1.id}
     />
       <Featured2
     title={feature2.title}
     subtitle={feature2.subtitle}
     image={feature2.image}
     id={feature2.id}
     />

<Featured
     title={feature3.title}
     subtitle={feature3.subtitle}
     image={feature3.image}
     id={feature1.id}
     />
     
    </section>
  );
};

export default FeaturedProduct;
