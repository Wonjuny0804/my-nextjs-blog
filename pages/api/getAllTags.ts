import { getSlugs } from "./getAllPosts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "posts");

export const getPostMetaFromSlug = (slug: string) => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath, "utf8");
  const { data } = matter(source);

  return data;
};

export const getAllTags = () => {
  const postTags = getSlugs()
    .map((slug) => getPostMetaFromSlug(slug))
    .map((meta) => ({
      tags: meta?.tags,
    }));

  const tagsInPosts = postTags.reduce((acc, postTag) => {
    const tagsInPost = postTag?.tags ?? [];
    for (let i = 0; i < tagsInPost.length; i++) {
      if (acc.includes(tagsInPost[i])) continue;

      acc.push(tagsInPost[i]);
    }

    return acc;
  }, [] as Array<any>);

  return tagsInPosts;
};
