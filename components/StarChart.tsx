import React from "react";
import { Area, AreaChart } from "recharts";

interface StarChartProps {}

export const data = [
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

const StarChart: React.FC<StarChartProps> = () => {
  return (
    <div className="flex justify-start flex-col items-start">
      <div className="bg-white text-primary h-48 w-64 border border-C9D2D8">
        <AreaChart
          width={256}
          height={185}
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
      <h1 className="mt-6">ROY to USD price chart</h1>
      <h3 className="text-sm">Created Oct 14, 2022.</h3>
    </div>
  );
};

export default StarChart;
