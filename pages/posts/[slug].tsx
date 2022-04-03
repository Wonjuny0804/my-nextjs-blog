import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostFromSlug, PostMeta } from "../api/getAllPosts";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

// import rehypeHighlight from "rehype-highlight";
import H1 from "../../components/CustomeTags/H1";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import readingTime from "reading-time";
import rehypetoc from "rehype-toc";

import P from "../../components/CustomeTags/P";
import CODE from "../../components/CustomeTags/CODE";
import H2 from "../../components/CustomeTags/H2";
import H3 from "../../components/CustomeTags/H3";
import H4 from "../../components/CustomeTags/H4";
import H5 from "../../components/CustomeTags/H5";
import OL from "../../components/CustomeTags/OL";
import LI from "../../components/CustomeTags/LI";
import UL from "../../components/CustomeTags/UL";
import PostHeader from "../../components/PostHeader/PostHeader";
import BLOCKQUOTE from "../../components/CustomeTags/BLOCKQUOTE";
import A from "../../components/CustomeTags/A";
import Footer from "../../components/Footer/Footer";

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
        className={`min-w-[320px] px-4 mt-10 lg:w-[800px] lg:mt-10 lg:m-auto contentSize:relative`}
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
            code: (props) => <CODE>{props.children}</CODE>,
            blockquote: (props) => <BLOCKQUOTE>{props.children}</BLOCKQUOTE>,
            a: (props) => {
              return <A href={props.href}>{props.children}</A>;
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
