import React from "react";
import Sum from "../../components/Sum";
import { Link } from "react-router-dom";

const PaymentDetails = () => {
  return (
    <div className=" flex flex-col mb-20">
      <div className="flex justify-between lg:mb-8">
        <span className="font-semibold hidden lg:block">Payment Method</span>
        <span>Secure server</span>
      </div>
      <div className="flex gap-6 ">
        <div className="lg:w-1/2 w-full">
          <div className="lg:border py-6 lg:px-4">
            <div className="py-4 flex gap-4 items-center">
              <input type="checkbox" checked="checked" name="Select your wallet" id="" />
              <span className="font-semibold">Select your wallet</span>
            </div>
            <span className="py-4">
              Connect with one of our available wallet providers or add connect
              a new wallet
            </span>
            <span className="flex flex-col gap-2 py-4">
              {" "}
              <label>Wallet</label>
              <input
                type="email"
                name=""
                className="border bg-grey rounded-md py-2 px-10 "
                placeholder=""
              />
            </span>

            <span className="flex flex-col gap-2 py-4">
              {" "}
              <label>Key</label>
              <input
                type="email"
                name=""
                className="border bg-grey rounded-md py-2 px-4 "
                placeholder="Please enter your key"
              />
            </span>

            <div className="flex  gap-4 py-4 flex-col lg:flex-row">
              <span className="py-2 flex flex-col gap-2 lg:w-1/2">
                {" "}
                <label>Expiry date</label>
                <input
                  type="email"
                  name=""
                  className="border bg-grey rounded-md py-2 px-4"
                  placeholder="MM/YY"
                />
              </span>

              <span className="flex py-2 flex-col gap-2 lg:w-1/2">
                {" "}
                <label>CVV</label>
                <input
                  type="email"
                  name=""
                  className="border bg-grey rounded-md py-2 px-10 "
                  placeholder="......."
                />
              </span>
            </div>
            <div className="gap-4 py-4 flex items-center">
              <input type="checkbox" name="Select your wallet" id="" />
              <span className="">
                Save wallet details & information for future transactions
              </span>
            </div>
          </div>
          <span className="flex flex-col gap-2 py-6 ">
            <button className="py-6 px-20 text-white bg-[#3341C1]">
              Confirm
            </button>
            <Link to="/marketplace" className="text-blue text-center px-20 py-6 underline">Continue shopping</Link>
          </span>
        </div>

        
        <div className="lg:w-1/2 hidden lg:block">
          <h3 className="py-4 font-semibold">Payment Summary</h3>
          <div className=" py-8 border-t border-b">
            <div className="flex justify-between">
              <p>Metamask Wallet:</p>
              <span>0228thjknjk8</span>
            </div>
            <div className="py-4">Actively linked to Yaba, Lagos Nigeria.</div>
          </div>
          <p className="py-10 border-b gap-6 flex">
            <span className="w-1/2">Expected arrival date:</span>
            <span>Between 22nd Septemer and 26th September 2022</span>
    
          </p>
          <div className="py-8">
            <Sum />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
