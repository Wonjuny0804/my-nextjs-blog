import moment from "moment";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import React, { FC } from "react";
import { PostMeta } from "../../../pages/api/getAllPosts";
import NavBar from "../../common/NavBar";

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
      <NavBar />
      <section className={`px-4 lg:w-[800px] lg:m-auto`}>
        <h1
          className={`text-[32px] lg:leading-[56px] mt-[40px] lg:mt-[100px] lg:text-[40px] font-bold font-montserrat text-white`}
        >
          {post.meta.title}
        </h1>
        <div className={`flex justify-between items-center lg:mt-4`}>
          <div
            className={`flex items-center text-sm lg:text-base mt-3 lg:mt-0`}
          >
            <span className={`text-white font-montserrat`}>
              {post.meta.author}
            </span>
            &nbsp;/&nbsp;
            <span className={`text-white font-montserrat`}>
              {moment.unix(post.meta.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
          <div className={`text-white  font-montserrat text-sm lg:text-base`}>
            {post.meta.readingTime.text}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostHeader;
