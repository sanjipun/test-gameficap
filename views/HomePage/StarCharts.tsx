import SectionTitle from "@components/SectionTitle";
import SlickSlider from "@components/SlickSlider";
import StarChart from "@components/StarChart";
import React from "react";

const StarCharts = () => {
  return (
    <div id="top-nfts" className="bg-C4C4C4 bg-opacity-20  text-primary">
      <section className="py-14 max-w-1440 px-20 mx-auto">
        <SectionTitle title="Star Charts"></SectionTitle>
        <SlickSlider totalData={5}>
          {Array.apply(null, Array(5)).map((a, i) => (
            <StarChart key={i} />
          ))}
        </SlickSlider>
      </section>
    </div>
  );
};

export default StarCharts;
