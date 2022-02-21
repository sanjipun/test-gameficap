import client from '@utils/apollo-client';
import SlugTitleDetails from '@views/ViewAllPage/SlugTitlePage/SlugTitleDetails';
import SlugTitleHeader from '@views/ViewAllPage/SlugTitlePage/SlugTitleHeader';
import { gql } from 'apollo-boost';
import React from 'react';

interface SlugTitleProps {
  path: string;
}

const SlugTitle: React.FC<SlugTitleProps> = ({ path }) => {
  return (
    <div className="py-28">
      <SlugTitleHeader title={path.split('-').join(' ')} />
      <SlugTitleDetails />
    </div>
  );
};

export default SlugTitle;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        pages {
          title
        }
      }
    `,
  });

  const paths = data?.pages?.map((title) => ({
    params: { slug: 'trending-news', title: title.title },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const title = context.params.title;
  return {
    props: { path: title },
  };
}
