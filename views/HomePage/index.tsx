import React from 'react';
import type { NextPage } from 'next';
import SEO from '@components/SEO/SEO';
import Loader from '@components/Loader/Loader';
import { useToast } from '@store/Toast.store';
import Modal from '@components/Modal/Modal';
import LandingPage from '@views/HomePage/LandingPage';
import TrendingNews from '@views/HomePage/TrendingNews';

const HomePage: NextPage = () => {
  const { toast } = useToast();
  const [showModal, setSHowModal] = React.useState<boolean>(false);

  return (
    <div>
      <SEO
        title="GameFi Prices, Charts and Market Capitalization | GameFiCap"
        description="Home for all blockchain games, prices, charts and market capitalization."
      />
      <LandingPage />
      <TrendingNews />
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
