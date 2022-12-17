import React from 'react'
import image from "../assets/item9.png";
import { features } from "../data/data";

const Me = () => {
  const { feature1, feature2, feature3 } = features;
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5  mx-auto">
    <div className="flex ">
      <>
      <img alt="ecommerce" className="  rounded-lg" src={feature1.image}/>
      <span className='absolute  text-white text-xl'>rekjjkkljfkljdfghhhhhhhhhhhhhhhhhhhh5555555555555555555555555555555
      jkdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkhjjjjjjjjjjjjjjjjjjjjelkjelr</span>
      </>
      <div className="lg:w-2/5 w-full lg:pl-10 mt-6 lg:mt-0">
        <button className='py-2 px-10 text-md bg-blue text-white rounded-lg hidden lg:block'>UPCOMING</button>
        <h2 className="text-sm title-font text-gray-500 tracking-widest py-4">November 21 at 11am WAT</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium py-4">Eyo: Eko for Show</h1>
        <p className="leading-relaxed">Fam locavore kickstarole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Creator:</span>
            <span>Aliya Minal</span>
          </div>
        </div>
        <div className="flex">
          <a href='#/'>Get notified</a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Me