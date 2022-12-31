import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AuctionImageCard = (props) => {
  const navigate = useNavigate();
  return (
    <motion.div className="relative ">
      <motion.div
        className="gap-4 flex justify-center cursor-pointer"
        onClick={() => navigate(`/livebid/${props.id}`)}
      >
        <motion.img
          src={props.image}
          alt=""
          className="h-[300px] w-[400px] rounded-xl"
        />
        <motion.div className="w-3/4 absolute border bottom-6 px-6 text-white py-2 text-center  flex justify-center bg-white bg-opacity-20 rounded-lg">
          <h4 className="text-white">{props.id}</h4>
          <p>6hr: 40mins: 15s</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AuctionImageCard;
