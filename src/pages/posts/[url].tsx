import React, { FC } from "react";
import { GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import Footer from "../../components/common/Footer/Footer";
import { Client } from "@notionhq/client";
import {
  GetPageResponse,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionBlogPostResponseData } from "../../../types/NotionPostResponseData";
import NotionBlockRenderer from "components/blog/NotionBlockRenderer";

interface PostDetailProps {
  post: {
    source: ListBlockChildrenResponse;
    meta: NotionBlogPostResponseData | null;
  };
}

const PostDetailPage: FC<PostDetailProps> = ({ post }) => {
  const blocks = post.source.results;
  return (
    <>
      {/* <PostHeader post={post} /> */}

      <section
        className={`min-w-[320px] font-notoSans px-8 mt-10 lg:w-[800px] lg:mt-10 lg:m-auto contentSize:relative lg:min-h-[calc(100vh-250px)]`}
      >
        <div>
          <h1 className="text-4xl font-bold mt-6 mb-20 text-white ">
            {post.meta?.properties?.Name?.title[0].text.content}
          </h1>
        </div>
        <NotionBlockRenderer blocks={blocks} />
      </section>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetStaticProps = async ({ params }) => {
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

  const postData = await getPost();
  const pageProperties = postData[0] as NotionBlogPostResponseData;
  const pageContent = postData[1] as ListBlockChildrenResponse;
  console.log(pageProperties.properties.Name.title[0].text.content);

  const metaData = {
    title: pageProperties?.properties?.Name?.title[0].text.content,
    // description: pageProperties?.properties?.Description?.rich_text[0].text
    //   .content,
    // date: pageProperties?.properties?.?.date.start,
    // tags: pageProperties?.properties?.Tags?.multi_select.map(
    //   (tag) => tag.name
    // ),
  };

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
