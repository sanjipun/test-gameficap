import React from "react";
import NewsDetails from "@views/NewsPage/SingleNewsPage/NewsDetails";
import NewsHeader from "@views/NewsPage/SingleNewsPage/NewsHeader";
import { useRouter } from "next/router";
import NewsAddComment from "@views/NewsPage/SingleNewsPage/NewsAddComment";
import NewsCommentList from "@views/NewsPage/SingleNewsPage/NewsCommentList";
import RelatedNews from "@views/NewsPage/SingleNewsPage/RelatedNews";
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
      <div className="lg:px-32">
        <NewsHeader title={(title as string)?.split("-").join(" ")} />
      </div>
      <NewsDetails data={data} />
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
