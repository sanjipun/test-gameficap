import React from "react";
import SlugTitleDetails from "@views/ViewAllPage/SlugTitlePage/SlugTitleDetails";
import SlugTitleHeader from "@views/ViewAllPage/SlugTitlePage/SlugTitleHeader";
import { useRouter } from "next/router";
import SlugTitleAddComment from "@views/ViewAllPage/SlugTitlePage/SlugTitleAddComment";
import SlugTitleComments from "@views/ViewAllPage/SlugTitlePage/SlugTitleComments";
import RelatedNews from "@views/ViewAllPage/SlugTitlePage/RelatedNews";

const SlugTitle = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <div className="pt-28 text-primary">
      <SlugTitleHeader title={(title as string)?.split("-").join(" ")} />
      <SlugTitleDetails />
      <SlugTitleAddComment />
      <SlugTitleComments />
      <RelatedNews />
    </div>
  );
};

export default SlugTitle;
