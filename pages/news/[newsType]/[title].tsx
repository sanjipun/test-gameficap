import React from "react";
import NewsDetails from "@views/NewsPage/SlugTitlePage/NewsDetails";
import NewsHeader from "@views/NewsPage/SlugTitlePage/NewsHeader";
import { useRouter } from "next/router";
import NewsAddComment from "@views/NewsPage/SlugTitlePage/NewsAddComment";
import NewsCommentList from "@views/NewsPage/SlugTitlePage/NewsCommentList";
import RelatedNews from "@views/NewsPage/SlugTitlePage/RelatedNews";
import { gql, useQuery } from "@apollo/client";
import Error from "pages/_error";

const SlugTitle = () => {
  const router = useRouter();
  const { title } = router.query;
  const { data } = useQuery(QUERY, {
    variables: {
      slug: title,
    },
  });

  if (data?.articles.length <= 0) {
    return <Error statusCode={404} />;
  }

  return (
    <div id="single-news-detail-page" className="pt-28 text-primary">
      <div className="px-32">
        <NewsHeader title={(title as string)?.split("-").join(" ")} />
        <NewsDetails data={data} />
      </div>
      <NewsAddComment />
      <NewsCommentList />
      <RelatedNews />
    </div>
  );
};

export default SlugTitle;

const QUERY = gql`
  query MyQuery($slug: String) {
    articles(slug: $slug) {
      id
      slug
      author
      date
      tags {
        name
      }
      categories {
        name
      }
      body {
        field
        rawValue
        ... on ImageChooserBlock {
          image {
            src
          }
        }
      }
    }
  }
`;
