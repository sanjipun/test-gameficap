import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface GlossarySearchProps {
  activeChar: string;
}

const GlossarySearch: React.FC<GlossarySearchProps> = ({ activeChar }) => {
  return (
    <div id="glossary-search" className="flex justify-between items-center py-9 mt-16 px-32">
      <h1 className="text-5xl leading-56 text-white text-opacity-70 text-shadow">{activeChar}</h1>
      <div className="border w-56 flex justify-between items-center rounded-md h-10 bg-black bg-opacity-20">
        <input
          type="search"
          placeholder="search"
          className="h-full bg-black bg-opacity-0 w-full px-3 rounded-md"
        />
        <AiOutlineSearch className="text-3xl mx-2 text-white" />
      </div>
    </div>
  );
};

export default GlossarySearch;
