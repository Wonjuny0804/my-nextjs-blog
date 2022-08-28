/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostFromSlug, PostMeta } from "../api/getAllPosts";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

// import rehypeHighlight from "rehype-highlight";
import H1 from "../../components/CustomTags/H1";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import readingTime from "reading-time";
import rehypetoc from "rehype-toc";

import P from "../../components/CustomTags/P";
import CODE from "../../components/CustomTags/CODE";
import H2 from "../../components/CustomTags/H2";
import H3 from "../../components/CustomTags/H3";
import H4 from "../../components/CustomTags/H4";
import H5 from "../../components/CustomTags/H5";
import OL from "../../components/CustomTags/OL";
import LI from "../../components/CustomTags/LI";
import UL from "../../components/CustomTags/UL";
import PostHeader from "../../components/PostHeader/PostHeader";
import BLOCKQUOTE from "../../components/CustomTags/BLOCKQUOTE";
import A from "../../components/CustomTags/A";
import Footer from "../../components/common/Footer/Footer";
import Image from "next/image";

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
        <MDXRemote
          {...post.source}
          components={{
            h1: (props) => <H1>{props.children}</H1>,
            h2: (props) => <H2>{props.children}</H2>,
            h3: (props) => <H3>{props.children}</H3>,
            h4: (props) => <H4>{props.children}</H4>,
            h5: (props) => <H5>{props.children}</H5>,
            h6: (props) => <H5>{props.children}</H5>,
            p: (props) => <P>{props.children}</P>,
            ol: (props) => <OL>{props.children}</OL>,
            ul: (props) => <UL>{props.children}</UL>,
            li: (props) => <LI>{props.children}</LI>,
            // code: (props) => <CODE>{props.children}</CODE>,
            blockquote: (props) => <BLOCKQUOTE>{props.children}</BLOCKQUOTE>,
            a: (props) => {
              return <A href={props.href}>{props.children}</A>;
            },
            img: (props) => {
              return <img src={props?.src ?? ""} alt={props?.alt ?? "Image"} />;
            },
          }}
        />
      </section>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);

  const mdxSource = await serialize(content, {
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
