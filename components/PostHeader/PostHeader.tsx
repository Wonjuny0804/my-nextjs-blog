import moment from "moment";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import React, { FC } from "react";
import { PostMeta } from "../../pages/api/getAllPosts";
import LandingHeader from "../Landing/LandingHeader";

interface Props {
  post: {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: PostMeta;
  };
}

const PostHeader: FC<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <LandingHeader />
      <section className={`px-4 lg:w-[800px] lg:m-auto`}>
        <h1
          className={`text-[30px] lg:leading-[56px] mt-[40px] lg:mt-[100px] lg:text-[48px] font-bold font-workSans text-primary-dark`}
        >
          {post.meta.title}
        </h1>

        <div className={`flex items-center text-sm lg:text-base mt-3 lg:mt-4`}>
          <span className={`text-primary-dark font-workSans`}>
            {post.meta.author}
          </span>
          &nbsp;/&nbsp;
          <span className={`text-secondary-dark  font-workSans`}>
            {moment(post.meta.date).format("MMM DD, YYYY")}
          </span>
        </div>
      </section>
    </>
  );
};

export default PostHeader;