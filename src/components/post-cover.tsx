import { PostWithSlug } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import { formatPostDate } from "@/lib/utils";

export default function PostCover({
  title,
  updatedOn,
  coverImage,
  excerpt,
  postedOn,
  slug,
  content,
  category,
}: PostWithSlug) {
  return (
    <article className="relative justify-self-center">
      <Link href={`/posts/${slug}`}>
        <div className="max-w-[450px] min-w-[350px]">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={coverImage}
              alt={`cover image for post ${title}`}
              className="absolute rounded object-cover brightness-75 hover:brightness-90"
              fill
            />
          </AspectRatio>
        </div>
      </Link>
      <div className="absolute bottom-0 text-white p-4">
        {postedOn !== updatedOn && <p className="text-xs">Updated</p>}
        <div className="flex gap-2">
          <p className="text-sm">{formatPostDate(postedOn)}</p>
          {"/"}
          {category && <p className="text-sm tracking-tight">{category}</p>}
        </div>
        <p className="text-lg font-semibold">{title}</p>
        <p>{excerpt}</p>
      </div>
    </article>
  );
}
