import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../../../components/common/Layout";
import PostServiceInstance from "../../../service/posts";
import { PostDocument } from "../../../types/post";
import { convertTitleToURL } from "../../../utils/convertTitles";

// TODO: get all posts from database and show them as a list

interface PostData extends PostDocument {
  url: string;
}

interface Props {
  posts: Array<PostData>;
}

const BlogAdminPage = ({ posts }: Props) => {
  console.log(posts);
  return (
    <Layout metaData={{ title: "Blog admin page" }}>
      <div className="mx-4 font-workSans ">
        {posts &&
          posts.map((post, index) => {
            const { title, url } = post;
            return (
              <Link key={post.id + index + ""} href={`/admin/blog/${url}`}>
                <a className="font-medium">
                  <h3>{title}</h3>
                </a>
              </Link>
            );
          })}
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
        createdAt: post.data.createdAt.toString(),
        updatedAt: post.data.updatedAt.toString(),
        id: post.id,
        url: convertTitleToURL(post.data.title),
      })),
    },
  };
};

export default BlogAdminPage;
