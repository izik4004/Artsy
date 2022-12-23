import React from "react";
import image from "../assets/item1.png";

const AuctionImageCard = (props) => {
  return (
    <div className="relative">
      <div className="gap-4">
        <img src={props.image} alt="" className=""/>
        <div className=" mx-10 absolute border bottom-20 px-6 text-white py-2 text-center  flex justify-center bg-white bg-opacity-5 rounded-lg">
            <h4 className="text-white">{props.id}</h4>
        </div>
        </div>
    </div>
  );
};

export default AuctionImageCard;
