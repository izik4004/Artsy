import React from "react";
import {category, price} from "../../data/data"
import { ImEqualizer } from "react-icons/im";
import { RxCaretUp, RxCaretDown } from "react-icons/rx";

const MarketPlace = () => {
  return (
    <section className="container mx-auto flex flex-col gap-10  py-20 mb-20">
      <div className="flex gap-14">
        <div className="w-1/4 py-4">
          <input type="text" placeholder="Search" />
        </div>
        <div className="w-3/4">
          <div className="shadow-lg py-4 px-4">
            <h4>See 1-6 of 15 results</h4>
          </div>
        </div>
      </div>

      <div className="flex py-8 gap-14">
        <div className="w-1/4">
          <div className="flex gap-2 font-semibold  border-b-4 pb-4">
            <ImEqualizer size={24} />
            <span >Filter</span>
          </div>
          <div className="py-6 flex justify-between items-center">
            <span className="font-semibold">By category</span>
            <RxCaretUp size={24} />
            {/* <RxCaretDown/> */}
          </div>
          <div>
            {category.map((item, index) => (
                 <span className="flex gap-4 pb-4">
                 <input type="checkbox" />
                 <label class="">{item}</label>
               </span>
            ))}            
          </div>

          <div className="py-6 flex justify-between items-center">
            <span className="font-semibold">By price</span>
            <RxCaretUp size={24} />
            {/* <RxCaretDown/> */}
          </div>
          <span>$20000 - $50000</span>

          <div className="py-6 flex justify-between items-center">
            <span className="font-semibold">By artist</span>
            <RxCaretUp size={24} />
            {/* <RxCaretDown/> */}
          </div>
          {price.map((item, index) => (
              <span className="flex gap-4 pb-4">
              <input type="radio" />
              <label class="">{item}</label>
            </span>
          ))}
          <div className="py-6 flex justify-between items-center">
            <span className="font-semibold">Collection year</span>
            <RxCaretUp size={24} />
            {/* <RxCaretDown/> */}
          </div>
        </div>
        <div className="w-3/4">nnnn</div>
      </div>
    </section>
  );
};

export default MarketPlace;
