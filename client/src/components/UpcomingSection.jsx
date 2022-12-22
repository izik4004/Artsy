import { upcomingAuction } from "../data/data";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const UpcomingSection = () => {
  const { title, pretitle, subtitle, image } = upcomingAuction;
  return (
    <section className="new">
      <div className="container mx-auto py-10">
        <div className="hidden lg:block">
          {" "}
          <h3 className="text-white text-2xl">{title}</h3>
          {/* <hr className="mt-4"/> */}
        </div>
        <div className="lg:py-6 relative">
          <img src={image} alt="" />
          <div className="hidden lg:flex gap-4 lg:px-8 auction absolute text-white lg:bottom-28  justify-between">
            <div className="flex items-center">
              <h3 className="text-4xl">01</h3>
            </div>
            <div>
              <h3 className="lg:text-2xl md:text-sm">{pretitle}</h3>
              <p className="w-2/3">{subtitle}</p>
            </div>
            <div className="flex gap-4">
              <h3>see more</h3>
              <a href="#/" className="text-sm">
                set a reminder
              </a>
              {/* <button className="px-12 border rounded-lg text-sm">
                Set a reminder
              </button> */}
            </div>
          </div>
            
            <div className="block lg:hidden flex-col absolute bottom-6 text-white px-4 gap-4">
             <div>hnlkjlkl</div>
             <div className="flex flex-row gap-4">
              <h3 className="w-1/8">01</h3>
              <p className="w-7/8">
                
                <h3 className="text-sm">START ON 08:00 GTS.MONDAY</h3>
                <span className="text-xs">GET EXCLUSIVE VIEWING OF CONTEMPORARY ART 
                  AND CONNECT WITH INVESTORS AND AUCTIONEERS 
                  ACROSS THE WORLD BRINGING THEIR HIGHEST 
                  AND LOWEST BIDS.</span>
              </p>
              </div>
            </div>

        </div>
        <div className="lg:flex justify-between  hidden">
          <div></div>
          <div className="flex gap-6">
            <div className="border rounded-full p-3">
            <MdOutlineKeyboardArrowLeft size={20} />
            </div>
            <div className="border rounded-full p-3">
            <MdOutlineKeyboardArrowRight
              size={20}
             
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;
