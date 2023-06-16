import React, { FC } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Footer = dynamic(() => import("../../components/common/Footer/Footer"));
const Projects = dynamic(
  () => import("../../components/about/Projects/Projects")
);
const Resume = dynamic(() => import("../../components/about/Resume/Resume"));
const NavBar = dynamic(() => import("../../components/common/NavBar"));
const Top = dynamic(() => import("../../components/about/Top/Top"));

const AboutPage: FC = () => {
  return (
    <>
      <Head>
        <title>Frontend dev Wonjun</title>
      </Head>
      <NavBar />
      <main className={`lg:w-[800px] lg:m-auto`}>
        <Top />
        <Resume />
        {/* <Projects /> */}
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
