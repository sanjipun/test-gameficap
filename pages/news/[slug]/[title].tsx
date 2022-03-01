import React from "react";
import NewsDetails from "@views/ViewAllPage/SlugTitlePage/NewsDetails";
import NewsHeader from "@views/ViewAllPage/SlugTitlePage/NewsHeader";
import { useRouter } from "next/router";
import NewsAddComment from "@views/ViewAllPage/SlugTitlePage/NewsAddComment";
import NewsCommentList from "@views/ViewAllPage/SlugTitlePage/NewsCommentList";
import RelatedNews from "@views/ViewAllPage/SlugTitlePage/RelatedNews";

const SlugTitle = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <div id="single-news-detail-page" className="pt-28 text-primary">
      <NewsHeader title={(title as string)?.split("-").join(" ")} />
      <NewsDetails />
      <NewsAddComment />
      <NewsCommentList />
      <RelatedNews />
    </div>
  );
};

export default SlugTitle;
