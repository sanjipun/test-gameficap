import React from 'react';

interface TrendingNewsCardProps {
  news: {
    title: string;
    categoryTag: string;
    date: string;
  };
}

const TrendingNewsCard: React.FC<TrendingNewsCardProps> = ({ news }) => {
  return (
    <div id="token-news-card" className="w-72 text-primary mt-5">
      <div className="relative h-185 bg-white">
        <img
          src="/assets/image.svg"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <h1 className="absolute right-2 top-1 px-2 py-1 bg-trendingNewsBg bg-opacity-30 rounded-md text-sm">
          {news?.categoryTag}
        </h1>
      </div>
      <h1 className="mt-6">{news?.title}</h1>
      <h3 className="text-sm">{news?.date}</h3>
    </div>
  );
};

export default TrendingNewsCard;
