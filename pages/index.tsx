import React from "react";
import LandingHeader from "../components/Landing/LandingHeader";
import Articles from "../components/Articles/Articles";
import { getAllPosts, PostMeta } from "./api/getAllPosts";

const Home = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <>
      <LandingHeader />
      <section className={`px-4 lg:w-[600px] lg:m-auto `}>
        <Articles posts={posts} />
      </section>
    </>
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
