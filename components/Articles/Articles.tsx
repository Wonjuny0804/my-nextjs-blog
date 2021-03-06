import React, { FC } from "react";
import { PostMeta } from "../../pages/api/getAllPosts";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Post from "../Post/Post";

interface Props {
  posts: PostMeta[];
}

const Articles: FC<Props> = ({ posts }) => {
  return (
    <AnimatePresence>
      <ul className={`mt-10 flex flex-col gap-14 list-none`}>
        {posts.map((post, index) => (
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.2,
            }}
            key={post.slug}
            className={`group border-[3px] px-4 py-5 rounded-[3px] border-[#000000]`}
          >
            <Link href={`/posts/${post.slug}`}>
              <a>
                <Post post={post} />
              </a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </AnimatePresence>
  );
};

export default Articles;
