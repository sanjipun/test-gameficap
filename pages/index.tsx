import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import SEO from '@components/SEO/SEO';
import LandingPage from '@views/HomePage/LandingPage';
import TrendingNews from '@views/HomePage/TrendingNews';
import FavoriteTokens from '@views/HomePage/FavoriteTokens';
import TrendingTokens from '@views/HomePage/TrendingTokens';
import TopNFTs from '@views/HomePage/TopNFTs';
import TrendingGames from '@views/HomePage/TrendingGames';
import { gql } from '@apollo/client';
import client from '@utils/apollo-client';

const HomePage: NextPage = () => {
  return (
    <div>
      <SEO
        title="GameFi Prices, Charts and Market Capitalization | GameFiCap"
        description="Home for all blockchain games, prices, charts and market capitalization."
      />
      <LandingPage />
      <FavoriteTokens />
      <TrendingNews />
      <TrendingTokens />
      <TopNFTs />
      <TrendingGames />
    </div>
  );
};

export default HomePage;
