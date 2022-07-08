import Head from 'next/head';
import { Provider } from 'react-redux';
import {  store } from "../redux/store";

import Footer from '../components/Footer';
import Header from '../components/Header';
import getStore from '../store/store';
import '../styles/globals.css';
import "animate.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={getStore(pageProps.initialState)}>
        <Head>
          <title>Composite</title>
        </Head>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
