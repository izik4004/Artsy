import React from "react";
import Sum from "../../components/Sum";
import CheckoutItem from "./CheckoutItem";

const ShoppingCart = () => {
  return (
    <div>
      <CheckoutItem />
      <div className="flex py-10">
        <div className="w-1/2">
          <button className="py-4 px-20 text-white bg-[#3341C1]">
            Proceed to checkout
          </button>
          <h5 className="text-blue px-20 py-6 underline">Continue shopping</h5>
        </div>
        <div className="w-1/2">
          <Sum />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
