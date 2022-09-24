import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import PostServiceInstance from "../../service/posts";
import { DocumentData } from "firebase/firestore";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../../components/common/Layout"));
const Articles = dynamic(
  () => import("../../components/blog/Articles/Articles")
);

interface Props {
  posts: Array<{
    id: string;
    data: DocumentData;
  }>;
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

export const getStaticProps = async () => {
  try {
    const posts = await PostServiceInstance.getPosts({ published: true });
    const postsTimeMap = posts?.map((post) => ({
      ...post,
      data: {
        ...post.data,
        createdAt: post.data.createdAt.seconds,
        updatedAt: post.data.updatedAt.seconds,
        thumbnailImage: post.data.thumbnailImage?.imageUrl
          ? post.data.thumbnailImage
          : {
              imageUrl: "/posts/default-image.png",
            },
      },
    }));

    postsTimeMap?.sort(
      (postA, postB) => postB.data.createdAt - postA.data.createdAt
    );

    return {
      props: {
        posts: postsTimeMap,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default PostsPage;
