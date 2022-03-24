import React, { FC } from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostFromSlug, PostMeta } from "../api/getAllPosts";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import rehypeHighlight from "rehype-highlight";
import H1 from "../../components/CustomeTags/H1";
import LandingHeader from "../../components/Landing/LandingHeader";
import moment from "moment";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import readingTime from "reading-time";
import P from "../../components/CustomeTags/P";
import CODE from "../../components/CustomeTags/CODE";

interface PostDetailProps {
  post: {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: PostMeta;
  };
}

const PostDetailPage: FC<PostDetailProps> = ({ post }) => {
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

      <section className={`min-w-[320px] px-4 lg:w-[800px] lg:mt-10 lg:m-auto`}>
        <MDXRemote
          {...post.source}
          components={{
            h1: (props) => <H1>{props.children}</H1>,
            p: (props) => <P>{props.children}</P>,
            code: (props) => <CODE>{props.children}</CODE>,
          }}
        />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeHighlight,
        rehypePrism,
        rehypeCodeTitles,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: "anchor",
            },
          },
        ],
      ],
    },
  });

  return {
    props: {
      post: {
        source: mdxSource,
        meta: {
          ...meta,
          readingTime: readingTime(content),
        },
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: post.meta.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PostDetailPage;
