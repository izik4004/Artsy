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
        <div>
          {" "}
          <h3 className="text-white text-2xl">{title}</h3>
          {/* <hr className="mt-4"/> */}
        </div>
        <div className="py-6 relative">
          <img src={image} alt="" srcset="" />
          <div className="flex gap-4 px-8 absolute bottom-28 text-white justify-between">
            <div className="flex items-center">
              <h3 className="text-4xl">01</h3>
            </div>
            <div>
              <h3 className="text-2xl">{pretitle}</h3>
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
        </div>
        <div className="flex justify-between">
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
