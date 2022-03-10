import BreadCrumbs from "@components/BreadCrumbs";
import TableBody from "@components/TableBody";
import TableHead from "@components/TableHead";
import { GAMEFICAPPROJECTS_DATA } from "@constants/GAMEFICAPPROJECTS_DATA";
import { SlugToTitle } from "@utils/SlugToTitle";
import TokenTypeHeader from "@views/TokensPage/TokenTypeHeader";
import { useRouter } from "next/router";
import React from "react";

const index: React.FC = () => {
  const router = useRouter();
  console.log(router.query.tokenType);
  return (
    <div id="tokens-page">
      <BreadCrumbs data={[SlugToTitle(router?.query?.tokenType as string)]} />
      <div className="max-w-1440 mx-auto px-5 sm:px-7 md:px-10 lg:px-20">
        <TokenTypeHeader title={SlugToTitle(router?.query?.tokenType as string)} />
      </div>
      <div className="bg-C4C4C4 bg-opacity-15 py-12">
        <div className="max-w-1440 mx-auto px-5 sm:px-7 md:px-10 lg:px-20">
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
      </div>
    </div>
  );
};

export default index;

export const getStaticPaths = async () => {
  const paths = [
    "all-tokens",
    "trending-tokens",
    "gamefi-tokens",
    "recently-added-tokens",
    "token-price-by-market-cap",
  ].map((path) => ({
    params: { tokenType: path },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  return { props: params };
};
