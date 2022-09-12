/* eslint-disable react/no-unescaped-entities */
import React from "react";
import dynamic from "next/dynamic";
import Script from "next/script";

import { getAllPosts } from "./api/getAllPosts";
import { getAllTags } from "./api/getAllTags";
import { AnimatePresence, motion } from "framer-motion";
import { DocumentData } from "firebase/firestore";

const ShowAllTags = dynamic(
  () => import("../components/Landing/ShowAllTags/ShowAllTags")
);
const Layout = dynamic(() => import("../components/common/Layout"));
const Articles = dynamic(() => import("../components/blog/Articles/Articles"));

const Home = ({
  posts,
  tags,
}: {
  posts: Array<{
    id: string;
    data: DocumentData;
  }>;
  tags: string[];
}) => {
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
        <div className="mx-4 font-workSans lg:w-[1028px] lg:m-auto lg:min-h-[560px]">
          <h1 className="text-3xl md:text-5xl md:mt-12 md:mb-14 font-bold mt-8 mb-9 text-primary-dark">
            Welcome to a developers tech blog
          </h1>
          <p className="md:text-lg">
            Where you are right now is a tech blog of mine. I am a developer
            based in{" "}
            <a
              className="underline"
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
            <span className="font-medium">
              <a href="https://nextjs.org/" target={"_blank"} rel="noreferrer">
                Nextjs
              </a>{" "}
              and Typescript
            </span>
            . For Backend data and storage I am using{" "}
            <a
              href="https://firebase.google.com/"
              target={"_blank"}
              rel="noreferrer"
              className="font-medium"
            >
              Firebase
            </a>{" "}
            from Google. If you have any inqueries please{" "}
            <a href="mailTo:wonwonjun@gmail.com" className="underline">
              send me a mail
            </a>{" "}
            and I'll get back to you.
          </p>
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
