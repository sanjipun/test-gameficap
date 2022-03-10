import { gql, useQuery } from "@apollo/client";
import LargeTitle from "@components/LargeTitle";
import Tags from "@components/Tags";
import { useTag } from "@store/tag.store";
import React from "react";

interface HeaderProps {
  title: string;
}

const QUERY = gql`
  query MyQuery {
    snippets {
      ... on ArticlePageTag {
        name
      }
    }
  }
`;

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { activeTag, setActiveTag } = useTag();
  const { data } = useQuery(QUERY);

  return (
    <div
      id="news-header"
      className="text-primary py-28 max-w-1440 mx-auto px-5 sm:px-7 md:px-10 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <LargeTitle>{(title as string)?.split("-").join(" ")}</LargeTitle>
        <p className="max-w-622 mt-5 text-center mx-auto leading-6">
          We are constantly working on bringing you more reliable and convenient cryptocurrency
          services. Find out what we've been up to by reading our latest press releases and a dummy
          text to make it long.
        </p>
        <div className="mt-14 flex justify-center flex-wrap w-full mx-auto">
          <h3
            onClick={() => setActiveTag("all")}
            className={`${
              activeTag === "all"
                ? "bg-3C454A text-white text-opacity-70 "
                : "bg-C4C4C4 bg-opacity-30 text-3C454A"
            } px-4 cursor-pointer py-1 m-2 capitalize  border border-solid rounded`}
          >
            All
          </h3>
          {data?.snippets
            ?.filter((tag: { name: string }) => tag.name !== undefined)
            .map((tag: { name: string }) => (
              <Tags
                onClick={(e: string) => setActiveTag(e)}
                active={activeTag === tag.name}
                key={tag.name}
              >
                {tag?.name}
              </Tags>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
