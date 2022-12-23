import React from "react";
import { useNavigate } from "react-router-dom";

const AuctionImageCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="relative ">
      <div
        className="gap-4 flex justify-center cursor-pointer"
        onClick={() => navigate(`/livebid/${props.id}`)}
      >
        <img
          src={props.image}
          alt=""
          className="h-[300px] w-[400px] rounded-xl"
        />
        <div className="w-3/4 absolute border bottom-6 px-6 text-white py-2 text-center  flex justify-center bg-white bg-opacity-20 rounded-lg">
          <h4 className="text-white">{props.id}</h4>
        </div>
      </div>
    </div>
  );
};

export default AuctionImageCard;
