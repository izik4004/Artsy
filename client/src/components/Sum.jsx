import { CartContext } from "../context/ShopContext";
import { useContext } from "react";

const Sum = () => {
  const cart = useContext(CartContext);
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-8">
        <span>Products in cart:</span>
        <span>Shopping:</span>
        <span className="font-semibold">Total:</span>
      </div>
      <div className="flex flex-col gap-8">
        <span>{cart.items.length}</span>
        <span>$0</span>
        <span className="font-semibold">${cart.getTotalCost().toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Sum;
