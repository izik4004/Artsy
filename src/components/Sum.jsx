import React from "react";

const Sum = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-8">
        <span>Products in cart:</span>
        <span>Shopping:</span>
        <span>Total:</span>
      </div>
      <div className="flex flex-col gap-8">
        <span>6 Items</span>
        <span>$678</span>
        <span>$346785</span>
      </div>
    </div>
  );
};

export default Sum;
