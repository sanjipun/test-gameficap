import React from "react";

interface MarketStatisticCardProps {}

const MarketStatisticCard: React.FC<MarketStatisticCardProps> = () => {
  return (
    <div className="p-2 bg-FAFAFA border border-F4F5F7 rounded-lg">
      <div className="flex">
        <img className="w-5 h-5" src="/assets/image.svg" />
        <span className="ml-1 text-sm">ROY Price </span>
      </div>
      <div className="mt-5 w-full flex justify-between">
        <span>ROY Price</span>
        <span className="font-medium">$0.00473</span>
      </div>
      <div className="h-1px w-full bg-black bg-opacity-10 my-4" />
      <div className="w-full flex justify-between">
        <span>ROY Price Change</span>
        <span className="font-medium">-$0.00473</span>
      </div>
    </div>
  );
};

export default MarketStatisticCard;
