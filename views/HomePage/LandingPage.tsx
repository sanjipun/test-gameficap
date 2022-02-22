import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  const { data, loading, error } = useQuery(QUERY);
  return (
    <div id="landing-page" className="bg-FAFAFA">
      <section className="grid grid-cols-2 max-w-1440 mx-auto px-20 py-36">
        <section>
          <h1 className="text-5xl leading-56 text-primary">{data?.headers[0]?.title}</h1>
          <p className="mt-6 text-base">{data?.headers[0]?.paragraph}</p>
          <button className="bg-slate-500 text-white px-20 py-3 mt-6 rounded-md">
            <a href={data?.headers[0]?.buttonUrl}>{data?.headers[0]?.buttonText}</a>
          </button>
        </section>
        <section className="flex justify-center items-center">
          <img src={data?.headers[0]?.image?.url} className="w-20 h-20" alt="random image" />
        </section>
      </section>
    </div>
  );
};

export default LandingPage;

const QUERY = gql`
  query MyQuery {
    headers {
      id
      headerType
      title
      paragraph
      buttonText
      buttonUrl
      image {
        url
      }
    }
  }
`;
