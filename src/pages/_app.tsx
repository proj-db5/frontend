import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "src/styles/theme";
import { GlobalStyle } from "src/styles/GlobalStyles";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
