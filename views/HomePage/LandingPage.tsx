import { gql, useQuery } from "@apollo/client";
import React from "react";

const LandingPage = () => {
  //const { data } = useQuery(QUERY);
  return (
    <div id="landing-page" className="bg-FAFAFA">
      <section className="grid grid-cols-2 max-w-1440 mx-auto px-20 py-36">Hello World</section>
    </div>
  );
};

export default LandingPage;

//const QUERY = gql`
//  query MyQuery {
//    headers {
//      id
//      headerType
//      title
//      paragraph
//      buttonText
//      buttonUrl
//      image {
//        url
//      }
//    }
//  }
//`;
