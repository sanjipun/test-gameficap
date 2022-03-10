import BreadCrumbs from "@components/BreadCrumbs";
import StarCharts from "@views/StarChartsPage/StarChartsPage";
import React from "react";

interface StarChartsPageProps {}

const StarChartsPage: React.FC<StarChartsPageProps> = () => {
  return (
    <div id="star-charts-page" className="max-w-1440 mx-auto px-5 sm:px-7 md:px-10 lg:px-20">
      <BreadCrumbs data={["Star charts list"]} />
      <StarCharts />
    </div>
  );
};

export default StarChartsPage;
