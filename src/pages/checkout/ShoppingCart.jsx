import React from "react";
import { Link } from "react-router-dom";
import Sum from "../../components/Sum";
import CheckoutItem from "./CheckoutItem";
// import { CartContext } from "../../context/ShopContext";
// import { useContext } from "react";

const ShoppingCart = ({cart}) => {
  // const cart = useContext(CartContext);
  return (
    <div>
      {cart.items.map((item, index) => (
          <CheckoutItem 
          key={index}
          id={item.id}
          quantity={item.quantity}
          />
      ))}
      
      <div className="flex py-10 flex-col lg:flex-row">
        <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col items-center lg:items-start">
          <button className="py-6 px-20 text-white bg-[#3341C1] lg:mt-0 mt-6">
            Proceed to checkout
          </button>
          <Link to="/marketplace" className="text-blue px-20 py-6 underline">Continue shopping</Link>
        </div>
        <div className="lg:w-1/2 lg:order-2 order-1">
          <Sum />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
