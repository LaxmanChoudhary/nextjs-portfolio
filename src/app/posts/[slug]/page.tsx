import { MDXRenderer } from "@/components/mdx-renderer";
import { getPostBySlug } from "@/lib/api";
import { mdxToHtml } from "@/lib/mdxToHtml";
import { formatPostDate } from "@/lib/utils";
import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

export interface PostData {
  title: string;
  excerpt: string;
  coverImage: string;
  postedOn: string;
  updatedOn: string;
  category?: string;
}

export default async function PostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { html, wordcount } = await mdxToHtml(post.content || "");

  return (
    <div className="max-w-prose mx-auto">
      <div className="mb-8">
        <p className="text-4xl font-bold">{post.title}</p>
        <p className="text-sm tracking-tight">{formatPostDate(post.postedOn)}</p>
      </div>
      <div className="prose dark:prose-invert mx-auto">
        <MDXRenderer {...html} />
      </div>
    </div>
  );
}
