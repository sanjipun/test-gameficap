import React from "react";
import { Area, AreaChart } from "recharts";

const data = [
  {
    name: "Page A",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    pv: 4300,
    amt: 2100,
  },
];

const TokensCard = () => {
  return (
    <div className="flex justify-start items-center">
      <div className="bg-white text-primary w-64 border border-C9D2D8 z-40">
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center">
            <img src="/assets/Image.svg" className="w-12 h-12 mr-3" />
            <div>
              <h1>Axie Infinity</h1>
              <span className="text-sm font-light">ROY/AXS</span>
            </div>
          </div>
          <div>
            <h1>$100.123</h1>
            <span className="text-sm font-light">+69%</span>
          </div>
        </div>
        <AreaChart
          width={256}
          height={140}
          data={data}
          margin={{ top: 40, right: 12, left: 12, bottom: 12 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default TokensCard;
