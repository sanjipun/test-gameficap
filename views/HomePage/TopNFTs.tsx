import SectionTitle from "@components/SectionTitle";
import SlickSlider from "@components/SlickSlider";
import TrendingCard from "@components/TrendingCard";
import React from "react";

const TopNFTs = () => {
  return (
    <div id="top-nfts" className="bg-C4C4C4 bg-opacity-20  text-primary">
      <section className="py-14 max-w-1440 px-20 mx-auto">
        <SectionTitle title="Top NFTs"></SectionTitle>
        <SlickSlider totalData={TOP_NFTS.length}>
          {TOP_NFTS.map((data, i) => (
            <TrendingCard key={i} data={data} />
          ))}
        </SlickSlider>
      </section>
    </div>
  );
};

export default TopNFTs;

const TOP_NFTS: {
  title: string;
  body: {
    image?: {
      url: string;
    };
  }[];
  date: string;
}[] = [
  {
    title: "NFT and a dummy text",
    date: "Feb 12, 2022",
    body: [
      {},
      {},
      {
        image: {
          url: "/assets/image.svg",
        },
      },
    ],
  },
  {
    title: "NFT and a dummy text",
    date: "Feb 12, 2022",
    body: [
      {},
      {},
      {
        image: {
          url: "/assets/image.svg",
        },
      },
    ],
  },
  {
    title: "NFT and a dummy text",
    date: "Feb 12, 2022",
    body: [
      {},
      {},
      {
        image: {
          url: "/assets/image.svg",
        },
      },
    ],
  },
  {
    title: "NFT and a dummy text",
    date: "Feb 12, 2022",
    body: [
      {},
      {},
      {
        image: {
          url: "/assets/image.svg",
        },
      },
    ],
  },
  {
    title: "NFT and a dummy text",
    date: "Feb 12, 2022",
    body: [
      {},
      {},
      {
        image: {
          url: "/assets/image.svg",
        },
      },
    ],
  },
  {
    title: "NFT and a dummy text",
    date: "Feb 12, 2022",
    body: [
      {},
      {},
      {
        image: {
          url: "/assets/image.svg",
        },
      },
    ],
  },
];
