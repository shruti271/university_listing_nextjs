import Head from 'next/head';
import { Provider } from 'react-redux';
import Script from 'next/script';

import store from '../store/store';
import '../styles/globals.css';
import 'animate.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-YQTS4N0T2M`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YQTS4N0T2M');
    `}
      </Script>
      <Provider store={store}>
        <Head>
          <title>Composite</title>
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
      </Provider>
    </>
  );
}

export default MyApp;
