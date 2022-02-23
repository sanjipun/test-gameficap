import { useQuery } from "@apollo/client";
import SectionTitle from "@components/SectionTitle";
import SlickSlider from "@components/SlickSlider";
import TrendingCard from "@components/TrendingCard";
import { gql } from "apollo-boost";
import React from "react";

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

const TrendingNews = () => {
  const { data } = useQuery(QUERY);
  return (
    <div id="trending-news" className="bg-C4C4C4 bg-opacity-20 text-primary">
      <section className="py-14 max-w-1440 px-20 mx-auto">
        <SectionTitle title="Trending News"></SectionTitle>
        <SlickSlider totalData={data.pages.length}>
          {data.pages.map((data, i) => (
            <TrendingCard key={i} data={data} />
          ))}
        </SlickSlider>
      </section>
    </div>
  );
};

export default TrendingNews;
