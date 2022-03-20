import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { sync } from "glob";

const POSTS_PATH = path.join(process.cwd(), "posts");

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
  date: string;
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
      date: (data.date ?? new Date()).toString(),
    },
  };
};

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((postA, postB) => {
      if (postA.meta.date > postB.meta.date) {
        return -1;
      }
      if (postA.meta.date < postB.meta.date) {
        return 1;
      }
      return 0;
    })
    .reverse();

  return posts;
};
