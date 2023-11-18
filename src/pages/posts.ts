import { readdirSync } from "fs";

const postFiles = readdirSync("./src/pages/posts");

export const posts = postFiles.map((fileName) => {
  const slug = fileName.replace(/\.(mdx?|astro)/, "");
  const title = slug.replace(/-/g, " ");
  return {
    slug,
    title,
  };
}) as { slug: string; title: string }[];

