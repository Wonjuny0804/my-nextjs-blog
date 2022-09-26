import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { sync } from "glob";

const POSTS_PATH = path.join(process.cwd(), "posts");
const JS_POSTS_PATH = path.join(process.cwd(), "/javascript/posts");

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const filename = parts[parts.length - 1];
    const [slug, _ext] = filename.split(".");
    return slug;
  });
};

export interface Post {
  content: string;
  meta: PostMeta;
}

export interface PostMeta {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  author: string;
  createdAt: number;
  readingTime: {
    text: string;
    minutes?: number;
    time?: number;
    words?: number;
  };
}

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(source);

  return {
    content,
    meta: {
      excerpt: data.excerpt ?? "",
      slug,
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      createdAt: (data.date ?? new Date()).toString(),
      author: data.author ?? "Bryan",
      readingTime: {
        text: data.readingTime?.text ?? "3 min read",
      },
    },
  };
};

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((postA, postB) => {
      if (postA.meta.createdAt < postB.meta.createdAt) {
        return -1;
      }
      if (postA.meta.createdAt > postB.meta.createdAt) {
        return 1;
      }
      return 0;
    })
    .reverse();

  return posts;
};
