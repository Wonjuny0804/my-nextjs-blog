import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

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
