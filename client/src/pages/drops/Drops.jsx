import React from "react";
import DropItem from "../../components/DropItem";
import Newsletter from "../../components/Newsletter";
import {drop} from "../../data/drop"

const Drops = () => {
  console.log(drop)
  return (
    <section className="container mx-auto mt-[100px]">
      <span className="flex items-center flex-col">
        <h2 className="py-6 text-2xl font-semibold">Upcoming Drops</h2>
        <p className="py-6 text-xl">
          Turn on notifications so that no drops will miss you
        </p>
        <button className="border px-10 rounded-md py-2">Notify me</button>
      </span>
      <div className="py-10 mt-10">
      {drop.map((item, index) => (
         <DropItem 
         id={item.id}
         title={item.title}
         creator={item.creator}
         image={item.url}
         desc={item.desc}
         />
      ))}
     
      </div>
      <div className="hidden lg:flex flex-col gap-2 py-6  items-center ">
        <button className="py-4 px-20  border rounded-lg border-gray-700">
          See more
        </button>
      </div>
      <Newsletter />
    </section>
  );
};

export default Drops;
