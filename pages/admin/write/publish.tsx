import { GetStaticProps } from "next";
import React, { ChangeEvent, useRef, useState } from "react";
import PostItem from "../../../components/blog/Post/PostItem";
import Layout from "../../../components/common/Layout";
import useBlog from "../../../stores/blog";
import ImageServiceInstance from "../../../service/image";
import PostServiceInstance from "../../../service/posts";
import { uploadImageData } from "../../../types/image";
import { useRouter } from "next/router";

const PublishPostPage = () => {
  const { data, resetData } = useBlog();
  const { title } = data;
  const router = useRouter();

  const [excerpt, setExcerpt] = useState<string>("");
  const [imageData, setImageData] = useState<uploadImageData>({
    imageUrl: "/posts/default-image.png",
    contentType: "",
    name: "",
    bucket: "",
  });

  const handleUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files;
    if (!imageFile) return;

    const imageData = await ImageServiceInstance.uploadBlogPostThumbnail(
      imageFile[0]
    );
    setImageData(imageData);
  };

  const handleSave = async (data: {
    title: string;
    content: string;
    author?: string;
    excerpt?: string;
    thumbnailImage?: uploadImageData;
  }) => {
    // TODO: Add a saving logic
    // 1. Save the post to DB
    // 2. navigate to posts page inside admin
    if (!data.title || !data.content) return;

    const result = await PostServiceInstance.createNewPost(data);
    if (result === "success") {
      resetData();
      router.push("/admin/blog");
    }
  };

  const handlePublish = async () => {
    // TODO: Add a publishing logic
    // 1. save the whole file to DB with a publish "true"
    // 2. navigate to /posts/{published post} page to show how it looks.
  };

  return (
    <Layout noNav>
      <div className="mx-4 mt-4 flex flex-col">
        <h1 className="text-xl font-workSans font-medium">
          This is where you will decide the meta data for the posts
        </h1>

        <textarea
          className="min-h-[140px] mt-8 rounded-md border-[2px] px-2 py-1 font-workSans outline-none resize-none"
          autoComplete="off"
          maxLength={200}
          placeholder={"Please write an excerpt for the post"}
          onChange={(e) => setExcerpt(e.target.value)}
        />

        <div className="mt-4">
          <label className="font-medium">Thumbnail Image</label>
          <input type="file" accept="image/*" onChange={handleUploadImage} />
        </div>

        <section className="mt-6">
          <h3 className="text-lg font-workSans font-medium leading-5 mb-3">
            How the post would look like from the list view
          </h3>
          <PostItem
            id={"1"}
            title={title}
            excerpt={excerpt}
            tags={["react", "nextjs", "firebase"]}
            createdDate={new Date().toDateString()}
            thumbnailImageUrl={imageData.imageUrl}
          />
        </section>

        <section className="outline-green-300 outline flex justify-between mt-4 font-workSans">
          <button
            className="basic-btn"
            onClick={() =>
              handleSave({
                ...data,
                excerpt,
                thumbnailImage: imageData,
              })
            }
          >
            save
          </button>
          <button className="basic-btn">publish</button>
        </section>
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
