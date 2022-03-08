import React from "react";
import NewsCard from "@components/NewsCard";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FilterNewsType } from "@utils/FilterNewsType";
import { slugToTitle } from "@utils/slugToTitle";

const QUERY = gql`
  query MyQuery($category: Int) {
    articles(categories: $category) {
      id
      title
      slug
      author
      date
    }
  }
`;

const GET_SNIPPETS = gql`
  query MyQuery {
    snippets {
      ... on ArticleCategory {
        id
        name
      }
    }
  }
`;
const AllCards = () => {
  const router = useRouter();
  const snippets = useQuery(GET_SNIPPETS);

  const id = FilterNewsType(
    snippets?.data?.snippets,
    slugToTitle(router?.query?.newsType as string)
  )?.map((data: { id: string }) => data.id);

  const { data } = useQuery(QUERY, {
    variables: {
      category: Number(id),
    },
  });

  return (
    <div id="news-all-cards" className="bg-C4C4C4 bg-opacity-20 py-28">
      <div className="grid grid-cols-4 gap-10 max-w-1440 mx-auto px-20">
        {data?.articles.map((value: any) => (
          <NewsCard key={value.title} data={value} />
        ))}
      </div>
    </div>
  );
};

export default AllCards;
