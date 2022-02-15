import TrendingNewsCard from '@components/TrendingNewsCard';
import React from 'react';

const TrendingNews = () => {
  return (
    <div id="trending-news" className="bg-trendingNewsBg bg-opacity-20">
      <section className="py-14 max-w-1440 px-20 mx-auto">
        <h1 className="text-2xl">Trending News</h1>
        <div className="flex justify-between flex-wrap">
          {TRENDING_NEWS.map((news, i) => (
            <TrendingNewsCard key={i} news={news} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrendingNews;

const TRENDING_NEWS: { title: string; categoryTag: string; date: string }[] = [
  {
    title: 'Breakdown:How to Ride the Dip',
    categoryTag: 'Category Tag',
    date: 'Feb 12, 2022',
  },
  {
    title: 'Breakdown:How to Ride the Dip',
    categoryTag: 'Category Tag',
    date: 'Feb 12, 2022',
  },
  {
    title: 'Breakdown:How to Ride the Dip',
    categoryTag: 'Category Tag',
    date: 'Feb 12, 2022',
  },
  {
    title: 'Breakdown:How to Ride the Dip',
    categoryTag: 'Category Tag',
    date: 'Feb 12, 2022',
  },
];
