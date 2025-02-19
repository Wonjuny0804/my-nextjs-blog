import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { NotionPostData } from "../../../types/NotionPostData";
import { mapPostData } from "utils/blog/blog";

const { Client } = require("@notionhq/client");

const Layout = dynamic(() => import("../../components/common/Layout/Layout"));
const Articles = dynamic(
  () => import("../../components/blog/Articles/Articles")
);

interface Props {
  posts: NotionPostData[];
}

const PostsPage = ({ posts }: Props) => {
  return (
    <Layout
      metaData={{
        title: "wonjundev.tech all posts",
        description:
          "This is a page where you can see all posts of Wonjun dev tech blog",
      }}
    >
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
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  // we only get the published posts

  const databaseId = process.env.NOTION_DATABASE_ID;

  const getPosts = async () => {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "status",
        select: {
          equals: "published",
        },
      },
    });
    return response.results;
  };

  const posts = await getPosts();
  const mappedPosts = posts.map(mapPostData);

  return {
    props: {
      posts: mappedPosts,
    },
  };
};

export default PostsPage;
