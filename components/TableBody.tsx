import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Area, AreaChart } from "recharts";
import { data } from "./StarChart";

interface TableBodyProps {
  tokenData: {
    rank: number;
    tokenName: string;
    tokenSymbol: string;
    tokenPrice: string;
    "24hr%": string;
    "7d%": string;
    marketCap: string;
    volume: string;
    circulatingSupply: string;
  };
}

const TableBody: React.FC<TableBodyProps> = ({ tokenData }) => {
  return (
    <tr className="h-14">
      <td>
        <AiOutlineStar />
      </td>
      <td>{tokenData.rank}</td>
      <td className="flex h-14 items-center">
        <img src="/assets/image.svg" className="mr-2 w-5 h-5" />
        {tokenData.tokenName} {tokenData.tokenSymbol}
      </td>
      <td>{tokenData.tokenPrice}</td>
      <td>{tokenData["24hr%"]}</td>
      <td>{tokenData["7d%"]}</td>
      <td>{tokenData.marketCap}</td>
      <td>{tokenData.volume}</td>
      <td>{tokenData.circulatingSupply}</td>
      <td>
        <AreaChart
          width={144}
          height={50}
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
      </td>
    </tr>
  );
};

export default TableBody;
