import React from "react";
import { IoIosHome } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";

interface BreadCrumbsProps {
  data: string[];
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ data }) => {
  return (
    <section id="breadcrumbs" className="flex items-center capitalize">
      <IoIosHome /> <AiOutlineRight />{" "}
      {data.length === 0
        ? data.map((item, i: number) => <h1 key={i}>{item}</h1>)
        : data.map((item, i: number) => (
            <h1 key={i} className="flex items-center">
              {item}
              {i !== data.length - 1 && <AiOutlineRight />}
            </h1>
          ))}
    </section>
  );
};

export default BreadCrumbs;
