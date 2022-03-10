import SectionTitle from "@components/SectionTitle";
import React from "react";
import TokensCard from "@components/TokensCard";
import SlickSlider from "@components/SlickSlider";

const FavoriteTokens = () => {
  return (
    <section id="favorite-tokens" className="bg-C4C4C4 bg-opacity-15 text-primary">
      <div className="py-14 max-w-1440 mx-auto px-5 sm:px-7 md:px-10 lg:px-20">
        <SectionTitle viewAll title="Favorite Tokens"></SectionTitle>
        <SlickSlider totalData={5}>
          {Array.apply(null, Array(5)).map((a, i) => (
            <TokensCard key={i} />
          ))}
        </SlickSlider>
      </div>
    </section>
  );
};

export default FavoriteTokens;
