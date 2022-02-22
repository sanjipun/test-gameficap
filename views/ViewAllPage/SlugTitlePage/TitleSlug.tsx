import React from "react";

interface TitleSlugProps {
  children: React.ReactNode;
}

const TitleSlug: React.FC<TitleSlugProps> = ({ children }) => {
  return <h1 className="text-5xl leading-56 text-primary capitalize">{children}</h1>;
};

export default TitleSlug;
