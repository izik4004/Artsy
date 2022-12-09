import React from "react";
import image from "../assets/item1.png";

const AuctionImageCard = () => {
  return (
    <div className="">
      <div className="flex">
        <img src={image} alt="" />
        {/* <span className="flex absolute   bg-red-500 ">6hr:40mins:15s</span> */}
      </div>
      <div className="flex absolute justify-center">
      <span className=" bg-red-500 ">6hr:40mins:15s</span>
      </div>
    </div>
  );
};

export default AuctionImageCard;
