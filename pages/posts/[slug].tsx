/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostFromSlug, PostMeta } from "../api/getAllPosts";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import readingTime from "reading-time";
import rehypetoc from "rehype-toc";
import PostHeader from "../../components/blog/PostHeader/PostHeader";
import Footer from "../../components/common/Footer/Footer";
import MDXRenderer from "../../components/blog/MDXRenderer";

export const serializeOptions = {
  mdxOptions: {
    rehypePlugins: [
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
      rehypetoc,
    ],
  },
};

interface PostDetailProps {
  post: {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: PostMeta;
  };
}

const PostDetailPage: FC<PostDetailProps> = ({ post }) => {
  return (
    <>
      <PostHeader post={post} />

      <section
        className={`min-w-[320px] font-notoSans px-4 mt-10 lg:w-[800px] lg:mt-10 lg:m-auto contentSize:relative`}
      >
        <MDXRenderer source={post.source} />
      </section>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);

  const mdxSource = await serialize(content, serializeOptions);

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
