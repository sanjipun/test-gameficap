import React from "react";
import { IoIosHome } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";

interface BreadCrumbsProps {
  data: string[];
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ data }) => {
  return (
    <section
      id="breadcrumbs"
      className="max-w-1440 mx-auto px-5 sm:px-7 md:px-10 lg:px-20 py-8 flex items-center capitalize"
    >
      <IoIosHome /> <AiOutlineRight className="ml-2" />{" "}
      {data.length === 0
        ? data.map((item, i: number) => (
            <h1 key={i} className="ml-2">
              {item}
            </h1>
          ))
        : data.map((item, i: number) => (
            <h1 key={i} className="flex items-center ml-2">
              {item}
              {i !== data.length - 1 && <AiOutlineRight className="ml-2" />}
            </h1>
          ))}
    </section>
  );
};

export default BreadCrumbs;
