import { upcomingAuction } from "../data/data";

const UpcomingSection = () => {
  const { title, pretitle, subtitle, image } = upcomingAuction;
  return (
    <section className="bg-gradient-to-r from-[#4693ED] via-[#79C2D2] to-[#C05609]">
      <div className="container mx-auto py-10">
        <div>
          {" "}
          <h3>{title}</h3>
        </div>

        <div className="py-6">
          <img src={image} alt="" srcset="" />
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
