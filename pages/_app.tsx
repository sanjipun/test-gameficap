import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Toast from '@components/Toast/Toast';
import NextNProgress from 'nextjs-progressbar';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="relative" style={{ height: 1000 }}>
      <Toast />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: 'ease', speed: 500, showSpinner: false }}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
