import React from "react";
import dynamic from "next/dynamic";
import Script from "next/script";

import { getAllPosts, PostMeta } from "./api/getAllPosts";
import { getAllTags } from "./api/getAllTags";
import { AnimatePresence, motion } from "framer-motion";

const ShowAllTags = dynamic(
  () => import("../components/Landing/ShowAllTags/ShowAllTags")
);
const Layout = dynamic(() => import("../components/common/Layout"));
const Articles = dynamic(() => import("../components/Articles/Articles"));

const Home = ({ posts, tags }: { posts: PostMeta[]; tags: string[] }) => {
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
        }}
      >
        <AnimatePresence>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
            }}
            className={`px-4 lg:w-[1000px] lg:m-auto lg:grid lg:grid-cols-[640px_300px] gap-10 lg:items-start`}
          >
            <Articles posts={posts} />
            <ShowAllTags tags={tags} />
          </motion.section>
        </AnimatePresence>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  const allTags = getAllTags() ?? [];

  return {
    props: {
      posts,
      tags: allTags,
    },
  };
}

export default Home;
