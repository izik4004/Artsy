import React from "react";
import { Link } from "react-router-dom";
import Sum from "../../components/Sum";
import CheckoutItem from "./CheckoutItem";
import {useFormik} from "formik"
import * as Yup from "yup"

const ShippingDetails = ({cart, setOpenTab}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      full_name:"",
      phone_number:"",
      city:"",
      country:""
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required")
    }),
    onSubmit: (values) => {
      localStorage.setItem('formObject', JSON.stringify(values));
       setOpenTab(3)
    }
  })

  return (
    <section className="container mx-auto gap-12 flex leading-none tracking-wider mb-20">
      <div className="lg:w-1/2 w-full">
        <form onSubmit={formik.handleSubmit}>
          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>Your email</label>
            <input
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              onBlur={formik.handleBlur}
              className="border bg-grey rounded-md py-4 px-4"
              placeholder="email"
            />
             {formik.touched.email && formik.errors.email?
          <p className="text-red-500">{formik.errors.email} </p>  : null
          }
          </span>
          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>Your full name</label>
            <input
              type="text"
              value={formik.values.full_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="full_name"
              className="border bg-grey rounded-md py-4 px-4"
              placeholder="Full name"
            />
            {formik.touched.full_name && formik.errors.full_name?
          <p className="text-red-500">{formik.errors.full_name} </p>  : null
          }
          </span>
          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>Choose a wallet</label>
            <select className="border bg-grey rounded-md py-4 px-4">
              <option value="Orange" className="py-4"></option>
              <option value="Radish">Radish</option>
              <option value="Cherry">Cherry</option>
            </select>
          </span>
          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>City</label>
            <select className="border bg-grey rounded-md py-4 px-4">
              <option value="Orange" className="py-4"></option>
              <option value="Radish">Lagos</option>
              <option value="Cherry">Cherry</option>
            </select>
          </span>

          <div className="flex flex-col lg:flex-row gap-4">
            <span className="flex flex-col gap-2 py-4 lg:w-1/2">
              {" "}
              <label>Country</label>
              <select className="border bg-grey rounded-md py-4 px-4 ">
                <option value="Orange" className="py-4"></option>
                <option value="Radish">Radish</option>
                <option value="Cherry">Cherry</option>
              </select>
            </span>

            <span className="flex flex-col gap-2 py-4 lg:w-1/2">
              {" "}
              <label>Postal code</label>
              <select className="border bg-grey rounded-md py-4 px-4 ">
                <option value="Orange"></option>
                <option value="Radish">Radish</option>
                <option value="Cherry">Cherry</option>
              </select>
            </span>
          </div>

          <span className="flex flex-col gap-2 py-4">
            {" "}
            <label>Phone number</label>
            <input
              type="number"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              name=""
              className="border bg-grey rounded-md py-4 px-4"
              placeholder="Phone Number"
            />
          </span>

          <span className="flex flex-col gap-2 py-4">
            <button type="submit" className="py-6 px-20 text-white bg-[#3341C1]" >
              Proceed to payment
            </button>
            <Link to="/marketplace" className="text-blue px-20 py-6 underline">Continue shopping</Link>
          </span>
        </form>
      </div>
      <div className="lg:w-1/2 hidden lg:block">
      {cart.items.map((item, index) => (
          <CheckoutItem 
          key={index}
          id={item.id}
          quantity={item.quantity}
          />
      ))}
      
        <div className="py-10">
          <Sum />
        </div>
      </div>
    </section>
  );
};

export default ShippingDetails;
