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

const GET_ALL_NEWS = gql`
  query MyQuery {
    pages {
      ... on ArticlePage {
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

const GET_LATEST_NEWS = gql`
  query MyQuery {
    articles(order: "-first_published_at", limit: 20) {
      slug
      title
      date
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

  const allNews = useQuery(GET_ALL_NEWS, {
    variables: {
      category: Number(id),
    },
  });

  const latestNews = useQuery(GET_LATEST_NEWS);
  const filteredData = data?.articles?.filter((article) =>
    article.tags.some((tag: { name: string }) => tag.name === activeTag)
  );

  const getData = () => {
    const data =
      activeTag === "all-news"
        ? allNews?.data?.pages
        : activeTag === "latest-news"
        ? latestNews?.data?.articles
        : filteredData;
    return data;
  };

  return (
    <div id="news-all-cards" className="bg-C4C4C4 bg-opacity-20 py-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center sm:place-items-start gap-10 max-w-1440 mx-auto px-5 sm:px-7 md:px-10 lg:px-20">
        {getData()?.map(
          (value: any) => value.title !== undefined && <NewsCard key={value.title} data={value} />
        )}
      </div>
    </div>
  );
};

export default AllCards;
