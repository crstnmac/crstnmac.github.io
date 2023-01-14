"use client";
import { BlogSection, Box, AboutMe } from "components";
import { allBlogs } from "contentlayer/generated";
import { compareDesc as compare } from "date-fns";

export default function BlogIndexPage() {
  const posts = allBlogs
    .filter((post) => post.published)
    .sort((a, b) => {
      return compare(new Date(a.date), new Date(b.date));
    });

  return (
    <Box as="section" className="h-full flex flex-col justify-between">
      <BlogSection posts={posts} />
      <Box fullSize className="mt-auto mb-0 mx-0">
        <AboutMe />
      </Box>
    </Box>
  );
}
