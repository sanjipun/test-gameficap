import GlossaryBody from "@views/GlossaryPage/GlossaryBody";
import GlossaryHeader from "@views/GlossaryPage/GlossaryHeader";
import React from "react";

const Glossary: React.FC = () => {
  return (
    <div id="glossary-page">
      <GlossaryHeader />
      <GlossaryBody />
    </div>
  );
};

export default Glossary;
