import React, { FC } from "react";
import dynamic from "next/dynamic";

const Resume = dynamic(() => import("../../components/about/Resume/Resume"));
const LandingHeader = dynamic(
  () => import("../../components/Landing/LandingHeader")
);
const Top = dynamic(() => import("../../components/about/Top/Top"));

const AboutPage: FC = () => {
  return (
    <>
      <LandingHeader />
      <main className={`lg:w-[800px] lg:m-auto`}>
        <Top />
        <Resume />
      </main>
    </>
  );
};

export default AboutPage;
