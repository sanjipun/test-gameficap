import React from "react";
import ReactHtmlParser from "react-html-parser";
import { CgProfile } from "react-icons/cg";
import { BsCalendar2DateFill } from "react-icons/bs";
import { AiFillTags } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

type newsDetailsTypes = {
  data: {
    articles: {
      author: string;
      date: string;
      tags: {}[];
    };
  };
};
const NewsDetails: React.FC<newsDetailsTypes> = ({ data }) => {
  return (
    <div id="news-details" className="max-w-1440 mx-auto px-20 pb-14 text-primary leading-6">
      <div className="mt-14 flex">
        <h1 className="flex items-center mr-6">
          <CgProfile className="mr-1 capitalize" /> {data?.articles[0]?.author}
        </h1>
        <h1 className="flex items-center mr-6">
          <BsCalendar2DateFill className="mr-1" /> {data?.articles[0]?.date}
        </h1>
        <h1 className="flex items-center mr-6">
          <AiFillTags className="mr-1" />{" "}
          {data?.articles[0]?.tags?.map((tag) => (
            <span className="mx-2" key={tag.name}>
              {tag.name}
            </span>
          ))}
        </h1>
        <h1 className="flex items-center mr-6">
          <FaRegCommentDots className="mr-1" /> 14 Comments
        </h1>
      </div>
      <div className="w-full border border-C9D2D8 mt-14 rounded-xl overflow-hidden h-96 flex items-center justify-center">
        <img src={data?.articles[0]?.body[2]?.image?.src} className="object-cover w-full h-full" />
      </div>
      <div className="mt-12">{ReactHtmlParser(data?.articles[0]?.body[1].rawValue)}</div>
    </div>
  );
};

export default NewsDetails;
