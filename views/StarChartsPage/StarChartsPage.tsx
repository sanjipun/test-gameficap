import SectionTitle from "@components/SectionTitle";
import React from "react";

const StarChartsPage: React.FC = () => {
  return (
    <div id="star-charts-page" className="mt-6">
      <SectionTitle title="Star Charts"></SectionTitle>
      <p>
        Non-Fungible Token (NFT) refers to digital assets with unique characteristics. Unlike
        bitcoin, ethereum, or other tokens that are fungible and can be traded with one another,
        each NFT assets are distinct from each other. Real world example for NFTs include art,
        trading cards, game items, land titles, and more. NFT Floor price refers to the lowest price
        of the NFT that is put on sale for a given collection.
      </p>
    </div>
  );
};

export default StarChartsPage;
