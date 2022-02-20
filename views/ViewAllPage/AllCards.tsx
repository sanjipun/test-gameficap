import React from 'react';
import TrendingCard from '@components/TrendingCard';

interface AllCardsProps {}

const AllCards: React.FC<AllCardsProps> = () => {
  return (
    <div className="bg-C4C4C4 bg-opacity-20 py-28">
      <div className="grid grid-cols-4 gap-10 max-w-1440 mx-auto px-20">
        {TRENDING_NEWS.map((data, i) => (
          <TrendingCard key={i} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllCards;

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
