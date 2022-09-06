import { GetStaticProps } from "next";
import React, { ChangeEvent, useState } from "react";
import PostItem from "../../../components/blog/Post/PostItem";
import Layout from "../../../components/common/Layout";
import useBlog from "../../../stores/blog";
import ImageServiceInstance from "../../../service/image";
import { uploadImageData } from "../../../types/image";

const PublishPostPage = () => {
  const { data } = useBlog();
  const { title } = data;

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
          <button className="basic-btn">save</button>
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
