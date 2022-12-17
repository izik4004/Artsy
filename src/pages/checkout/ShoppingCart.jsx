import React from "react";
import Sum from "../../components/Sum";
import CheckoutItem from "./CheckoutItem";

const ShoppingCart = () => {
  return (
    <div>
      <CheckoutItem />
      <div className="flex py-10 flex-col lg:flex-row">
        <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col items-center lg:items-start">
          <button className="py-6 px-20 text-white bg-[#3341C1] lg:mt-0 mt-6">
            Proceed to checkout
          </button>
          <h5 className="text-blue px-20 py-6 underline">Continue shopping</h5>
        </div>
        <div className="lg:w-1/2 lg:order-2 order-1">
          <Sum />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
