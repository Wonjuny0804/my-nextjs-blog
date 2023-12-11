import React, { FC } from "react";
import { GetStaticProps } from "next";
import { PostMeta } from "../api/getAllPosts";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import Footer from "../../components/common/Footer/Footer";
import { Client } from "@notionhq/client";

interface PostDetailProps {
  post: {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: PostMeta;
  };
}

const PostDetailPage: FC<PostDetailProps> = ({ post }) => {
  console.log(post);
  return (
    <>
      {/* <PostHeader post={post} /> */}

      <section
        className={`min-w-[320px] font-notoSans px-8 mt-10 lg:w-[800px] lg:mt-10 lg:m-auto contentSize:relative`}
      ></section>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  console.log(params);
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  // we now get the page from notion
  const getPost = async () => {
    const pageId = typeof params?.url === "string" ? params?.url : "";

    try {
      const values = await Promise.all([
        notion.pages.retrieve({ page_id: pageId }),
        notion.blocks.children.list({ block_id: pageId }),
      ]);

      return values;
    } catch (err) {
      console.log(err);
    }

    return [null, null];
  };

  const [pageProperties, pageContent] = await getPost();
  console.log(pageProperties, pageContent);

  return {
    props: {
      post: {
        meta: pageProperties,
        source: pageContent,
      },
    },
  };
};

export default PostDetailPage;
