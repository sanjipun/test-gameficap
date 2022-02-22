import React from "react";
import ViewAllTags from "@views/ViewAllPage/ViewAllTags";
import ViewAllTitle from "@views/ViewAllPage/ViewAllTitle";

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
const Header: React.FC<HeaderProps> = ({ title }) => (
  <div className="text-primary py-28 max-w-1440 mx-auto px-20">
    <div className="max-w-4xl mx-auto">
      <ViewAllTitle>{(title as string)?.split("-").join(" ")}</ViewAllTitle>
      <p className="max-w-622 mt-5 text-center mx-auto leading-6">
        We are constantly working on bringing you more reliable and convenient cryptocurrency
        services. Find out what we've been up to by reading our latest press releases and a dummy
        text to make it long.
      </p>
      <div className="mt-14 flex justify-center flex-wrap w-full mx-auto">
        {TAGS.map((tag) => (
          <ViewAllTags key={tag}>{tag}</ViewAllTags>
        ))}
      </div>
    </div>
  </div>
);

export default Header;
