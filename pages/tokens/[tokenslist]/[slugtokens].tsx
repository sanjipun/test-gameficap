import { useRouter } from "next/router";
import React from "react";

interface TokensSlugProps {}

const TokensSlug: React.FC<TokensSlugProps> = () => {
  const router = useRouter();
  console.log(router.query.slugtokens);
  return <div className="max-w-1440 mx-auto px-20">{router.query.slugtokens}</div>;
};

export default TokensSlug;
