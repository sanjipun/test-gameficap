import NewsAllCards from "@views/ViewAllPage/NewsAllCards";
import Header from "@views/ViewAllPage/Header";
import { useRouter } from "next/router";
import React from "react";

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

export const getStaticPaths = async () => {
  const paths = ["trending-news", "latest-news", "game-fi-cap-news"].map((path) => ({
    params: { newsType: path },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  return { props: params };
};
