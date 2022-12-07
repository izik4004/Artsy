import { useState } from "react";
import Sum from "../../components/Sum";
import CheckoutItem from "./CheckoutItem";
import ShippingDetails from "./ShippingDetails";

const PaymentCheckout = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <section className="container mx-auto">
      <div className="px-5 py-14 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap">
          <a
            href="#/"
            onClick={() => setOpenTab(1)}
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start 
          ${
            openTab === 1
              ? " border-b-2 border-gray-500 font-medium"
              : "border-b hover:border-gray-500"
          } inline-flex items-center leading-none tracking-wider`}
          >
            Shopping cart
          </a>

          <a
            href="#/"
            onClick={() => setOpenTab(2)}
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start 
          ${
            openTab === 2
              ? " border-b-2 border-gray-500 font-medium"
              : "border-b hover:border-gray-500"
          } inline-flex items-center leading-none tracking-wider`}
          >
            Shipping details
          </a>

          <a
            href="#/"
            onClick={() => setOpenTab(2)}
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start 
          ${
            openTab === 3
              ? " border-b-2 border-gray-500 font-medium"
              : "border-b hover:border-gray-500"
          } inline-flex items-center leading-none tracking-wider`}
          >
            Payment details
          </a>
        </div>
      </div>

      {openTab === 1 && (
        <>
          <CheckoutItem />
          <div className="flex py-10">
            <div className="w-1/2">
              <button className="py-4 px-20 text-white bg-[#3341C1]">
                Proceed to checkout
              </button>
              <h5 className="text-blue px-20 py-6 underline">
                Continue shopping
              </h5>
            </div>
            <div className="w-1/2">
            <Sum/>
            </div>
            
          </div>
        </>
      )}

      {openTab === 2 && 
        <ShippingDetails/>
      }
    </section>
  );
};

export default PaymentCheckout;
