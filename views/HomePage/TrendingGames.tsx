import SectionTitle from "@components/SectionTitle";
import SlickSlider from "@components/SlickSlider";
import TrendingCard from "@components/TrendingCard";
import React from "react";

const TRENDING_GAMES: {
  title: string;
  body: {
    image?: {
      url: string;
    };
  }[];
  date: string;
}[] = [
  {
    title: "Game and a dummy text",
    date: "$ 284",
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
    title: "Game and a dummy text",
    date: "$ 284",
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
    title: "Game and a dummy text",
    date: "$ 284",
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
    title: "Game and a dummy text",
    date: "$ 284",
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
    title: "Game and a dummy text",
    date: "$ 284",
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

const TrendingGames = () => {
  return (
    <div id="trending-games" className="bg-C4C4C4 bg-opacity-20 text-primary">
      <section className="py-14 max-w-1440 px-20 mx-auto">
        <SectionTitle title="Trending Games"></SectionTitle>
        <SlickSlider totalData={TRENDING_GAMES.length}>
          {TRENDING_GAMES.map((data, i) => (
            <TrendingCard key={i} data={data} />
          ))}
        </SlickSlider>
      </section>
    </div>
  );
};

export default TrendingGames;
