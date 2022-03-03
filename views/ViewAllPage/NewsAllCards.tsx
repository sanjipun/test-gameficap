import React from "react";
import NewsCard from "@components/NewsCard";
import { gql, useQuery } from "@apollo/client";

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
const AllCards = () => {
  const { data } = useQuery(QUERY);

  return (
    <div id="news-all-cards" className="bg-C4C4C4 bg-opacity-20 py-28">
      <div className="grid grid-cols-4 gap-10 max-w-1440 mx-auto px-20">
        {data?.pages.map((value: any) => (
          <NewsCard key={value.title} data={value} />
        ))}
      </div>
    </div>
  );
};

export default AllCards;
