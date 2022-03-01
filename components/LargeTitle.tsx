import React from "react";

interface LargeTitleProps {
  children: React.ReactNode;
}

const LargeTitle: React.FC<LargeTitleProps> = ({ children }) => {
  return <h1 className="text-5xl leading-56 text-primary capitalize text-center">{children}</h1>;
};

export default LargeTitle;
