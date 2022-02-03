import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

class NextDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          {/*<link rel="shortcut icon" href="/assets/images/favicon.png" />*/}
          {/*<link
            rel="preload"
            href="/assets/fonts/Eurostile.otf"
            as="font"
            crossOrigin="anonymous"
          />*/}
          {/*<link
                        rel="preload"
                        href="/assets/fonts/BebasNeue/BebasNeuePro-Middle.woff2"
                        as="font"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/OpenSans/open-sans-v20-latin-regular.woff2"
                        as="font"
                        crossOrigin="anonymous"
                    />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NextDocument;
