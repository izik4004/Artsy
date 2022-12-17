import React from 'react'
import image from "../assets/item9.png";
import { features } from "../data/data";

const Me = () => {
  const { feature1, feature2, feature3 } = features;
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-3/5 object-cover object-center rounded-lg" src={feature1.image}/>
      <span className='absolute text-white text-xl'>rekjelkjelr</span>
      <div className="lg:w-2/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <button className='py-2 px-4 bg-blue text-white'>UPCOMING</button>
        <h2 className="text-sm title-font text-gray-500 tracking-widest py-2">November 21 at 11am WAT</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium py-4">The Catcher in the Rye</h1>
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Creator:</span>
            <span>Aliya Minal</span>
          </div>
        </div>
        <div className="flex">
          <span>Get notified</span>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Me