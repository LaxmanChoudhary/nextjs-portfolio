import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { PostData } from "@/app/posts/[slug]/page";
import { mdxToHtml } from "./mdxToHtml";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export interface PostWithSlug extends PostData {
  slug: string;
  content: string;
}

export async function getFullPostBySlug(slug: string) {
  const fullPath = join(postsDirectory, slug, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {data: frontmatter, content} = matter(fileContents);
 
  const mdxContent = await mdxToHtml(content);
 
  return {slug, frontmatter, content: mdxContent};
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as PostWithSlug;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.updatedOn > post2.updatedOn ? -1 : 1));
  return posts;
}
