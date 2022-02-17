import React from 'react';
import type { NextPage } from 'next';
import SEO from '../components/SEO/SEO';
import Loader from '../components/Loader/Loader';
import { useToast } from '@store/Toast.store';
import Modal from '@components/Modal/Modal';

const Home: NextPage = () => {
  const { toast } = useToast();
  const [showModal, setSHowModal] = React.useState<boolean>(false);

  return (
    <div className="container mx-auto px-10">
      <SEO
        title="GameFi Prices, Charts and Market Capitalization | GameFiCap"
        description="Home for all blockchain games, prices, charts and market capitalization."
      />
      Hello GameFiCap
      <button
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
      <Loader />
    </div>
  );
};

export default Home;
