import React from "react";
import { footer } from "../data/data";

const Footer = () => {
  const { title, email, footerLink3, footerText, footerLink1, footerLink2 } =
    footer;
  return (
    <section className="flex flex-col container mx-auto">
      <div className="flex justify-between">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
        <div className="">
        {footerLink1.map((item) => (
             <div className="py-2">{item.name}</div>
        ))}
        </div>

        <div className="">
        {footerLink2.map((item) => (
             <div className="py-2">{item.name}</div>
        ))}
        </div>
       
        <div className="">
        {footerLink3.map((item) => (
             <div className="py-2">{item.name}</div>
        ))}
        </div>      
      </div>
      <p className="text-center py-12">{footerText}</p>
    </section>
  );
};

export default Footer;
