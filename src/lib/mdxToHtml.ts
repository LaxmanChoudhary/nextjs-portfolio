import {serialize} from 'next-mdx-remote/serialize';
// import readingTime from 'reading-time';
import {rehypeAccessibleEmojis} from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

 
// import {MdxContent} from '@/types/types';
 
// import {shikiOptions} from './shiki';
 
export async function mdxToHtml(source: string): Promise<any> {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      format: 'mdx',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, {properties: {className: ['anchor']}}],
        // [rehypePrettyCode, shikiOptions],
        rehypeAccessibleEmojis,
        // @ts-expect-error
        [rehypePrettyCode, {}]
      ],
    },
  });
 
  return {
    html: mdxSource,
    wordCount: source.split(/\s+/gu).length,
    // readingTime: readingTime(source).text,
  };
}