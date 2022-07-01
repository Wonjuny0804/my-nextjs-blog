import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />

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
