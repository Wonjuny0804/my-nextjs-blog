import React, { FC } from "react";
import dynamic from "next/dynamic";
import moment from "moment";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NotionPostData } from "../../../../types/NotionPostData";

const PostItem = dynamic(() => import("../Post/PostItem"));
interface Props {
  posts: Array<NotionPostData>;
  grid: boolean;
}

const Articles: FC<Props> = ({ posts, grid }) => {
  return (
    <AnimatePresence>
      <ul
        className={`mt-[160px] flex flex-col  justify-self-stretch gap-20 list-none lg:max-w-[720px] `}
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
            <Link href={`/posts/${post.id}`} passHref>
              <PostItem
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                tags={post.tags}
                createdDate={new Date(post.createDateTime).toDateString()}
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </AnimatePresence>
  );
};

export default Articles;
