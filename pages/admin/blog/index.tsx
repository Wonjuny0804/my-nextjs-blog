import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../../../components/common/Layout";
import PostServiceInstance from "../../../service/posts";
import { PostDocument } from "../../../types/post";
import moment from "moment";
import Image from "next/image";

interface PostData extends PostDocument {
  url: string;
  imageUrl: string;
  excerpt: string;
}

interface Props {
  posts: Array<PostData>;
}

const BlogAdminPage = ({ posts }: Props) => {
  return (
    <Layout metaData={{ title: "Blog admin page" }}>
      <div className="mt-4 lg:w-[1024px] lg:mx-auto ">
        <Link href="/admin/write">
          <a className="block border-2 mx-4 px-4 py-2 font-workSans font-bold">
            Write new Post
          </a>
        </Link>
        <section className="mx-4 mt-4 font-workSans grid grid-cols-2 gap-4">
          {posts &&
            posts.map((post, index) => {
              const {
                title,
                url,
                createdAt,
                thumbnailImage,
                published,
                excerpt,
              } = post;
              const imageUrl = thumbnailImage?.imageUrl;
              const createdDate = moment.unix(+createdAt).format("YYYY/MM/DD");
              return (
                <Link key={post.id + index + ""} href={`/admin/blog/${url}`}>
                  <a className="font-medium">
                    <div className="grid grid-cols-2 justify-between border-2 min-h-[160px] lg:h-[320px]">
                      {imageUrl && (
                        <div className="relative h-full w-full border-r-2">
                          <Image
                            src={imageUrl ?? "/posts/default-image.png"}
                            alt="."
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      )}
                      <div className="p-2 flex flex-col justify-between">
                        <div>
                          <h3 className="font-workSans text-2xl font-medium">
                            {title}
                          </h3>
                          <span className="font-workSans font-normal text-xs">
                            {createdDate}
                          </span>
                          <p className="lg:line-clamp-6 font-normal">
                            {excerpt}
                          </p>
                        </div>
                        <span
                          className={` block text-xs px-1 py-1 w-fit font-light ${
                            published
                              ? "text-primary-blue border-primary-blue border"
                              : "border"
                          }`}
                        >
                          {published ? "published" : "yet"}
                        </span>
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
  const posts = await PostServiceInstance.getPosts(1, 1);

  return {
    props: {
      posts: posts?.map((post) => ({
        ...post.data,
        createdAt: post.data.createdAt.seconds,
        updatedAt: post.data.updatedAt.seconds,
        id: post.id,
        url: post.data.url,
      })),
    },
  };
};

export default BlogAdminPage;
