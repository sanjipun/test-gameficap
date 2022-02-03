import Head from 'next/head';
import React from 'react';

type SEOProps = {
  title: string;
  description: string;
};

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default SEO;
