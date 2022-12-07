import React from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "./CheckoutItem";

const PaymentCheckout = () => {
  return (
    <section className="container mx-auto">
      <div className="px-5 py-14 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap">
          <Link className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
            Shopping cart
          </Link>
          <Link className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            Shipping details
          </Link>
          <Link className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            Payment details
          </Link>
        </div>
      </div>

      <CheckoutItem />
      <div className="flex py-10">
        <div className="w-1/2">
          <button className="py-4 px-20 text-white bg-[#3341C1]">
            Proceed to checkout
          </button>
          <h5 className="text-blue px-20 py-6 underline">Continue shopping</h5>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex justify-between">
            <span>Products in cart:</span>
            <span>34678</span>
          </div>
          <div className="flex justify-between py-4">
            <span>Products in cart:</span>
            <span>34678</span>
          </div>
          <div className="flex justify-between">
            <span>Products in cart:</span>
            <span>34678</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentCheckout;
