import React from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";

interface TokenInfoCardProps {
  info: {
    name: string;
    image: string;
    value: number;
  };
}

const TokenInfoCard: React.FC<TokenInfoCardProps> = ({ info }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-xl border border-C4C4C4 border-opacity-30">
      <img src={info.image} className="w-10 h-10" />
      <div className="ml-4">
        <h1 className="flex items-center">
          {info.name} <IoIosHelpCircleOutline className="w-5 h-5 ml-1" />
        </h1>
        <h1 className="text-black font-bold">$ {info.value}</h1>
      </div>
    </div>
  );
};

export default TokenInfoCard;
