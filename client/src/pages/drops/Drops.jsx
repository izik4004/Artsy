import React from "react";
// import DropItem from "../../components/DropItem";
import Me from "../../components/Me";
import Newsletter from "../../components/Newsletter";

const Drops = () => {
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
        <Me/>
      {/* <DropItem /> */}
      </div>
      <Newsletter />
    </section>
  );
};

export default Drops;
