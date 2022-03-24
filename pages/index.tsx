import React from "react";
import LandingHeader from "../components/Landing/LandingHeader";
import Articles from "../components/Articles/Articles";
import { getAllPosts, PostMeta } from "./api/getAllPosts";
import { AnimatePresence, motion } from "framer-motion";

const Home = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <main>
      <LandingHeader />
      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
          }}
          className={`px-4 lg:w-[800px] lg:m-auto `}
        >
          <Articles posts={posts} />
        </motion.section>
      </AnimatePresence>
    </main>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return {
    props: {
      posts,
    },
  };
}

export default Home;
