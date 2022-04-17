import type { AppProps } from "next/app";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#2563eb"
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
