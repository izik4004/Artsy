import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import { explore } from "../data/data";

const Explore = () => {
  return (
    <section className="my-20">
      {explore.map((item, index) => (
        <div key={index} className=" py-12 border cursor-pointer">
          <span className="mx-auto container flex items-center justify-between">
            <h3 className="text-2xl ">{item.name}</h3>
            <ImArrowRight2 size={40} color="#4693ED" className="font-bold text-[#4693ED]" />
          </span>
        </div>
      ))}
    </section>
  );
};

export default Explore;
