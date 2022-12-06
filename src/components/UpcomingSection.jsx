import { upcomingAuction } from "../data/data";

const UpcomingSection = () => {
  const { title, pretitle, subtitle, image } = upcomingAuction;
  return (
    <section className="bg-gradient-to-r from-[#4693ED] via-[#79C2D2] to-[#C05609]">
      <div className="container mx-auto py-10">
        <div>
          {" "}
          <h3 className="text-white text-2xl">{title}</h3>
          {/* <hr className="mt-4"/> */}
        </div>
        <div className="py-6 relative">
          <div>
            <img src={image} alt="" srcset="" />
          </div>
          <div className="flex gap-4 px-8 absolute bottom-28 text-white justify-between">
            <div className="flex items-center">01</div>
            <div>
              <h3>{pretitle}</h3>
              <p className="w-2/3">{subtitle}</p>
            </div>
            <div className="">
              {/* <h3>see more</h3> */}
              <button className="px-12 border rounded-lg text-sm">Set a reminder</button>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <h3>{title}</h3>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;
