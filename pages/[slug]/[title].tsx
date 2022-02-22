import React from "react";
import SlugTitleDetails from "@views/ViewAllPage/SlugTitlePage/SlugTitleDetails";
import SlugTitleHeader from "@views/ViewAllPage/SlugTitlePage/SlugTitleHeader";
import { useRouter } from "next/router";

const SlugTitle = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <div className="py-28">
      <SlugTitleHeader title={(title as string)?.split("-").join(" ")} />
      <SlugTitleDetails />
    </div>
  );
};

export default SlugTitle;
