import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Toast from '@components/Toast/Toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="relative" style={{ height: 1000 }}>
      <Toast />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
