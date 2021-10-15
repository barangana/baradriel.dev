import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Head from "next/head";
import info from "../utils/info";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{info.title}</title>
        <meta name="description" content={info.who_description} />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export default MyApp;
