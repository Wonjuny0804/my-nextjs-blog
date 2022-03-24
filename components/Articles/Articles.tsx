import React, { FC } from "react";
import { PostMeta } from "../../pages/api/getAllPosts";
import Link from "next/link";
import moment from "moment";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  posts: PostMeta[];
}

const Articles: FC<Props> = ({ posts }) => {
  return (
    <AnimatePresence>
      <ul className={`mt-10 flex flex-col gap-14`}>
        {posts.map((post, index) => (
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.2,
            }}
            key={post.slug}
            className={`group`}
          >
            <Link href={`/posts/${post.slug}`}>
              <a>
                <h4
                  className={`text-[26px] group-hover:text-primary-blue transition-all duration-700 font-bold font-notoSans text-primary-dark lg:text-[32px]`}
                >
                  {post.title}
                </h4>
                <p
                  className={`text-secondary-dark font-base font-notoSans font-regular lg:mt-4`}
                >
                  {post.excerpt}
                </p>
                <span
                  className={`block font-notoSans text-xs text-tertiary-dark font-normal lg:text-base lg:mt-3`}
                >
                  {moment(post.date).format("YYYY.MM.DD")}
                </span>
              </a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </AnimatePresence>
  );
};

export default Articles;
