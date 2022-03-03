import TokenButton from "@components/TokenButton";
import { CensorChars } from "@utils/CensorChars";
import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

interface TokenHeaderProps {}

const TokenHeader: React.FC<TokenHeaderProps> = () => {
  const address = "0xdce27d41b4ff72b55a876c621f5a5fef8537c99d";
  return (
    <div id="token-header" className="mt-6 text-primary">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/image.svg" className="w-20 h-20" />
          <h1 className="text-5xl leading-56 ml-4">Royal Protocol</h1>
          <h1 className="ml-3 text-3xl leading-35 text-white bg-C4C4C4 bg-opacity-40 px-3 py-1 rounded-md">
            ROY
          </h1>
        </div>
        <div className="text-white">
          <button className="px-7 py-3 bg-94A2AB rounded">BUY</button>
          <button className="ml-3 px-7 py-3 bg-94A2AB rounded">EXCHANGE</button>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p>
          ROY is currently valued at <span className="font-bold">$0.00473</span>, down{" "}
          <span className="font-bold">-2.357%</span> from yesterday.
        </p>
        <div>
          <TokenButton>www.royalprotocol.io</TokenButton>
          <TokenButton>Reddit</TokenButton>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="flex justify-center items-center">
          <span className="text-primary text-opacity-70 text-sm">Low</span>{" "}
          <span className="ml-1 font-bold">$0.0055</span>
          <input type="range" min="1" max="100" className="w-36 mx-2" />
          <span className="text-primary text-opacity-70 text-sm">High</span>{" "}
          <span className="ml-1 font-bold">$0.0072</span>
          <select className="text-sm text-primary text-opacity-70 bg-C4C4C4 bg-opacity-30 ml-1 rounded p-1">
            <option value="24h">24h</option>
            <option value="2d">2d</option>
            <option value="3d">3d</option>
          </select>
        </div>
        <div>
          <TokenButton>Github</TokenButton>
          <TokenButton>Twitter</TokenButton>
          <TokenButton>Facebook</TokenButton>
          <TokenButton>Youtube</TokenButton>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <IoIosStarOutline className="w-8 h-8 mr-2" />
        <IoMdNotificationsOutline className="w-8 h-8 mr-2" />
        <C4BG>Rank</C4BG>
        <C4BG>On 45 Favorites</C4BG>
      </div>
      <div className="flex items-center mt-4">
        <C4BG>
          <img src="/assets/image.svg" className="w-4 h-4" />{" "}
          <span className="font-bold ml-2">
            {/*Binance Smart Chain (BEP20): <span className="text-black">{CensorChars(address)} </span>*/}
          </span>
        </C4BG>
        <C4BG>
          <span className="font-bold">CertiK</span>
        </C4BG>
      </div>
    </div>
  );
};

export default TokenHeader;

type C4BGTypes = {
  children: React.ReactNode;
};
const C4BG: React.FC<C4BGTypes> = ({ children }) => (
  <h1
    id="C4BG"
    className="mr-2 flex items-center bg-C4C4C4 bg-opacity-30 px-3 py-2 text-xs text-primary text-opacity-70 rounded-md"
  >
    {children}
  </h1>
);
