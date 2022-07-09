import Head from 'next/head';
import {  store } from "../redux/store";
import { Provider } from 'react-redux';
import Script from 'next/script';

import Footer from '../components/Footer';
import Header from '../components/Header';
import getStore from '../store/store';
import '../styles/globals.css';
import "animate.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-YQTS4N0T2M`} strategy="afterInteractive"/>
      <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YQTS4N0T2M');
      `}
      </Script>
      <Provider store={getStore(pageProps.initialState)}>
        <Head>
          <title>Composite</title>
        </Head>
        <Header />
        <main>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        </main>
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
