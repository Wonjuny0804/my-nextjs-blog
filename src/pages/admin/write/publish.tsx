import { GetStaticProps } from "next";
import React, { ChangeEvent, useEffect, useState } from "react";
import PostItem from "../../../components/blog/Post/PostItem";
import Layout from "../../../components/common/Layout/Layout";
import useBlog from "../../../stores/blog";
import ImageServiceInstance from "../../../service/image";
import AdminServiceInstance from "../../../service/admin";
import PostServiceInstance from "../../../service/posts";
import { uploadImageData } from "../../../../types/image";
import { useRouter } from "next/router";

const PublishPostPage = () => {
  const { data, resetData, savePost } = useBlog();
  const { title } = data;
  const router = useRouter();

  const [excerpt, setExcerpt] = useState<string>("");
  const [imageData, setImageData] = useState<uploadImageData>({
    imageUrl: "/posts/default-image.png",
    contentType: "",
    name: "",
    bucket: "",
  });
  const [published, setPublished] = useState<boolean>(false);
  const [postId, setPostId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files;
    if (!imageFile) return;
    setLoading(true);

    const imageData = await ImageServiceInstance.uploadBlogPostThumbnail(
      imageFile[0]
    );
    setImageData(imageData);
    setLoading(false);
  };

  const handleSave = async (data: {
    title: string;
    content: string;
    author?: string;
    excerpt?: string;
    thumbnailImage?: uploadImageData;
    postId?: string;
  }) => {
    if (!data.title || !data.content) return;

    const result = data?.postId
      ? await PostServiceInstance.editPost({
          ...data,
          published,
          postId: data.postId,
        })
      : await PostServiceInstance.createNewPost(data);

    if (result === "success") {
      resetData();
      router.push("/admin/blog");
    }
  };

  const handlePublish = async (data: {
    title: string;
    content: string;
    author?: string;
    excerpt?: string;
    thumbnailImage?: uploadImageData;
    postId?: string;
  }) => {
    if (!data.title || !data.content) return;

    const result = data?.postId
      ? await PostServiceInstance.editPost({
          ...data,
          published: !published,
          postId: data?.postId,
        })
      : await PostServiceInstance.createNewPost({
          ...data,
          publish: true,
        });

    if (result === "success") {
      resetData();
      router.push("/admin/blog");
    }
  };

  useEffect(() => {
    const getPostData = async () => {
      const postId = router.query?.postId as string;
      if (!postId) return;

      try {
        const data = await PostServiceInstance.getPost(postId);
        if (!data) return;

        const { excerpt, thumbnailImage, published, title, author, content } =
          data;
        console.log(data);
        setExcerpt(excerpt);
        setImageData(thumbnailImage);
        setPublished(published);
        setPostId(postId);
        savePost({
          title,
          author,
          content,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getPostData();
  }, [router.query, savePost]);

  useEffect(() => {
    AdminServiceInstance.validateSignIn(
      () => {},
      () => router.replace("/admin/signin")
    );
  }, [router]);

  return (
    <Layout noNav>
      <div className="mx-4 mt-4 flex flex-col lg:w-[780px] xl:w-[780px] lg:m-auto">
        <h1 className="text-xl font-montserrat text-white font-medium lg:mt-10">
          This is where you will decide the meta data for the posts
        </h1>

        <textarea
          className="min-h-[140px] mt-8 rounded-md border-[2px] px-2 py-1 font-workSans outline-none resize-none"
          autoComplete="off"
          maxLength={200}
          placeholder={"Please write an excerpt for the post"}
          onChange={(e) => setExcerpt(e.target.value)}
          value={excerpt}
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
            thumbnailImageUrl={
              imageData?.imageUrl ?? "/posts/default-image.png"
            }
            loading={loading}
          />
        </section>

        <section className="flex justify-between mt-4 font-workSans">
          <button
            className="basic-btn"
            onClick={() =>
              handleSave({
                ...data,
                excerpt,
                thumbnailImage: imageData,
                postId,
              })
            }
          >
            save
          </button>
          <button
            className="basic-btn"
            onClick={() =>
              handlePublish({
                ...data,
                excerpt,
                thumbnailImage: imageData,
                postId,
              })
            }
          >
            {published ? "unpublish" : "publish"}
          </button>
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
