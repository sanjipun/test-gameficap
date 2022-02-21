import { useQuery } from '@apollo/client';
import { gql } from 'apollo-boost';
import { useRouter } from 'next/router';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { CgProfile } from 'react-icons/cg';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { AiFillTags } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';

const SlugTitleDetails = () => {
  const router = useRouter();
  const { loading, data, fetchMore } = useQuery(QUERY, {
    variables: {
      slug: router.query.title,
    },
  });

  return (
    <div className="max-w-1440 mx-auto px-20 text-primary leading-6">
      <div className="mt-14 flex">
        <h1 className="flex items-center mr-6">
          <CgProfile className="mr-1" /> {data?.page?.author}
        </h1>
        <h1 className="flex items-center mr-6">
          <BsCalendar2DateFill className="mr-1" /> {data?.page?.date}
        </h1>
        <h1 className="flex items-center mr-6">
          <AiFillTags className="mr-1" /> tag
        </h1>
        <h1 className="flex items-center mr-6">
          <FaRegCommentDots className="mr-1" /> 14 Comments
        </h1>
      </div>
      <div className="w-full border border-C9D2D8 mt-14 rounded-xl overflow-hidden h-96 flex items-center justify-center">
        <img src={data?.page?.body[2]?.image?.src} />
      </div>
      <div className="mt-12">{ReactHtmlParser(data?.page?.body[1].rawValue)}</div>
    </div>
  );
};

export default SlugTitleDetails;

const QUERY = gql`
  query MyQuery($slug: String) {
    page(slug: $slug) {
      ... on NewsArticlePage {
        title
        date
        author
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
  }
`;
