import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "../../../components/common/Layout";
import PostServiceInstance from "../../../service/posts";
import { PostDocument } from "../../../types/post";
import { convertURLToTitle } from "../../../utils/convertTitles";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const TextEditor = dynamic(
  () => import("../../../components/blog/TextEditor/TextEditor"),
  {
    ssr: false,
  }
);

interface Props {
  data: PostDocument;
}

const EditBlogPostPage = ({ data }: Props) => {
  const { content, author: postAuthor, title: postTitle, id } = data;
  const router = useRouter();

  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const handleSaveEdit = () => router.push("/admin/blog");

  useEffect(() => {
    setTitle(postTitle);
    setAuthor(postAuthor);
  }, []);

  return (
    <Layout>
      <div className="lg:w-[1024px] xl:w-[1280px] lg:m-auto">
        <div className="flex gap-3 mt-3 font-workSans">
          <label
            htmlFor="title"
            className={`text-lg font-bold lg:text-3xl font-workSans`}
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Please write your title"
            className={`text-lg font-bold lg:text-3xl font-workSans outline-none bg-[#f4f4f0] flex-grow`}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="flex gap-3 mb-2">
          <label className="font-medium">author: </label>
          <input
            type="text"
            id="author"
            placeholder="Please write author name"
            value={author}
            className="bg-[#f4f4f0] outline-none flex-grow font-medium"
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <TextEditor
          handleSaveSuccess={handleSaveEdit}
          editData={{
            content,
            postId: id,
          }}
          title={title}
          author={author}
          mode="edit"
          height={"800px"}
        />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const title = context.query.postTitle as string;

  const post = await PostServiceInstance.getPostByTitle(title);
  return {
    props: {
      data: {
        ...post[0].data,
        id: post[0].id,
        updatedAt: post[0].data.updatedAt.seconds,
        createdAt: post[0].data.createdAt.seconds,
      },
    },
  };
};

export default EditBlogPostPage;
