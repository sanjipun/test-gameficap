import { gql, useQuery } from "@apollo/client";
import SectionTitle from "@components/SectionTitle";
import React from "react";
import SlickSlider from "@components/SlickSlider";
import NewsCard from "@components/NewsCard";
import { useRouter } from "next/router";

interface RelatedNewsProps {}

const RelatedNews: React.FC<RelatedNewsProps> = () => {
  const router = useRouter();
  const { data } = useQuery(QUERY, {
    variables: {
      slug: router.query.title,
    },
  });

  return (
    <section id="related-news" className="bg-F3F3F3">
      <div className="max-w-1440 mx-auto px-20 py-20">
        <SectionTitle title="Related News"></SectionTitle>
        <SlickSlider totalData={data?.pages?.length}>
          {data?.article?.relatedArticles?.map((data, i) => (
            <NewsCard key={i} data={data} />
          ))}
        </SlickSlider>
      </div>
    </section>
  );
};

export default RelatedNews;

const QUERY = gql`
  query MyQuery($slug: String) {
    article(slug: $slug) {
      relatedArticles {
        slug
        title
        date
      }
    }
  }
`;
