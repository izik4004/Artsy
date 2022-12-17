import React from "react";
import image from "../assets/item1.png";

const AuctionImageCard = () => {
  return (
    <div className="relative ">
      <div className="lg:w-1/3 ">
        <img src={image} alt="" className=""/>
        <div className=" mx-10 absolute border bottom-20 px-6 text-white py-2 text-center  flex justify-center bg-white bg-opacity-5 rounded-lg">
            <h4 className="text-white">6hr:40mins: 15s</h4>
        </div>
        </div>
        <div className="py-4 text-center">
          <button type="button" className="bg-black pb-2  w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        </div>
        {/* <div class="flex   space-x-3 -translate-x-1/2 ">
            <button type="button" className="w-3 h-3 bg-red-500 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0">uu</button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div> */}
    </div>
  );
};

export default AuctionImageCard;
