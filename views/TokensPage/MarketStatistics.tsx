import MarketStatisticCard from "@components/MarketStatisticCard";
import React from "react";

interface MarketStatisticsProps {}

const MarketStatistics: React.FC<MarketStatisticsProps> = () => {
  return (
    <div className="bg-F9F9F9">
      <div className="pt-20 max-w-1440 mx-auto px-5 sm:px-7 md:px-10 lg:px-20">
        <div className="p-9 bg-white rounded-3xl">
          <h1 className="font-medium text-2xl">ROY Market Statistics</h1>
          <div className="mt-6 grid grid-cols-3 gap-10">
            <MarketStatisticCard />
            <MarketStatisticCard />
            <MarketStatisticCard />
            <MarketStatisticCard />
            <MarketStatisticCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketStatistics;
