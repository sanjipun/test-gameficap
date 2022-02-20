import AllCards from '@views/ViewAllPage/AllCards';
import Header from '@views/ViewAllPage/Header';
import React from 'react';

interface ViewAllProps {
  path: string;
}

const ViewAll: React.FC<ViewAllProps> = ({ path }) => {
  return (
    <div>
      <Header title={path} />
      <AllCards />
    </div>
  );
};

export default ViewAll;

export async function getStaticPaths() {
  const paths = [
    { params: { slug: 'trending-news' } },
    { params: { slug: 'trending-tokens' } },
    { params: { slug: 'top-nfts' } },
    { params: { slug: 'trending-games' } },
    { params: { slug: 'star-charts' } },
    { params: { slug: 'favorite-tokens' } },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  //const res = await fetch(`https://localhost:3000/view-all/${params.slug}`);
  //const page = await res.json();
  return {
    props: { path: slug },
  };
}
