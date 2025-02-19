import React from "react";
import "../../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  // Use the layout defined at the page level, if available

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
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
