import React from "react";
// import { auction } from "../../data/data";
import AuctionItem from "../../components/AuctionItem";
import AuctionImageCard from "../../components/AuctionImageCard";
import { auction } from "../../data/auction";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Auction = () => {
  const { bids, products } = auction;
  return (
    <section className="container mx-auto mt-[100px]">
      <div className="py-10">
        <h4 className="text-xl">
          Here’s an overview of products actively on auction, explore!
        </h4>
      </div>
      <div className="py-6 flex  ">
      <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.map((item, index) => {
            return (
              <div key={item.id}>
                <SwiperSlide key={index} className="flex gap-4">
                <AuctionImageCard id={item.id} key={index} image={item.url} />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>

      
      <h3 className="text-xl py-4">Top bids from popular creators</h3>
      <div className="flex gap-10 mb-20 flex-col lg:flex-row">
        {bids.map((item, index) => (
          <AuctionItem
            key={index}
            image={item.url}
            name={item.name}
            creator={item.creator}
            // date={item.date}
            highestbid={item.bid.current.eth}
            currentbid={item.bid.highest.eth}
          />
        ))}
      </div>
    </section>
  );
};

export default Auction;
