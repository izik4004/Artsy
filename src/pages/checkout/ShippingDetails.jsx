import React from "react";
import { Link } from "react-router-dom";
import Sum from "../../components/Sum";
import CheckoutItem from "./CheckoutItem";

const ShippingDetails = ({cart}) => {
  return (
    <section className="container mx-auto gap-12 flex leading-none tracking-wider mb-20">
      <div className="lg:w-1/2 w-full">
        <form>
          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>Your email</label>
            <input
              type="email"
              name=""
              className="border bg-grey rounded-md py-4 px-4"
              placeholder="email"
            />
          </span>
          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>Your full name</label>
            <input
              type="email"
              name=""
              className="border bg-grey rounded-md py-4 px-4"
              placeholder="email"
            />
          </span>
          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>Choose a wallet</label>
            <select className="border bg-grey rounded-md py-4 px-4">
              <option value="Orange" className="py-4"></option>
              <option value="Radish">Radish</option>
              <option value="Cherry">Cherry</option>
            </select>
          </span>
          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>City</label>
            <select className="border bg-grey rounded-md py-4 px-4">
              <option value="Orange" className="py-4"></option>
              <option value="Radish">Radish</option>
              <option value="Cherry">Cherry</option>
            </select>
          </span>

          <div className="flex flex-col lg:flex-row gap-4">
            <span className="flex flex-col gap-2 py-4 lg:w-1/2">
              {" "}
              <label>Country</label>
              <select className="border bg-grey rounded-md py-4 px-4 ">
                <option value="Orange" className="py-4"></option>
                <option value="Radish">Radish</option>
                <option value="Cherry">Cherry</option>
              </select>
            </span>

            <span className="flex flex-col gap-2 py-4 lg:w-1/2">
              {" "}
              <label>Postal code</label>
              <select className="border bg-grey rounded-md py-4 px-4 ">
                <option value="Orange"></option>
                <option value="Radish">Radish</option>
                <option value="Cherry">Cherry</option>
              </select>
            </span>
          </div>

          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>Phone number</label>
            <input
              type="email"
              name=""
              className="border bg-grey rounded-md py-4 px-4"
              placeholder="email"
            />
          </span>

          <span className="flex flex-col gap-2 py-4">
            <button className="py-6 px-20 text-white bg-[#3341C1]">
              Proceed to payment
            </button>
            <Link to="/marketplace" className="text-blue px-20 py-6 underline">Continue shopping</Link>
          </span>
        </form>
      </div>
      <div className="lg:w-1/2 hidden lg:block">
      {cart.items.map((item, index) => (
          <CheckoutItem 
          key={index}
          id={item.id}
          quantity={item.quantity}
          />
      ))}
      
        <div className="py-10">
          <Sum />
        </div>
      </div>
    </section>
  );
};

export default ShippingDetails;
