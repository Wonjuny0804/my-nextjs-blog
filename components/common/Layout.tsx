import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer/Footer";

interface Props {
  children: React.ReactNode;
  fullWidth?: boolean;
  metaData?: {
    title?: string;
    description?: string;
    author?: string;
    image?: string;
  };
}

const Layout = (props: Props) => {
  const { metaData, children, fullWidth } = props;

  return (
    <>
      <Head>
        <title>
          {metaData?.title ?? "Frontend developer Wonjun's tech blog"}
        </title>
        <meta
          name="description"
          content={
            metaData?.description ??
            "This is Wonjun Jangs' tech blog. Where you can find contents for development and technology"
          }
        />
        <meta
          name="og:description"
          content={
            metaData?.description ??
            "This is Wonjun Jangs' tech blog. Where you can find contents for development and technology"
          }
        />
      </Head>
      <main>
        <NavBar />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
