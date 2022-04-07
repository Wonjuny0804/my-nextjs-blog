import React, { FC } from "react";
import Top from "../../components/about/Top/Top";
import LandingHeader from "../../components/Landing/LandingHeader";

const AboutPage: FC = () => {
  return (
    <>
      <LandingHeader />
      <main className={`lg:w-[800px] lg:m-auto`}>
        <Top />
      </main>
    </>
  );
};

export default AboutPage;
