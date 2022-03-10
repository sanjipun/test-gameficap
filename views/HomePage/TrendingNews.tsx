import { gql, useQuery } from "@apollo/client";
import SectionTitle from "@components/SectionTitle";
import SlickSlider from "@components/SlickSlider";
import NewsCard from "@components/NewsCard";
import React from "react";

const TrendingNews = () => {
  const { data } = useQuery(QUERY);
  return (
    <div id="trending-news" className="bg-C4C4C4 bg-opacity-20 text-primary">
      <section className="py-14 max-w-1440 px-5 sm:px-7 md:px-10 lg:px-20 mx-auto">
        <SectionTitle viewAll title="Trending News"></SectionTitle>
        <SlickSlider totalData={data?.articles?.length}>
          {data?.articles?.map((data, i) => (
            <NewsCard key={i} data={data} />
          ))}
        </SlickSlider>
      </section>
    </div>
  );
};
export default TrendingNews;

const QUERY = gql`
  query MyQuery {
    articles(categories: 1) {
      id
      title
      slug
      author
      date
    }
  }
`;
