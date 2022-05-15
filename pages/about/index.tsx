import React, { FC } from "react";
import dynamic from "next/dynamic";
import Projects from "../../components/about/Projects/Projects";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";

const Resume = dynamic(() => import("../../components/about/Resume/Resume"));
const LandingHeader = dynamic(
  () => import("../../components/Landing/LandingHeader")
);
const Top = dynamic(() => import("../../components/about/Top/Top"));

const AboutPage: FC = () => {
  return (
    <>
      <Head>
        <title>Frontend dev Wonjun</title>
      </Head>
      <LandingHeader />
      <main className={`lg:w-[800px] lg:m-auto`}>
        <Top />
        <Resume />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
