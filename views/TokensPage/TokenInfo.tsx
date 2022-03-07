import TokenInfoCard from "@components/TokenInfoCard";
import React from "react";

interface TokenInfoProps {}

const TokenInfo: React.FC<TokenInfoProps> = () => {
  return (
    <div className="max-w-1440 mx-auto px-20 py-16 grid grid-cols-4 gap-10">
      {TOKEN_INFO.map((info) => (
        <TokenInfoCard info={info} />
      ))}
    </div>
  );
};

export default TokenInfo;

const TOKEN_INFO: { name: string; value: number; image: string }[] = [
  {
    name: "Market Cap",
    value: 123123123,
    image: "/assets/image.svg",
  },
  {
    name: "Volume (24h)",
    value: 1000000,
    image: "/assets/image.svg",
  },
  {
    name: "Liquidity",
    value: 123123123,
    image: "/assets/image.svg",
  },
  {
    name: "Circulating Supply",
    value: 18964575,
    image: "/assets/image.svg",
  },
  {
    name: "Fully Diluted Market Cap",
    value: 818425131000,
    image: "/assets/image.svg",
  },
  {
    name: "Volume/Market Cap",
    value: 0.0278,
    image: "/assets/image.svg",
  },
  {
    name: "Liquidity/Market Cap",
    value: 0.15,
    image: "/assets/image.svg",
  },
  {
    name: "Total Supply",
    value: 21000000,
    image: "/assets/image.svg",
  },
];
