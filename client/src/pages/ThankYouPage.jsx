import React from "react";
import image1 from "../assets/thankyou.png";
import image2 from "../assets/thankyoustyl.png";
import cheers from "../assets/cheers.png";

const ThankYouPage = () => {
  const name = JSON.parse(localStorage.getItem("formObject"));
  return (
    <>
    <div className="hidden lg:block absolute z-20 -mt-20">
        <img src={image2} alt="" className="w-96"/>
      </div>
    <section className="container mx-auto mt-[100px]">
      <div className="flex flex-col place-items-center ">
        <img src={image1} alt="" className="w-2/5" />
        <h3 className="text-2xl">
          Hey <span className="font-bold text-2xl">{name.full_name}</span>, thank
          you for your purchase
        </h3>
        <div className="flex py-8 align-baseline items-baseline">
          <p className="text-lg">
            You are amazing. Cheers to being <span>ARTSY</span> 
          </p>
          <img src={cheers} alt="" className="w-10"/>
        </div>
      </div>
    </section>
    </>
  );
};

export default ThankYouPage;
