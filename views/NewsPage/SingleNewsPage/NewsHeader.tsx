import React from "react";
import { BsShareFill } from "react-icons/bs";
import TitleSlug from "./TitleSlug";

interface NewsHeaderProps {
  title: string;
}

const NewsHeader: React.FC<NewsHeaderProps> = ({ title }) => {
  return (
    <div
      id="news-header"
      className="max-w-1440 mx-auto px-5 sm:px-7 md:px-10 lg:px-20 flex justify-between items-center"
    >
      <TitleSlug>{title}</TitleSlug>
      <BsShareFill className="w-10 h-10" />
    </div>
  );
};

export default NewsHeader;
``;
