import React from "react";
import { DocumentData } from "firebase/firestore";
import { GetServerSideProps } from "next";
import PostServiceInstance from "../../../service/posts";
import { serialize } from "next-mdx-remote/serialize";
import { serializeOptions } from "../../posts/[slug]";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import MDXRenderer from "../../../components/blog/MDXRenderer";

interface Props {
  data?: DocumentData | null;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const EditPostPage = (props: Props) => {
  const { data, source } = props;
  console.log(props);
  return (
    <div>
      <section
        className={`min-w-[320px] font-notoSans px-4 mt-10 lg:w-[800px] lg:mt-10 lg:m-auto contentSize:relative`}
      >
        <MDXRenderer source={source} />
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // probably get data from server
  const { params } = context;
  const postId = params?.postId ?? "";

  try {
    const postData = await PostServiceInstance.getPost(postId as string);

    const mdxSource = await serialize(postData?.content, serializeOptions);
    return {
      props: {
        data: postData,
        source: mdxSource,
      },
    };
  } catch (error: unknown) {
    return {
      props: {},
    };
  }
};

export default EditPostPage;
