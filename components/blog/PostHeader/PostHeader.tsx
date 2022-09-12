import moment from "moment";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import React, { FC } from "react";
import { PostMeta } from "../../../pages/api/getAllPosts";
import LandingHeader from "../../common/NavBar";

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
          className={`text-[32px] lg:leading-[56px] mt-[40px] lg:mt-[100px] lg:text-[40px] font-bold font-workSans text-real-black`}
        >
          {post.meta.title}
        </h1>
        <div className={`flex justify-between items-center lg:mt-4`}>
          <div
            className={`flex items-center text-sm lg:text-base mt-3 lg:mt-0`}
          >
            <span className={`text-[#000000] font-workSans`}>
              {post.meta.author}
            </span>
            &nbsp;/&nbsp;
            <span className={`text-real-black font-workSans`}>
              {moment.unix(post.meta.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
          <div
            className={`text-real-black  font-workSans text-sm lg:text-base`}
          >
            {post.meta.readingTime.text}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostHeader;
