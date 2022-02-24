import React from "react";
import type { NextPage } from "next";
import SEO from "@components/SEO/SEO";
import LandingPage from "@views/HomePage/LandingPage";
import TrendingNews from "@views/HomePage/TrendingNews";
import FavoriteTokens from "@views/HomePage/FavoriteTokens";
import TrendingTokens from "@views/HomePage/TrendingTokens";
import TopNFTs from "@views/HomePage/TopNFTs";
import TrendingGames from "@views/HomePage/TrendingGames";
import StarCharts from "@views/HomePage/StarCharts";
import GameFiCapProjects from "@views/HomePage/GameFiCapProjects";

const HomePage: NextPage = () => (
  <div>
    <SEO
      title="GameFi Prices, Charts and Market Capitalization | GameFiCap"
      description="Home for all blockchain games, prices, charts and market capitalization."
    />
    <LandingPage />
    <StarCharts />
    <FavoriteTokens />
    <GameFiCapProjects />
    <TrendingNews />
    <TrendingTokens />
    <TopNFTs />
    <TrendingGames />
  </div>
);

export default HomePage;
