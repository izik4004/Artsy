import { useState } from "react";
import PaymentDetails from "./PaymentDetails";
import ShippingDetails from "./ShippingDetails";
import ShoppingCart from "./ShoppingCart";
import { CartContext } from "../../context/ShopContext";
import { useContext } from "react";
import Breadcrumb from "../../components/BreadCrumb";


const PaymentCheckout = () => {
  const [openTab, setOpenTab] = useState(1);
  const cart = useContext(CartContext);
  console.log("me", cart.items)
  return (
    <section className="container mx-auto mt-[80px]">
      {/* <Breadcrumb/> */}
      <div className="px-5 lg:py-14 py-6 mx-auto flex flex-wrap flex-col">
        <div className="hidden lg:flex mx-auto flex-wrap">
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
      {cart.items === 0 ? (
        <h1 className="no-items product">No Items are add in Cart</h1>
      ) : (
        <>{openTab === 1 && <ShoppingCart cart={cart} setOpenTab={setOpenTab}/>}</>
      )}
      {openTab === 2 && <ShippingDetails cart={cart} setOpenTab={setOpenTab}/>}
      {openTab === 3 && <PaymentDetails setOpenTab={setOpenTab} />}
    </section>
  );
};

export default PaymentCheckout;
