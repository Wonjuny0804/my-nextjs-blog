import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Layout = dynamic(() => import("../../../components/common/Layout"), {
  ssr: true,
});
const TextEditor = dynamic(
  () => import("../../../components/blog/TextEditor/TextEditor"),
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
    <Layout metaData={pageMetaData} noNav>
      <div className="mx-4 mt-4 lg:mx-auto lg:w-[1024px] xl:w-[1280px]">
        <div className="mb-8">
          <div className="flex gap-3 mt-3 font-workSans">
            <label
              htmlFor="title"
              className={`text-xl font-bold lg:text-3xl font-workSans`}
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              autoFocus
              placeholder="Please write your title"
              className={`text-xl font-bold lg:text-3xl font-workSans outline-none bg-[#f4f4f0] flex-grow`}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="flex gap-3 mb-2">
            <label className="font-medium font-workSans capitalize">
              author:{" "}
            </label>
            <input
              type="text"
              id="author"
              placeholder="Please write author name"
              className="bg-[#f4f4f0] outline-none flex-grow font-medium font-workSans"
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
        </div>
        <TextEditor
          mode="create"
          title={title}
          author={author}
          editData={null}
          handleSaveSuccess={handleSaveSuccess}
        />
        <Link href="/admin">
          <a
            className={`block w-fit self-end font-workSans border-2 h-fit px-2
             py-1 bg-[#f2f2f5] rounded-full shadow-[3px_3px_0px_0px_#000000]
             `}
          >
            Go back
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default WritePostPage;