import React from "react";

interface TagsProps {
  children: string;
  active: boolean;
  onClick: (char: string) => void;
}

const Tags: React.FC<TagsProps> = ({ children, active, onClick }) => {
  return (
    <h3
      onClick={() => onClick(children)}
      className={`${
        active ? "bg-3C454A text-white text-opacity-70 " : "bg-C4C4C4 bg-opacity-30 text-3C454A"
      } px-4 cursor-pointer py-1 m-2 capitalize  border border-solid rounded`}
    >
      {children}
    </h3>
  );
};

export default Tags;
