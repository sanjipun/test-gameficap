import React from 'react';
import type { NextPage } from 'next';
import SEO from '@components/SEO/SEO';
import Loader from '@components/Loader/Loader';
import { useToast } from '@store/Toast.store';
import Modal from '@components/Modal/Modal';
import LandingPage from '@views/HomePage/LandingPage';
import TrendingNews from '@views/HomePage/TrendingNews';
import FavoriteTokens from '@views/HomePage/FavoriteTokens';
import TrendingTokens from '@views/HomePage/TrendingTokens';
import TopNFTs from '@views/HomePage/TopNFTs';
import TrendingGames from '@views/HomePage/TrendingGames';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import client from '@utils/apollo-client';

type HomePageProps = {
  data: any;
};
const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const { toast } = useToast();
  const [showModal, setSHowModal] = React.useState<boolean>(false);
  //console.log(data);

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
      {/*<button
        onClick={() => {
          toast({ message: 'Success', type: 'success' });
          setSHowModal(true);
        }}>
        Toast
      </button>
      <Modal showModal={showModal}>
        <div className="flex items-center justify-center">
          Hello World Muhahahahahaha
          <button onClick={() => setSHowModal(false)}>Close</button>
        </div>
      </Modal>
      <Loader />*/}
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        headers {
          id
          headerType
          title
          paragraph
          buttonText
          buttonUrl
          image {
            url
          }
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
}
