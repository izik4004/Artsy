import React from "react";
import { auction } from "../../data/data";
import AuctionItem from "../../components/AuctionItem";
import AuctionImageCard from "../../components/AuctionImageCard";

const Auction = () => {
  return (
    <section className="container mx-auto mt-[100px]">
      <div className="py-10">
        <h4 className="text-xl">
          Here’s an overview of products actively on auction, explore!
        </h4>
      </div>
      <div className="py-6">
        <AuctionImageCard />
      </div>
      <h3 className="text-xl py-4">Top bids from popular creators</h3>
      <div className="flex gap-10 mb-20 flex-col lg:flex-row">
        {auction.map((item, index) => (
          <AuctionItem
            key={index}
            image={item.image}
            name={item.name}
            creator={item.creator}
            date={item.date}
            highestbid={item.highestbid}
            currentbid={item.currentbid}
          />
        ))}
      </div>
    </section>
  );
};

export default Auction;
