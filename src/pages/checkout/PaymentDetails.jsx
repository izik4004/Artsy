import React from "react";

const PaymentDetails = () => {
  return (
    <div className="flex flex-col">
        <div className="flex justify-between mb-8">
            <span>Payment Method</span>
            <span>Secure server</span>
        </div>
      <div className="flex gap-6 ">
        <div className="w-1/2 border p-6">
          <span className="flex flex-col gap-2">
            {" "}
            <label>Wallet</label>
            <input
              type="email"
              name=""
              className="border bg-grey rounded-md py-2 px-10 "
              placeholder=""
            />
          </span>

          <span className="flex flex-col gap-2">
            {" "}
            <label>Key</label>
            <input
              type="email"
              name=""
              className="border bg-grey rounded-md py-2 px-10 "
              placeholder="Please enter your key"
            />
          </span>
        
          <div className="flex  gap-4">
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
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default PaymentDetails;
