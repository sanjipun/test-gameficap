import AllCards from "@views/ViewAllPage/AllCards";
import Header from "@views/ViewAllPage/Header";
import { useRouter } from "next/router";
import React from "react";

const ViewAll = () => {
  const { query } = useRouter();
  const { slug } = query;
  return (
    <div>
      <Header title={slug as string} />
      <AllCards />
    </div>
  );
};

export default ViewAll;
