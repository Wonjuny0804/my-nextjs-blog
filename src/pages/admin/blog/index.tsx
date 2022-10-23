import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../../../components/common/Layout";
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
      <div className="mt-4 lg:w-[1024px] lg:mx-auto ">
        <Link href="/admin/write">
          <a className="block border-2 mx-4 px-4 py-2 font-montserrat text-white font-bold">
            Write new Post
          </a>
        </Link>
        <section className="mx-4 mt-4 font-montserrat grid gap-4">
          {posts &&
            posts.map((post, index) => {
              const {
                title,
                url,
                createdAt,
                thumbnailImage,
                published,
                excerpt,
                deleted,
              } = post;
              const imageUrl =
                thumbnailImage?.imageUrl ?? "/posts/default-image.png";
              const createdDate = moment.unix(+createdAt).format("YYYY/MM/DD");
              return (
                <Link key={post.id + index + ""} href={`/admin/blog/${url}`}>
                  <a className="font-medium text-white border border-white">
                    <div className="grid grid-cols-2 justify-between  min-h-[160px] lg:h-[320px]">
                      {imageUrl && (
                        <div className="relative h-full w-full border-r-1">
                          <Image
                            src={imageUrl ?? "/posts/default-image.png"}
                            alt="."
                            layout="fill"
                            objectFit="cover"
                            blurDataURL={imageUrl ?? "/posts/default-image.png"}
                            placeholder="blur"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-2 flex flex-col justify-between overflow-hidden">
                        <div>
                          <h3 className="font-montserrat text-2xl font-medium line-clamp-3">
                            {title}
                          </h3>
                          <span className="font-montserrat font-normal text-xs">
                            {createdDate}
                          </span>
                          <p className="lg:line-clamp-6 font-normal line-clamp-5">
                            {excerpt}
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <span
                            className={` block text-xs px-1 py-1 w-fit font-light ${
                              published
                                ? "text-primary-blue border-primary-blue border"
                                : "border"
                            }`}
                          >
                            {published ? "published" : "yet"}
                          </span>
                          {deleted && (
                            <span className="block text-xs px-1 py-1 w-fit font-light border border-red-700 text-red-700">
                              deleted
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
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
