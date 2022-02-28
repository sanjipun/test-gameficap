import React from "react";
import { BsShareFill } from "react-icons/bs";
import TitleSlug from "./TitleSlug";

interface SlugTitleHeaderProps {
  title: string;
}

const SlugTitleHeader: React.FC<SlugTitleHeaderProps> = ({ title }) => {
  return (
    <div className="max-w-1440 mx-auto px-20 flex justify-between items-center">
      <TitleSlug>{title}</TitleSlug>
      <BsShareFill className="w-10 h-10" />
    </div>
  );
};

export default SlugTitleHeader;
``;
