import { useState } from "react";
import Sum from "../../components/Sum";
import CheckoutItem from "./CheckoutItem";
import PaymentDetails from "./PaymentDetails";
import ShippingDetails from "./ShippingDetails";
import ShoppingCart from "./ShoppingCart";

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
            onClick={() => setOpenTab(3)}
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
        <ShoppingCart/>
      )}

      {openTab === 2 && 
        <ShippingDetails/>
      }
       {openTab === 3 && 
        <PaymentDetails/>
      }
    </section>
  );
};

export default PaymentCheckout;
