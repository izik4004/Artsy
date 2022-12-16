import React from "react";
import image from "../assets/item1.png";

const AuctionImageCard = () => {
  return (
    <div className="relative ">
      <div className="w-1/3 h-1/2">
        <img src={image} alt="" className="w-1/2  h-1/2"/>
        <div className=" absolute bottom-6 px-6 text-white py-2 text-center  flex justify-center bg-white bg-opacity-30 rounded-md  transform ">
            <h4 className="text-white">6hr:40mins: 15s</h4>
        </div>
        </div>
    </div>
  );
};

export default AuctionImageCard;
