import React, { FC } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Footer = dynamic(() => import("../../components/Footer/Footer")) as any;
const Projects = dynamic(
  () => import("../../components/about/Projects/Projects")
) as any;
const Resume = dynamic(
  () => import("../../components/about/Resume/Resume")
) as any;
const LandingHeader = dynamic(
  () => import("../../components/Landing/LandingHeader")
) as any;
const Top = dynamic(() => import("../../components/about/Top/Top")) as any;

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
