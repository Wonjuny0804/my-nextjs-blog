import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../../../components/common/Layout/Layout";
import PostServiceInstance from "../../../service/posts";
import { PostDocument } from "../../../../types/post";
import moment from "moment";
import Image from "next/image";
import AdminServiceInstance from "../../../service/admin";
import { useRouter } from "next/router";

interface PostData extends PostDocument {
  url: string;
  imageUrl: string;
  excerpt: string;
  deleted: boolean;
}

interface Props {
  posts: Array<PostData>;
}

const BlogAdminPage = ({ posts }: Props) => {
  const router = useRouter();

  useEffect(() => {
    AdminServiceInstance.validateSignIn(
      () => {},
      () => {
        router.replace("/admin/signin");
      }
    );
  }, [router]);
  return (
    <Layout metaData={{ title: "Blog admin page" }}>
      <div className="px-8 pt-8 lg:w-[1024px] lg:mx-auto min-h-[calc(100vh-200px)]">
        <Link
          href="/admin/write"
          className="block py-2 text-white font-medium text-right"
        >
          Write new Post
        </Link>

        <h3 className={`text-2xl text-white mt-10`}>Posts</h3>
        <section className="mt-4 font-montserrat grid gap-20">
          {posts &&
            posts.map((post, index) => {
              const {
                title,
                url,
                createdAt,
                // thumbnailImage,
                published,
                excerpt,
                deleted,
              } = post;
              // const imageUrl =
              //   thumbnailImage?.imageUrl ?? "/posts/default-image.png";
              const createdDate = moment.unix(+createdAt).format("YYYY/MM/DD");
              return (
                <Link
                  key={post.id + index + ""}
                  className="font-medium text-white"
                  href={`/admin/blog/${url}`}
                  passHref
                >
                  <div className="lg:h-[320px]">
                    <div className="flex flex-col justify-between overflow-hidden">
                      {deleted ? (
                        <span className="block text-xs w-fit text-[#eacece]">
                          삭제
                        </span>
                      ) : (
                        <span
                          className={` block text-xs w-fit ${
                            published ? "text-primary-blue" : ""
                          }`}
                        >
                          {published ? "배포됨" : "배포 전"}
                        </span>
                      )}

                      <div>
                        <h3 className="text-xl leading-[1.2] font-medium line-clamp-3">
                          {title}
                        </h3>

                        <p className="my-10 text-sm lg:line-clamp-6 font-normal line-clamp-5">
                          {excerpt}
                        </p>

                        <span className="block text-xs">
                          작성일 : {createdDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </section>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await PostServiceInstance.getPosts();
  const postsData = posts?.map((post) => ({
    ...post.data,
    createdAt: post.data.createdAt.seconds,
    updatedAt: post.data.updatedAt.seconds,
    deleted: post.data?.deleted ?? false,
    deletedAt: post.data?.deletedAt ? post.data.deletedAt.seconds : null,
    id: post.id,
    url: post.data.url,
  }));

  postsData?.sort((postA, postB) => postB.updatedAt - postA.updatedAt);

  return {
    props: {
      posts: postsData,
    },
  };
};

export default BlogAdminPage;
