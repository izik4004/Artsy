import React from "react";
import {category, price, products} from "../../data/data"
import { ImEqualizer } from "react-icons/im";
import { RxCaretUp, RxCaretDown } from "react-icons/rx";
import MarketItem from "../../components/MarketItem";

const MarketPlace = () => {
  return (
    <section className="container mx-auto flex flex-col gap-10  py-20 mb-20">
      <div className="flex gap-14 items-center">
        <div className="lg:w-1/5 py-4 hidden lg:block">
          <input type="text" placeholder="Search" className="border p-2 bg-gray-100 rounded-lg"/>
        </div>
        <div className="lg:w-4/5 px-4 w-full">
          <div className="shadow-lg py-4 px-4 flex justify-between ">
            {/* desktop view for filter*/}
            <div className="hidden lg:block">
              <h4 className="">See 1-6 of 15 results</h4>
            </div>
            {/* mobile view for filter */}
            <span className="block md:hidden">
            <select className=" py-2 px-2  ">buy
              <option value="Orange" className="py-4">Filter by</option>
              <option value="Radish">Radish</option>
              <option value="Cherry">Cherry</option>
            </select>
            </span>

            <div className="">
            <select className="lg:border  lg:rounded-md py-2 px-4  ">buy
              <option value="Orange" className="py-4">Sort by</option>
              <option value="Radish">Radish</option>
              <option value="Cherry">Cherry</option>
            </select>
          </div>
          </div>
        </div>
      </div>

      <div className="flex lg:py-8 gap-14">
        <div className="lg:w-1/5 hidden lg:block">
          <div className="flex gap-4 font-semibold  border-b-4 pb-4">
            <ImEqualizer size={24} />
            <span className="text-xl">Filter</span>
          </div>
          <div className="py-8 flex justify-between items-center">
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
        <div className="lg:w-4/5">
          <div className="flex flex-wrap">
            {products.map((item) => (
              <div className="lg:w-1/3 p-4 w-full">
                <MarketItem
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                />
                </div>
            ))}
              
          </div>
         
        </div>

       
      </div>
      <div className="flex flex-col gap-2 py-6  items-center ">
            <button className="py-4 px-20  border rounded-lg border-gray-700">
              See more
            </button>
          </div>
    </section>
  );
};

export default MarketPlace;
