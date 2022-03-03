import NewsAllCards from "@views/ViewAllPage/NewsAllCards";
import Header from "@views/ViewAllPage/Header";
import { useRouter } from "next/router";
import React from "react";

const ViewAll = () => {
  const { query } = useRouter();
  const { slug } = query;
  return (
    <div id="news-type-page">
      <Header title={slug as string} />
      <NewsAllCards />
    </div>
  );
};

export default ViewAll;
