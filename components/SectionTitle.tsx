import Link from "next/link";
import React from "react";

type SectionTitleProps = {
  title: string;
  viewAll?: boolean;
};
const SectionTitle: React.FC<SectionTitleProps> = ({ title, viewAll }) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <span className="text-2xl text-primary">{title}</span>
      {title !== "Game Fi Cap Projects" && viewAll && (
        <Link href={`/news/${title.split(" ").join("-").toLowerCase()}`}>View all</Link>
      )}
    </div>
  );
};

export default SectionTitle;
