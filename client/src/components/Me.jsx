import React from "react";
import image from "../assets/item9.png";
import { features } from "../data/data";

const Me = () => {
  const { feature1, feature2, feature3 } = features;
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5  mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex relative justify-center">
            <img
              alt="ecommerce"
              className="rounded-lg"
              src={feature1.image}
            />
            <div className="absolute w-3/4 bottom-4  border border-1 px-6 py-2 bg-opacity-20 rounded-lg bg-white  text-white text-xl ">
    
              <p className="text-sm">Time Remaining</p>
              <span className="flex items-center justify-between">
                <p className="text-base mt-2">06 hrs:45 min:22s</p>
                <button className="text-sm bg-blue text-white px-6 rounded-xl py-0.5">
                  Join
                </button>
              </span>
            </div>
          </div>
          <div className="lg:w-2/5 w-full  mt-6 lg:mt-0">
            <span className="w-1/2 py-1 px-10 text-md bg-blue text-white rounded-lg hidden lg:block">
              UPCOMING
            </span>
            <h2 className="text-sm title-font text-gray-500 tracking-widest py-4">
              November 21 at 11am WAT
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium py-4">
              Eyo: Eko for Show
            </h1>
            <p className="leading-relaxed">
              Fam locavore kickstarole raw denim forage brooklyn. Everyday carry
              +1 seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Creator:</span>
                <span>Aliya Minal</span>
              </div>
            </div>
            <div className="flex">
              <a href="#/">Get notified</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
