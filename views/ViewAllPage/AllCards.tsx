import React from 'react';
import TrendingCard from '@components/TrendingCard';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/client';

interface AllCardsProps {}

const AllCards: React.FC<AllCardsProps> = () => {
  const { data, loading, error } = useQuery(QUERY);

  return (
    <div className="bg-C4C4C4 bg-opacity-20 py-28">
      <div className="grid grid-cols-4 gap-10 max-w-1440 mx-auto px-20">
        {data?.pages.map((data, i) => (
          <TrendingCard key={i} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllCards;

const QUERY = gql`
  query MyQuery {
    pages {
      ... on NewsArticlePage {
        slug
        title
        date
        body {
          ... on ImageChooserBlock {
            image {
              url
            }
          }
        }
      }
    }
  }
`;
