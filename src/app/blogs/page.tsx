import PostCover from "@/components/post-cover";
import { TypographyH1 } from "@/components/ui/typography";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function BlogPage() {
  const allPosts = getAllPosts();

  return (
    <div className="">
      <TypographyH1>Blogs</TypographyH1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:pt-4 mb-16">
        {allPosts.map((post) => {
          return <PostCover key={post.slug} {...post} />;
        })}
      </div>
    </div>
  );
}
