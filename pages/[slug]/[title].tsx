import SlugTitleDetails from '@views/ViewAllPage/SlugTitlePage/SlugTitleDetails';
import SlugTitleHeader from '@views/ViewAllPage/SlugTitlePage/SlugTitleHeader';
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
  const paths = [{ params: { slug: 'trending-news', title: 'how-to-ride-the-dip' } }];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const title = context.params.title;
  //const res = await fetch(`https://localhost:3000/view-all/${params.slug}`);
  //const page = await res.json();
  return {
    props: { path: title },
  };
}
