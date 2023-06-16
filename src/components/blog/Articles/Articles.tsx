import React, { FC } from "react";
import dynamic from "next/dynamic";
import moment from "moment";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { DocumentData } from "firebase/firestore";

const PostItem = dynamic(() => import("../Post/PostItem"));
interface Props {
  posts: Array<{
    id: string;
    data: DocumentData;
  }>;
  grid: boolean;
}

const Articles: FC<Props> = ({ posts, grid }) => {
  return (
    <AnimatePresence>
      <ul
        className={`mt-[160px] flex flex-col md:grid md:grid-cols-2 justify-self-stretch gap-20 list-none ${
          grid && "lg:grid lg:grid-cols-3"
        }`}
      >
        {posts.map((post, index) => (
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.2,
            }}
            key={post.id}
            className="h-full"
          >
            <Link href={`/posts/${post.data.url}`} passHref>
              <PostItem
                id={post.id}
                title={post.data.title}
                excerpt={post.data.excerpt}
                tags={post.data.tags}
                createdDate={moment
                  .unix(post.data.createdAt)
                  .format("MMM Do YYYY")}
                thumbnailImageUrl={post.data.thumbnailImage.imageUrl}
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </AnimatePresence>
  );
};

export default Articles;
