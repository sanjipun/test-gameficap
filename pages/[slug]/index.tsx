import AllCards from "@views/ViewAllPage/AllCards";
import Header from "@views/ViewAllPage/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface ViewAllProps {
  path: string;
}

const ViewAll: React.FC<ViewAllProps> = ({ path }) => {
  return (
    <div>
      <Header title={path} />
      <AllCards />
    </div>
  );
};

export default ViewAll;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { slug: "trending-news" } }, { params: { slug: "game-fi-cap-news" } }];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  return {
    props: { path: slug },
  };
};
