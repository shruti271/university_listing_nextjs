import "../styles/globals.css";
import "animate.css";

import {  store } from "../redux/store";
import { Provider } from "react-redux";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </main>
    </>
  );
}

export default MyApp;
