import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Layout = dynamic(() => import("../../components/common/Layout"), {
  ssr: true,
});
const TextEditor = dynamic(
  () => import("../../components/blog/TextEditor/TextEditor"),
  {
    ssr: false,
  }
);

const pageMetaData = {
  title: "Write new post",
};

const WritePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const router = useRouter();

  const handleSaveSuccess = () => router.push("/admin");

  return (
    <Layout metaData={pageMetaData}>
      <div className="mx-4">
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
            className="bg-[#f4f4f0] outline-none flex-grow font-medium"
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <TextEditor
          mode="create"
          title={title}
          author={author}
          editData={null}
          handleSaveSuccess={handleSaveSuccess}
        />
        <Link href="/admin">
          <a>Go back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default WritePostPage;
