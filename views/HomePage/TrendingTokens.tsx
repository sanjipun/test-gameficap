import SectionTitle from "@components/SectionTitle";
import SlickSlider from "@components/SlickSlider";
import TokensCard from "@components/TokensCard";
import React from "react";

const TrendingTokens = () => {
  return (
    <section id="trending-tokens" className="bg-C4C4C4 bg-opacity-15 text-primary">
      <div className="py-14 max-w-1440 mx-auto px-5 sm:px-7 md:px-10 lg:px-20">
        <SectionTitle viewAll title="Trending Tokens"></SectionTitle>
        <SlickSlider totalData={5}>
          {Array.apply(null, Array(5)).map((a, i) => (
            <TokensCard key={i} />
          ))}
        </SlickSlider>
      </div>
    </section>
  );
};

export default TrendingTokens;
