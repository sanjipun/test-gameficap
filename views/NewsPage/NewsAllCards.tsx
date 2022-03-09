import React from "react";
import NewsCard from "@components/NewsCard";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FilterNewsType } from "@utils/FilterNewsType";
import { useTag } from "@store/tag.store";
import { SlugToTitle } from "@utils/SlugToTitle";

const QUERY = gql`
  query MyQuery($category: Int) {
    articles(categories: $category) {
      id
      title
      slug
      author
      date
      tags {
        name
      }
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
  const { activeTag } = useTag();
  const router = useRouter();
  const snippets = useQuery(GET_SNIPPETS);

  const id = FilterNewsType(
    snippets?.data?.snippets,
    SlugToTitle(router?.query?.newsType as string)
  )?.map((data: { id: string }) => data.id);

  const { data } = useQuery(QUERY, {
    variables: {
      category: Number(id),
    },
  });

  const filteredData = data?.articles?.filter((article) =>
    article.tags.some((tag) => tag.name === activeTag)
  );

  return (
    <div id="news-all-cards" className="bg-C4C4C4 bg-opacity-20 py-28">
      <div className="grid grid-cols-4 gap-10 max-w-1440 mx-auto px-20">
        {activeTag == "all"
          ? data?.articles?.map((value: any) => <NewsCard key={value.title} data={value} />)
          : filteredData?.map((value: any) => <NewsCard key={value.title} data={value} />)}
      </div>
    </div>
  );
};

export default AllCards;
