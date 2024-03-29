import SectionTitle from "@components/SectionTitle";
import SlickSlider from "@components/SlickSlider";
import StarChart from "@components/StarChart";
import React from "react";

const StarChartsSection = () => {
  return (
    <div id="star-charts-section" className="bg-C4C4C4 bg-opacity-20  text-primary">
      <section className="py-14 max-w-1440 px-5 sm:px-7 md:px-10 lg:px-20 mx-auto">
        <SectionTitle viewAll title="Star Charts"></SectionTitle>
        <SlickSlider totalData={5}>
          {Array.apply(null, Array(5)).map((a, i) => (
            <StarChart key={i} />
          ))}
        </SlickSlider>
      </section>
    </div>
  );
};

export default StarChartsSection;
