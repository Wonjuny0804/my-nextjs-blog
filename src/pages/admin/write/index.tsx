import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import AdminServiceInstance from "../../../service/admin";
import { useRouter } from "next/router";

const Layout = dynamic(
  () => import("../../../components/common/Layout/Layout"),
  {
    ssr: true,
  }
);
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

  useEffect(() => {
    AdminServiceInstance.validateSignIn(
      () => {},
      () => router.replace("/admin/signin")
    );
  }, [router]);

  return (
    <Layout metaData={pageMetaData} noNav fullWidth={false}>
      <div className="mx-4 mt-4 lg:mx-auto text-white lg:w-[1024px] xl:w-[1280px] xl:mt-8">
        <div className="mb-8">
          <div className="flex gap-3 mt-3 ">
            <label htmlFor="title" className={`text-xl font-bold lg:text-3xl `}>
              Title:
            </label>
            <input
              type="text"
              id="title"
              autoFocus
              placeholder="Please write your title"
              className={`text-xl font-bold lg:text-3xl  outline-none bg-transparent flex-grow`}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="flex gap-3 mb-2">
            <label className="font-medium  capitalize">author: </label>
            <input
              type="text"
              id="author"
              placeholder="Please write author name"
              className="bg-transparent outline-none flex-grow font-medium "
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
        </div>
        <TextEditor
          mode="create"
          title={title}
          author={author}
          editData={null}
        />
        <Link
          href="/admin"
          className={`block w-fit self-end h-fit
             py-1 text-white
             `}
        >
          Go back
        </Link>
      </div>
    </Layout>
  );
};

export default WritePostPage;
