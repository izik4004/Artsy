import React from "react";

const Newsletter = () => {
  return (
    <div className="border container mx-auto items-center text-center py-10 my-10">
      <h3 className="text-2xl">NEWSLETTER</h3>
      <p className="py-4 text-xl">Subscribe to get daily updates on new drops & exciting deals</p>
      <div className="gap-6">
        <input type="text" className="border p-2 text-center text-sm" placeholder="ENTER YOUR EMAIL"/>
        <button className="bg-black text-white text-sm p-2">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Newsletter;
