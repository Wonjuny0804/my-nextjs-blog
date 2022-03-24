import React, { FC } from "react";
import { PostMeta } from "../../pages/api/getAllPosts";
import Link from "next/link";
import moment from "moment";

interface Props {
  posts: PostMeta[];
}

const Articles: FC<Props> = ({ posts }) => {
  return (
    <ul className={`mt-10 flex flex-col gap-14`}>
      {posts.map((post) => (
        <li key={post.slug} className={`group`}>
          <Link href={`/posts/${post.slug}`}>
            <a>
              <h4
                className={`text-[26px] group-hover:text-primary-blue font-bold font-notoSans text-primary-dark lg:text-[32px]`}
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
        </li>
      ))}
    </ul>
  );
};

export default Articles;
