import React from "react";

interface ViewAllTitleProps {
  children: React.ReactNode;
}

const ViewAllTitle: React.FC<ViewAllTitleProps> = ({ children }) => {
  return <h1 className="text-5xl leading-56 text-primary capitalize text-center">{children}</h1>;
};

export default ViewAllTitle;
