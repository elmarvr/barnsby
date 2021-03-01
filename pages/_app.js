import Head from "next/head";

import { ChakraProvider } from "@chakra-ui/react";
import { I18nProvider } from "../context/I18nContext";
import { NavProvider } from "../context/NavContext";
import theme from "../theme/theme";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900&display=swap"
          rel="stylesheet"
        />
        <title>Barnsby Consulting | Home</title>
      </Head>

      <ChakraProvider theme={theme}>
        <I18nProvider locales={pageProps.locales}>
          <NavProvider>
            <Component {...pageProps} />
          </NavProvider>
        </I18nProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
