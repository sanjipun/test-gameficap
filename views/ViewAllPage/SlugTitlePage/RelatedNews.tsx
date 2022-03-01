import { useQuery } from "@apollo/client";
import SectionTitle from "@components/SectionTitle";
import React from "react";
import { gql } from "apollo-boost";
import SlickSlider from "@components/SlickSlider";
import TrendingNewsCard from "@components/NewsCard";

interface RelatedNewsProps {}

const RelatedNews: React.FC<RelatedNewsProps> = () => {
  const { data } = useQuery(QUERY);

  return (
    <section id="related-news" className="bg-F3F3F3">
      <div className="max-w-1440 mx-auto px-20 py-20">
        <SectionTitle title="Related News"></SectionTitle>
        <SlickSlider totalData={data?.pages?.length}>
          {data?.pages?.map((data, i) => (
            <TrendingNewsCard key={i} data={data} />
          ))}
        </SlickSlider>
      </div>
    </section>
  );
};

export default RelatedNews;

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
