import LargeTitle from "@components/LargeTitle";
import Tags from "@components/Tags";
import React from "react";

interface HeaderProps {
  title: string;
}
const TAGS: string[] = [
  "all",
  "category 1",
  "category 2",
  "category 3",
  "category 4",
  "category 5",
];
const Header: React.FC<HeaderProps> = ({ title }) => {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
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
          {TAGS.map((tag) => (
            <Tags
              onClick={(e: string) => setActiveCategory(e)}
              active={activeCategory === tag}
              key={tag}
            >
              {tag}
            </Tags>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
