import BreadCrumbs from "@components/BreadCrumbs";
import TokenHeader from "@views/TokensPage/TokenHeader";
import { useRouter } from "next/router";
import React from "react";

const TokensSlug: React.FC = () => {
  const router = useRouter();
  const token = router?.query?.token as string;
  return (
    <div id="token-details-page" className="max-w-1440 mx-auto px-20 mt-10">
      <BreadCrumbs data={["Tokens List", token && token?.toUpperCase()]} />
      <TokenHeader />
    </div>
  );
};

export default TokensSlug;

export const getStaticPaths = async () => {
  const paths = ["roy", "rar", "groy"].map((path) => ({
    params: { token: path },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  return { props: params };
};
