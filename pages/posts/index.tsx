import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Articles from "../../components/Articles/Articles";
import Footer from "../../components/common/Footer/Footer";
import LandingHeader from "../../components/Landing/NavBar";
import { getAllPosts, PostMeta } from "../api/getAllPosts";

const PostsPage = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <>
      <title>wonjundev.tech all posts</title>
      <main>
        <LandingHeader />

        <AnimatePresence>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
            }}
            className={`px-4 lg:w-[1024px] lg:m-auto xl:w-[1280px] `}
          >
            <Articles posts={posts} grid={true} />
          </motion.section>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts().map((post) => post.meta);

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
