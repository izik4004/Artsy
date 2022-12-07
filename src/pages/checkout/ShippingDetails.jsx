import React from "react";
import Sum from "../../components/Sum";
import CheckoutItem from "./CheckoutItem";

const ShippingDetails = () => {
  return (
    <section className="container mx-auto flex leading-none tracking-wider mb-20">
      <div className="w-1/2">
        <form>
          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>Your email</label>
            <input
              type="email"
              name=""
              className="border bg-grey rounded-md py-2 px-10 w-3/4 "
              placeholder="email"
            />
          </span>
          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>Your full name</label>
            <input
              type="email"
              name=""
              className="border bg-grey rounded-md py-2 px-10 w-3/4 "
              placeholder="email"
            />
          </span>
          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>Choose a wallet</label>
            <select className="border bg-grey rounded-md py-2 px-4 w-3/4 ">
              <option value="Orange" className="py-4"></option>
              <option value="Radish">Radish</option>
              <option value="Cherry">Cherry</option>
            </select>
          </span>
          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>City</label>
            <select className="border bg-grey rounded-md py-2 px-4 w-3/4 ">
              <option value="Orange" className="py-4"></option>
              <option value="Radish">Radish</option>
              <option value="Cherry">Cherry</option>
            </select>
          </span>

          <div className="flex w-3/4  gap-4">
            <span className="flex flex-col gap-2 py-4 w-1/2">
              {" "}
              <label>Country</label>
              <select className="border bg-grey rounded-md py-2 px-4 ">
                <option value="Orange" className="py-4"></option>
                <option value="Radish">Radish</option>
                <option value="Cherry">Cherry</option>
              </select>
            </span>

            <span className="flex flex-col gap-2 py-4 w-1/2">
              {" "}
              <label>Postal code</label>
              <select className="border bg-grey rounded-md py-2 px-4 ">
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
              className="border bg-grey rounded-md py-2 px-10 w-3/4 "
              placeholder="email"
            />
          </span>

          <span className="flex flex-col gap-2 py-4 w-3/4">
            <button className="py-4 px-20 text-white bg-[#3341C1]">
              Proceed to payment
            </button>
          </span>
        </form>
      </div>
      <div className="w-1/2">
        <CheckoutItem />
        <div className="py-10">
          <Sum />
        </div>
      </div>
    </section>
  );
};

export default ShippingDetails;
