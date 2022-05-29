import Head from "next/head";
import React from "react";

const OfflinePage = () => {
  return (
    <div className={`w-screen h-screen flex justify-center items-center`}>
      <Head>
        <title>Wonjundev tech PWA</title>
      </Head>
      <h1>This is an offline fallback page</h1>
      <p>Sorry, currently you are offline! </p>
      <span>Please connect to internet!</span>
    </div>
  );
};

export default OfflinePage;
