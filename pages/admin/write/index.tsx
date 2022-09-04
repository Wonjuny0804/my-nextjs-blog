import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

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
  title: "Write new post page",
};

const WritePostPage = () => {
  return (
    <Layout metaData={pageMetaData}>
      <div>
        <div className="flex gap-3 my-3">
          <label htmlFor="title" className={`lg:text-3xl font-workSans`}>
            Title:
          </label>
          <input
            type="text"
            id="title"
            placeholder="Please write your title"
            className={`lg:text-3xl font-workSans outline-none bg-[#f4f4f0] flex-grow`}
          />
        </div>
        <div className="flex gap-3 my-2">
          <label>author:</label>
          <input
            type="text"
            id="author"
            placeholder="Please write author name"
            className="bg-[#f4f4f0] outline-none flex-grow"
          />
        </div>
        <TextEditor />
        <Link href="/admin">
          <a>Go back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default WritePostPage;
