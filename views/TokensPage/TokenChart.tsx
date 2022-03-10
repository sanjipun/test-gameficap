import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AiOutlineCamera } from "react-icons/ai";
import { GiExpand } from "react-icons/gi";

interface TokenChartProps {}

const TokenChart: React.FC<TokenChartProps> = () => {
  const [activeTime, setActiveTime] = React.useState<string>("1D");
  return (
    <div className="bg-F9F9F9 bg-opacity-60 text-primary">
      <div className="max-w-1440 mx-auto px-5 sm:px-7 md:px-10 lg:px-20 py-16">
        <div className="p-4 lg:p-9 bg-white rounded-3xl">
          <div className="flex justify-between">
            <h1 className="text-lg md:text-2xl font-medium">Royal Protocol (ROY) Price Chart</h1>
            <div className="flex items-center">
              <GiExpand className="w-6 h-6 mr-4" />
              <AiOutlineCamera className="w-6 h-6" />
            </div>
          </div>
          <div className="inline-flex flex-wrap py-1 rounded-md pt-1 bg-C4C4C4 bg-opacity-30">
            {TIME.map((time, i: number) => (
              <h1
                key={i}
                onClick={() => setActiveTime(time)}
                className={`${i === 0 && "ml-1"} m-1 px-2 cursor-pointer rounded-md pt-1 ${
                  activeTime === time && "bg-white"
                }`}
              >
                {time}
              </h1>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={522}>
            <AreaChart data={data} margin={{ top: 40, right: 12, left: 12, bottom: 12 }}>
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip />
              <XAxis
                dataKey="amt"
                width={20}
                tick={{ fontSize: 10 }}
                domain={[0, "dataMax + 100"]}
              />
              <YAxis
                dataKey="pv"
                orientation="right"
                width={20}
                tick={{ fontSize: 10 }}
                domain={[0, "dataMax + 100"]}
              />
              <CartesianGrid strokeDasharray="5 5" />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TokenChart;

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

const TIME: string[] = ["1D", "7D", "1M", "3M", "1Y", "YTD", "All"];
