import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { PostMeta } from "../api/getAllPosts";
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
import PostServiceInstance from "../../service/posts";

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
        className={`min-w-[320px] font-notoSans px-8 mt-10 lg:w-[800px] lg:mt-10 lg:m-auto contentSize:relative`}
      >
        <MDXRenderer source={post.source} />
      </section>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { url } = params as { url: string };
  const posts = await PostServiceInstance.getPostByTitle(url);
  const { data } = posts[0];
  const { content } = data;

  const meta = {
    author: data.author,
    excerpt: data.excerpt,
    createdAt: data.createdAt.seconds,
    updatedAt: data.updatedAt.seconds,
    title: data.title,
  };

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
  const posts = await PostServiceInstance.getPosts({ published: true });
  if (!posts)
    //FIXME: please fix this place logic...!
    return {
      paths: [],
      fallback: true,
    };

  const paths = posts.map((post) => ({
    params: {
      url: post.data.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PostDetailPage;
