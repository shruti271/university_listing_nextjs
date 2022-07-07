import "../styles/globals.css";
import "animate.css";

import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#828282",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        {/* <ThemeProvider theme={theme}> */}
          <Component {...pageProps} />
        {/* </ThemeProvider> */}
      </main>
    </>
  );
}

export default MyApp;
