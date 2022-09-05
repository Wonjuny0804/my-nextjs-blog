import { GetStaticProps } from "next";
import React from "react";
import PostItem from "../../../components/blog/Post/PostItem";
import Layout from "../../../components/common/Layout";
import useBlog from "../../../stores/blog";

const PublishPostPage = () => {
  const { data } = useBlog();
  console.log(data);

  return (
    <Layout noNav>
      <div className="mx-4 mt-4 flex flex-col">
        <h1 className="text-xl font-workSans font-medium">
          This is where you will decide the meta data for the posts
        </h1>

        <textarea
          className="min-h-[140px] mt-8 rounded-md border-[2px] px-2 py-1 font-workSans outline-none resize-none"
          autoComplete="off"
          maxLength={100}
          placeholder={"Please write an excerpt for the post"}
        />

        <div className="mt-4">
          <label className="font-medium">Thumbnail Image</label>
          <input type="file" accept="image/*" />
        </div>

        <PostItem
          id={"1"}
          title={"My new blog first Post!"}
          excerpt={
            "I am happy to announce to everyone that now I have a new blog posting CMS function in my blog I want to share how I did this journey"
          }
          tags={["react", "nextjs", "firebase"]}
          createdDate={new Date().toDateString()}
          thumbnailImageUrl={
            "https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png"
          }
        />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default PublishPostPage;
