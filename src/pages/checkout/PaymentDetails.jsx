import React from "react";
import Sum from "../../components/Sum";

const PaymentDetails = () => {
  return (
    <div className="flex flex-col mb-20">
      <div className="flex justify-between mb-8">
        <span className="font-semibold">Payment Method</span>
        <span>Secure server</span>
      </div>
      <div className="flex gap-6 ">
        <div className="w-1/2 ">
          <div className="border p-6">
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
                className="border bg-grey rounded-md py-2 px-10 "
                placeholder="Please enter your key"
              />
            </span>

            <div className="flex  gap-4 py-4">
              <span className="flex flex-col gap-2 w-1/2">
                {" "}
                <label>Expiry date</label>
                <input
                  type="email"
                  name=""
                  className="border bg-grey rounded-md py-2 px-10 "
                  placeholder="MM/YY"
                />
              </span>

              <span className="flex flex-col gap-2 w-1/2">
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
          <span className="flex flex-col gap-2 py-6">
            <button className="py-4 px-20 text-white bg-[#3341C1]">
              Confirm
            </button>
          </span>
        </div>
        <div className="w-1/2">
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