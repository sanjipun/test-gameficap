import React from "react";

interface NewsTitleProps {
  children: React.ReactNode;
}

const NewsTitle: React.FC<NewsTitleProps> = ({ children }) => {
  return (
    <h1 id="news-title" className="text-5xl leading-56 text-primary capitalize">
      {children}
    </h1>
  );
};

export default NewsTitle;
