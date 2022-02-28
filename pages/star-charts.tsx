import BreadCrumbs from "@components/BreadCrumbs";
import StarCharts from "@views/StarChartsPage/StarCharts";
import React from "react";

interface StarChartsPageProps {}

const StarChartsPage: React.FC<StarChartsPageProps> = () => {
  return (
    <div id="star-charts-page" className="max-w-1440 mx-auto px-20">
      <BreadCrumbs data={["Star charts list"]} />
      <StarCharts />
    </div>
  );
};

export default StarChartsPage;
