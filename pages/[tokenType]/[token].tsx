import BreadCrumbs from "@components/BreadCrumbs";
import MarketStatistics from "@views/TokensPage/MarketStatistics";
import MoreInfo from "@views/TokensPage/MoreInfo";
import TokenChart from "@views/TokensPage/TokenChart";
import TokenHeader from "@views/TokensPage/TokenHeader";
import TokenInfo from "@views/TokensPage/TokenInfo";
import { useRouter } from "next/router";
import React from "react";

const TokensSlug: React.FC = () => {
  const router = useRouter();
  const token = router?.query?.token as string;
  return (
    <div id="token-details-page" className="py-10 bg-C4C4C4 bg-opacity-5">
      <BreadCrumbs data={["Tokens List", token && token?.toUpperCase()]} />
      <TokenHeader />
      <TokenInfo />
      <TokenChart />
      <MarketStatistics />
      <MoreInfo />
    </div>
  );
};

export default TokensSlug;

export const getStaticPaths = async () => {
  const paths = ["roy", "rar", "groy"].map((path) => ({
    params: { tokenType: "tokens", token: path },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  return { props: params };
};
