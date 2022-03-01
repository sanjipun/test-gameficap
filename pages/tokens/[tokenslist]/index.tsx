import { useRouter } from "next/router";
import React from "react";

const index: React.FC = () => {
  const router = useRouter();
  return (
    <div id="tokens-list-type" className="max-w-1440 mx-auto px-20">
      {router.query.tokenslist}
    </div>
  );
};

export default index;
