import "../styles/globals.css";
import type { AppProps } from "next/app";
import Toast from "@components/Toast/Toast";
import NextNProgress from "nextjs-progressbar";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApolloProvider } from "@apollo/client";
import client from "@utils/apollo-client";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className="relative" style={{ height: 1000 }}>
    <ApolloProvider client={client}>
      <Toast />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
        options={{ easing: "ease", speed: 500, showSpinner: false }}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  </main>
);

export default MyApp;
