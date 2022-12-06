import React from "react";

const Featured = (props) => {
  return <div className="flex gap-10 pt-8 border-t">{props.children}</div>;
}; 

export default Featured;
