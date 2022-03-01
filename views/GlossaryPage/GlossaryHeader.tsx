import LargeTitle from "@components/LargeTitle";
import Tags from "@components/Tags";
import React from "react";
import GlossarySearch from "./GlossarySearch";

const GlossaryHeader: React.FC = () => {
  const [activeChar, setActiveChar] = React.useState<string>("A");
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  return (
    <div className="text-primary pt-28 pb-14 max-w-1440 mx-auto px-20">
      <div className="max-w-4xl mx-auto">
        <LargeTitle>Glossary</LargeTitle>
        <p className="max-w-622 mt-5 text-center mx-auto leading-6 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper consec dolor
          elementum.
        </p>
        <div className="mt-14 flex justify-center flex-wrap w-full mx-auto">
          {alphabet.map((char) => (
            <Tags onClick={(e) => setActiveChar(e)} active={activeChar === char} key={char}>
              {char}
            </Tags>
          ))}
        </div>
      </div>
      <GlossarySearch activeChar={activeChar} />
    </div>
  );
};

export default GlossaryHeader;
