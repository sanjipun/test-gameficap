import SectionTitle from "@components/SectionTitle";
import TableBody from "@components/TableBody";
import TableHead from "@components/TableHead";
import { GAMEFICAPPROJECTS_DATA } from "@constants/GAMEFICAPPROJECTS_DATA";
import React from "react";

const TAGS = [{ name: "Tokens" }, { name: "Games" }, { name: "NFTs" }];
const GameFiCapProjects = () => {
  const [currentTag, setCurrentTag] = React.useState<string>("Tokens");
  return (
    <section id="game-fi-cap-projects" className="bg-C4C4C4 bg-opacity-15 text-primary leading-6">
      <div className="max-w-1440 mx-auto px-20 py-14">
        <SectionTitle viewAll title="Game Fi Cap Projects"></SectionTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper consec elementum
          augue scelerisque mi aliquet etiam urna.
        </p>
        <div className="py-9 flex justify-start items-center">
          {TAGS.map((tag) => (
            <h1
              onClick={() => setCurrentTag(tag.name)}
              className={`mr-5 ${
                tag.name === currentTag ? "bg-E3E9EE" : "bg-FAFAFA"
              } px-8 py-3 rounded cursor-pointer`}
              key={tag.name}
            >
              {tag.name}
            </h1>
          ))}
        </div>
        <table className="w-full">
          <thead className="border border-C4C4C4 border-opacity-50">
            <TableHead />
          </thead>
          <tbody className="border border-C4C4C4 border-opacity-50">
            {GAMEFICAPPROJECTS_DATA.map((tokenData) => (
              <TableBody key={tokenData.tokenName} tokenData={tokenData} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GameFiCapProjects;
