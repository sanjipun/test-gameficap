import Link from "next/link";
import React from "react";

type SectionTitleProps = {
  title: string;
  viewAll?: boolean;
};
const SectionTitle: React.FC<SectionTitleProps> = ({ title, viewAll }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl text-primary mb-5">{title}</h1>
      {title !== "Game Fi Cap Projects" && viewAll && (
        <Link href={title.split(" ").join("-").toLowerCase()}>View all</Link>
      )}
    </div>
  );
};

export default SectionTitle;
