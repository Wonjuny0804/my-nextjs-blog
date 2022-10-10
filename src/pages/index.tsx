/* eslint-disable react/no-unescaped-entities */
import React from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import MainScene from "components/Landing/MainScene/MainScene";

const Layout = dynamic(() => import("../components/common/Layout"));

const Home = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${
          process.env.GA_ID || process.env.NEXT_PUBLIC_GA_ID
        }`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){window.dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', '${
           process.env.GA_ID || process.env.NEXT_PUBLIC_GA_ID
         }');
        `}
      </Script>
      <Layout
        metaData={{
          title: "wonjundev.tech",
          description:
            "This is the main page of Wonjundev tech blog. Please come and rest all programmers",
        }}
      >
        <div className={`relative`}>
          <div className="mx-4 font-montserrat xl:w-[1280px] lg:mt-16 lg:m-auto">
            <h1 className="text-white text-3xl md:text-5xl lg:text-[96px] lg:w-[642px] underline underline-offset-[10px] md:mt-12 md:mb-14 font-bold mt-8 mb-9 xl:leading-[120px] decoration-[4px] ">
              Welcome to a developers tech blog
            </h1>
            <p className="md:text-lg text-[#9D9D9D] lg:w-[427px]">
              Where you are right now is a tech blog of mine. I am a developer
              based in{" "}
              <a
                className="underline text-white"
                href="https://www.google.com/maps/place/Seoul/data=!4m5!3m4!1s0x357ca2012d5c39cf:0x7e11eca1405bf29b!8m2!3d37.566535!4d126.9779692"
                target={"_blank"}
                rel="noreferrer"
              >
                Seoul
              </a>
              .
              <br />
              <br />
              This blog was built using{" "}
              <span className="font-medium text-white">
                <a
                  href="https://nextjs.org/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Nextjs
                </a>{" "}
                and Typescript
              </span>
              . For Backend data and storage I am using{" "}
              <a
                href="https://firebase.google.com/"
                target={"_blank"}
                rel="noreferrer"
                className="font-medium text-white"
              >
                NestJS and PostgreSQL
              </a>{" "}
              If you have any inqueries please{" "}
              <a
                href="mailTo:wonwonjun@gmail.com"
                className="underline text-white"
              >
                send me a mail
              </a>{" "}
              and I'll get back to you.
            </p>
          </div>
          <section className={`absolute top-0 right-[13%] w-[50vw]`}>
            <MainScene />
          </section>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
