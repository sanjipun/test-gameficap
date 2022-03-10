import { SlugToTitle } from "@utils/SlugToTitle";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface TokenTypeHeaderProps {
  title: string;
}

const TAGS: string[] = ["all-tokens", "recently-added-tokens", "gamefi-tokens", "trending-tokens"];

const TokenTypeHeader: React.FC<TokenTypeHeaderProps> = ({ title }) => {
  const router = useRouter();
  return (
    <div className="text-primary">
      <h1 className="text-2xl leading-47">Explore {title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper consec elementum augue
        scelerisque mi aliquet etiam urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ullamcorper consec elementum augue scelerisque mi aliquet etiam urna. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Ullamcorper consec elementum augue scelerisque mi aliquet
        etiam urna.
      </p>
      <div className="flex justify-start items-center flex-wrap mt-16">
        {TAGS.map((tag) => {
          return (
            <Link href={`/${tag}`} key={tag}>
              <a
                className={`${
                  router?.query?.tokenType === tag
                    ? "bg-94A2AB text-white text-opacity-70 "
                    : "bg-white bg-opacity-30 text-3C454A"
                } px-4 cursor-pointer py-2 m-2 ml-0 capitalize border border-C9D2D8 rounded`}
              >
                {SlugToTitle(tag)}
              </a>
            </Link>
          );
        })}
      </div>
      <div className="my-12">
        <span className="text-xs">Filter by: </span>
        <select className="w-32 border border-C9D2D8 rounded py-1 px-3 m-2 ">
          <option value="1">Category 1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select className="w-32 border border-C9D2D8 rounded py-1 px-3 ml-0 m-2 ">
          <option value="1">Category 2</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select className="w-32 border border-C9D2D8 rounded py-1 px-3 ml-0 m-2 ">
          <option value="1">Category 3</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select className="w-32 border border-C9D2D8 rounded py-1 px-3 ml-0 m-2 ">
          <option value="1">Category 4</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
  );
};

export default TokenTypeHeader;
