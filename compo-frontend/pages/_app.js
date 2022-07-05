import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import "animate.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
