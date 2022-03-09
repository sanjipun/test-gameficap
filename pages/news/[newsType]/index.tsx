import NewsAllCards from "@views/NewsPage/NewsAllCards";
import Header from "@views/NewsPage/Header";
import { useRouter } from "next/router";
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

const ViewAll = () => {
  const { query } = useRouter();
  const { newsType } = query;

  return (
    <div id="news-type-page">
      <Header title={newsType as string} />
      <NewsAllCards />
    </div>
  );
};

export default ViewAll;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ["all-news", "trending-news", "latest-news", "game-fi-cap-news"].map((path) => ({
    params: { newsType: path },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { newsType: string };
}) => {
  return { props: params };
};
