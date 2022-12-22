import React from "react";

const Newsletter = () => {
  return (
    <div className="lg:border container lg:mx-auto lg:items-center lg:text-center py-10 md:mt-32 md:mb-10">
      <h3 className="text-2xl py-4">NEWSLETTER</h3>
      <p className="py-8 text-xl">
        Subscribe to get daily updates on new drops & exciting deals
      </p>
      <div className="gap-6 flex flex-col lg:block py-8">
        <input
          type="text"
          className="border p-4 text-center text-sm"
          placeholder="ENTER YOUR EMAIL"
        />
        <button className=" bg-black text-white text-sm p-4">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Newsletter;
