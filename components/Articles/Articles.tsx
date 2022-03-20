import React, { FC } from "react";
import { PostMeta } from "../../pages/api/getAllPosts";
import Link from "next/link";

interface Props {
  posts: PostMeta[];
}

const Articles: FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Articles;
