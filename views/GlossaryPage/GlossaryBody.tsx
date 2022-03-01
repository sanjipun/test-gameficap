import React from "react";

interface GlossaryBodyProps {}

const GlossaryBody: React.FC<GlossaryBodyProps> = () => {
  return (
    <div className="max-w-1440 mx-auto px-44">
      {Array.apply(null, Array(5)).map((a, i) => (
        <GlossaryCard key={i} />
      ))}
    </div>
  );
};

export default GlossaryBody;

const GlossaryCard = () => {
  return (
    <div
      id="glossary-card"
      className="text-primary py-6 px-4 mb-10 hover:bg-C4C4C4 hover:bg-opacity-5 hover:border border-94A2AB border-opacity-30 rounded-md"
    >
      <h1 className="text-2xl leading-47">Apple</h1>
      <p>
        Our answers to common questions. If you don't find an answer, please contact our customer
        support and a representative will eble to assist you. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Ullamcorper consec elementum augue scelerisque mi aliquet etiam
        urna and a dummy text to make this section really long to take up space.
      </p>
    </div>
  );
};
