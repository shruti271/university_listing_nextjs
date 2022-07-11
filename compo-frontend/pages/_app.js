import Head from 'next/head';
import { Provider } from 'react-redux';

import Footer from '../components/Footer';
import Header from '../components/Header';
import store from '../store/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
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
