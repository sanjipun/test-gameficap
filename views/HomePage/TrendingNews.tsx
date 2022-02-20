import SectionTitle from '@components/SectionTitle';
import SlickSlider from '@components/SlickSlider';
import TrendingCard from '@components/TrendingCard';
import React from 'react';

const TrendingNews = () => {
  return (
    <div id="trending-news" className="bg-C4C4C4 bg-opacity-20 text-primary">
      <section className="py-14 max-w-1440 px-20 mx-auto">
        <SectionTitle title="Trending News"></SectionTitle>
        <SlickSlider totalData={TRENDING_NEWS.length}>
          {TRENDING_NEWS.map((data, i) => (
            <TrendingCard key={i} data={data} />
          ))}
        </SlickSlider>
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
  {
    title: 'Breakdown:How to Ride the Dip',
    categoryTag: 'Category Tag',
    date: 'Feb 12, 2022',
  },
];
