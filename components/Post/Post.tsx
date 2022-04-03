import moment from "moment";
import React, { FC } from "react";

interface Props {
  post: {
    title: string;
    excerpt: string;
    date: string;
    tags: Array<string>;
  };
}

const Post: FC<Props> = ({ post }) => {
  return (
    <>
      <h4
        className={`text-[18px] group-hover:text-primary-blue transition-all duration-700 font-bold font-notoSans text-primary-dark lg:text-[24px]`}
      >
        {post.title}
      </h4>
      <p
        className={`text-secondary-dark text-sm mt-2 group-hover:text-secondary-dark lg:text-sm font-workSans lg:mt-4`}
      >
        {post.excerpt}
      </p>
      <ul className={`flex gap-3 mt-3 mb-3`}>
        {post.tags.map((tag) => (
          <span
            key={`post-${post.title}-${tag}`}
            className={`block font-workSans leading-[20px] text-xs text-[#555770] px-[10px] py-[3px] font-base bg-[#f2f2f5] rounded-3xl `}
          >
            {tag}
          </span>
        ))}
      </ul>
      <span
        className={`block font-workSans font-light text-xs text-tertiary-dark lg:text-base  lg:mt-3`}
      >
        {moment(post.date).format("YYYY.MM.DD")}
      </span>
    </>
  );
};

export default Post;
