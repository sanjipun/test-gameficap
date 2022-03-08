import { gql, useQuery } from "@apollo/client";
import LargeTitle from "@components/LargeTitle";
import Tags from "@components/Tags";
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
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const { data } = useQuery(QUERY);

  return (
    <div id="news-header" className="text-primary py-28 max-w-1440 mx-auto px-20">
      <div className="max-w-4xl mx-auto">
        <LargeTitle>{(title as string)?.split("-").join(" ")}</LargeTitle>
        <p className="max-w-622 mt-5 text-center mx-auto leading-6">
          We are constantly working on bringing you more reliable and convenient cryptocurrency
          services. Find out what we've been up to by reading our latest press releases and a dummy
          text to make it long.
        </p>
        <div className="mt-14 flex justify-center flex-wrap w-full mx-auto">
          {data?.snippets
            ?.filter((tag: { name: string }) => tag.name !== undefined)
            .map((tag: { name: string }) => (
              <Tags
                onClick={(e: string) => setActiveCategory(e)}
                active={activeCategory === tag.name}
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
