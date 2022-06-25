import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import WithSubnavigation from "./index";

function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
  <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
