import BreadCrumbs from "@components/BreadCrumbs";
import TokenHeader from "@views/TokensPage/TokenHeader";
import { useRouter } from "next/router";
import React from "react";

interface TokensSlugProps {}

const TokensSlug: React.FC<TokensSlugProps> = () => {
  const router = useRouter();
  const token = router?.query?.token as string;
  console.log(token);
  return (
    <div id="token-details-page" className="max-w-1440 mx-auto px-20 mt-10">
      <BreadCrumbs data={["Tokens List", token && token?.toUpperCase()]} />
      <TokenHeader />
    </div>
  );
};

export default TokensSlug;
