import "../styles/globals.css";
import "animate.css";
// import("tw-elements");

// import dynamic from "next/dynamic";

// const OwnComponentNoServerRendering = dynamic(() => import("tw-elements"), {
//   ssr: false,
// });

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
