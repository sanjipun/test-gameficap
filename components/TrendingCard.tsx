import Link from "next/link";
import React from "react";

interface TrendingNewsCardProps {
  data: {
    title: string;
    categoryTag?: string | undefined;
    body: {
      image?: {
        url: string;
      };
    }[];
    date: string;
  };
}

const TrendingNewsCard: React.FC<TrendingNewsCardProps> = ({ data }) => {
  return (
    <div className="flex justify-start items-center">
      <div id="token-news-card" className="w-64 text-primary">
        <div className="relative h-185 bg-white border border-C9D2D8">
          <img
            src={data?.body[2].image?.url}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <h1 className="absolute right-2 top-1 px-2 py-1 bg-trendingNewsBg bg-opacity-30 rounded-md text-sm">
            {data.categoryTag}
          </h1>
        </div>
        <div className="mt-5">
          <Link href={`/trending-news/${data.title.split(" ").join("-").toLowerCase()}`}>
            <a className="mt-6">{data.title}</a>
          </Link>
        </div>

        <h3 className="text-sm">{data.date}</h3>
      </div>
    </div>
  );
};

export default TrendingNewsCard;
