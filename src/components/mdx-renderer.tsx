"use client"
import type {MDXRemoteSerializeResult} from 'next-mdx-remote';
import {MDXRemote} from 'next-mdx-remote';
 
// import {InfoBox} from './BlockQuotes';
 
// export const components = {InfoBox};
 
export function MDXRenderer(props: MDXRemoteSerializeResult) {
  return <MDXRemote {...props} />;
}