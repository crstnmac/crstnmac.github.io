"use client";
import { BlogSection } from "components";
import { allBlogs } from "contentlayer/generated";
import { compareDesc as compare } from "date-fns";

export default function BlogIndexPage() {
  const posts = allBlogs
    .filter((post) => post.published)
    .sort((a, b) => {
      return compare(new Date(a.date), new Date(b.date));
    });

  return <BlogSection posts={posts} />;
}
